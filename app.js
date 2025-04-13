"use strict";

const mqtt       = require("mqtt");
const http       = require("http");
const url        = require("url");
const { v4: uuidv4 } = require("uuid");

const mqttBrokerUrl = "mqtt://test.mosquitto.org";
const client        = mqtt.connect(mqttBrokerUrl);

const ACK_TIMEOUT  = 1000;  // ms
const MAX_ATTEMPTS = 3;

// Mapa de comandos pendientes: id → { timeout, resolve, reject, command }
const pending = new Map();

client.on("connect", () => {
  console.log("Conectado al broker MQTT");
  client.subscribe("lavacontrol/confirm", err => {
    if (err) console.error("Error al suscribir a confirm:", err);
  });
});

client.on("message", (topic, message) => {
  if (topic !== "lavacontrol/confirm") return;

  let payload;
  try {
    payload = JSON.parse(message.toString());
  } catch (e) {
    console.error("ACK no JSON válido:", message.toString());
    return;
  }
  const { id, ack } = payload;
  if (!pending.has(id)) {
    console.log(`ACK para id desconocido ${id}: ${ack}`);
    return;
  }

  const entry = pending.get(id);
  const { command, timeout, resolve } = entry;

  // Definimos los ACK válidos según el comando original
  let expected = [];
  if (command.cmd.startsWith("TIMER_ON_")) {
    expected = ["ACK_TIMER_ON", "ACK_TIMER_ON_ALREADY"];
  } else if (command.cmd === "ON") {
    expected = ["ACK_ON", "ACK_ON_ALREADY"];
  } else if (command.cmd === "OFF") {
    expected = ["ACK_OFF"];
  }

  if (expected.includes(ack)) {
    console.log(`ACK correcto para id ${id} (cmd=${command.cmd}): ${ack}`);
    clearTimeout(timeout);
    pending.delete(id);
    resolve({ id, ack });
  } else {
    console.log(`ACK inesperado para id ${id}: ${ack}`);
  }
});

/**
 * Publica el comando y gestiona reintentos/timeout.
 */
function sendCommandWithAck(cmdObj, attempt = 1, resolve, reject) {
  const id = cmdObj.id;
  if (attempt > MAX_ATTEMPTS) {
    console.log(`Fallo: sin ACK tras ${MAX_ATTEMPTS} intentos para id ${id}`);
    pending.delete(id);
    return reject(new Error(`No ACK tras ${MAX_ATTEMPTS} intentos`));
  }

  client.publish("lavacontrol", JSON.stringify(cmdObj), err => {
    if (err) {
      console.error(`Error al publicar cmd id=${id}:`, err);
      return reject(err);
    }
    console.log(`Publicado cmd id=${id} (intento ${attempt}):`, cmdObj);

    // Programamos timeout para reintento
    const timeout = setTimeout(() => {
      console.log(`Timeout ACK id=${id}, reintentando (${attempt+1})`);
      sendCommandWithAck(cmdObj, attempt + 1, resolve, reject);
    }, ACK_TIMEOUT);

    // Guardamos en el mapa
    pending.set(id, { command: cmdObj, timeout, resolve, reject });
  });
}

/**
 * Envía un comando y devuelve promesa que resuelve con {id, ack}.
 */
function handleCommand(cmd, seconds = null) {
  return new Promise((resolve, reject) => {
    const id = uuidv4();
    const cmdObj = {
      id,
      cmd: seconds !== null ? `TIMER_ON_${seconds}` : cmd
    };
    sendCommandWithAck(cmdObj, 1, resolve, reject);
  });
}

// HTTP server
const server = http.createServer((req, res) => {
  const p = url.parse(req.url, true);

  if (p.pathname === "/on" || p.pathname === "/off" || p.pathname === "/on-time") {
    let seconds = null;
    if (p.pathname === "/on-time") {
      seconds = parseInt(p.query.seconds, 10);
      if (isNaN(seconds) || seconds <= 0) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("Parámetro seconds inválido\n");
      }
    }
    const cmd = p.pathname === "/on" ? "ON"
              : p.pathname === "/off" ? "OFF"
              : null;

    handleCommand(cmd, seconds)
      .then(({ id, ack }) => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ id, ack }) + "\n");
      })
      .catch(err => {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error: " + err.message + "\n");
      });

  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Ruta no encontrada\n");
  }
});

server.listen(8080, () => {
  console.log("Servidor HTTP escuchando en http://localhost:8080");
});

const mqtt = require('mqtt');
const http = require('http');

// Conexión al broker MQTT (asegúrate de que el broker esté corriendo)
const mqttBrokerUrl = 'mqtt://test.mosquitto.org';
const client  = mqtt.connect(mqttBrokerUrl);

// Función para publicar comandos en el tópico "led"
function sendCommand(command) {
  client.publish('led', command, (err) => {
    if (!err) {
      console.log(`Comando enviado: ${command}`);
    } else {
      console.error("Error al enviar comando:", err);
    }
  });
}

client.on('connect', () => {
  console.log("Conectado al broker MQTT");
});

// Servidor HTTP para recibir peticiones y enviar comandos MQTT
const server = http.createServer((req, res) => {
  if (req.url === '/on') {
    sendCommand('ON');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Comando ON enviado\n');
  } else if (req.url === '/off') {
    sendCommand('OFF');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Comando OFF enviado\n');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Ruta no encontrada\n');
  }
});

// Iniciar el servidor HTTP en el puerto 3000
server.listen(3000, () => {
  console.log("Servidor HTTP iniciado en http://localhost:3000");
});
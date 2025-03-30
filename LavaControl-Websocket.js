const WebSocket = require('ws');
const http = require('http');

// Crear el servidor WebSocket
const wss = new WebSocket.Server({ port: 80 });

console.log("Servidor WebSocket iniciado en ws://localhost:80");

// Almacenar conexiones de clientes
const clients = new Set();

wss.on('connection', (ws) => {
  console.log("Nuevo cliente conectado");

  // Agregar el cliente a la lista
  clients.add(ws);

  // Escuchar mensajes del cliente
  ws.on('message', (message) => {
    console.log(`Mensaje recibido: ${message}`);
  });

  // Manejar desconexión del cliente
  ws.on('close', () => {
    console.log("Cliente desconectado");
    clients.delete(ws);
  });
});

// Función para enviar comandos a todos los clientes conectados
function sendCommandToClients(command) {
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(command);
      console.log(`Comando enviado: ${command}`);
    }
  });
}

// Crear un servidor HTTP para manejar peticiones desde Postman
const server = http.createServer((req, res) => {
  // Obtener la URL de la solicitud
  const url = req.url;

  // Verificar si la solicitud es para encender o apagar el LED
  if (url === '/on') {
    sendCommandToClients('ON');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Comando ON enviado\n');
  } else if (url === '/off') {
    sendCommandToClients('OFF');
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
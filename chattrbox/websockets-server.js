var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
var port = 3001;
var ws = new WebSocketServer({
  port: port
});
var messages = [];
console.log('websockets server started');

ws.on('connection', function(socket) {
  console.log('client connection established');
  messages.forEach(function(msg) {
    socket.send(msg);
  });
  socket.on('message', function(data) {
    console.log('message received: ' + data);
    const io = require('socket.io') ();
    io.path('/topic'){
      console.log('Entering topic: ' + data);
    }
    messages.push(data);
    ws.clients.forEach(function(clientSocket) {
      clientSocket.send(data)
    });
  });
});

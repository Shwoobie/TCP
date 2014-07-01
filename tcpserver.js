var net = require('net');

var server = net.createServer(function (socket) {
  socket.write('--------Connection Established--------\r\n');
  socket.pipe(socket);
});

server.listen(8000, '10.0.1.1');
var osc = require('node-osc'),
    io = require('socket.io').listen(8081);

var oscServer, oscClient;
oscServer = new osc.Server(3333, "127.0.0.1");

io.sockets.on('connection', function (socket) {
  socket.on("config", function (obj) {
    oscClient = new osc.Client(obj.client.host, obj.client.port);
    oscClient.send('/status', socket.sessionId + ' connected');

    oscServer.on('message', function(msg, rinfo) {
      console.log(msg, rinfo);
      socket.emit("message", msg);
    });
  });
  socket.on("message", function (obj) {
    oscClient.send(obj);
  });
});
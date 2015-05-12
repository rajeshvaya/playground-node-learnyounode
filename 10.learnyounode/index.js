// requires
var net = require('net');
var timer = require('./timer');

// lets go
var server = net.createServer(function(socket){
    current_date = timer();
    socket.write(current_date);
    socket.write("\n"); // new line
    socket.end();
});
server.listen(process.argv[2]);

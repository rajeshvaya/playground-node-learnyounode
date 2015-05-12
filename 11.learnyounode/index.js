// requires
var http = require('http');
var fileServer = require('./fileServer');

// initialize
var PORT = process.argv[2];
var FILE = process.argv[3];

//lets go
var server = http.createServer(function(req, res){
    fileStream = fileServer(FILE);
    fileStream.pipe(res);
});
server.listen(PORT);

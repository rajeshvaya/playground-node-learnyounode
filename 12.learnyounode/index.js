// requires
var http = require('http');
var bl = require('bl');

// initialize
var PORT = Number(process.argv[2]);

// lets go
var server = http.createServer(function(req, res){
    if(req.method != 'POST')
        return res.end("Invalid data");

    var request_data = '';
    req.on('data', function(chunk){
        request_data += chunk;
    });

    req.on('end', function(){
        res.end(request_data.toUpperCase());
    });
});
server.listen(PORT);

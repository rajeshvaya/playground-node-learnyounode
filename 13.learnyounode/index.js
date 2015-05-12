// requires
var http = require('http');
var url = require('url');
var timeutils = require('./timeutils');

// initialize
PORT = process.argv[2];
routes = {};


// lets go
routes['/api/parsetime'] = function(req, res){
    timeUtils = timeutils();
    parsed_url = url.parse(req.url, true);
    data = timeUtils.getTime(parsed_url.query.iso);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
};

routes['/api/unixtime'] = function(req, res){
    timeUtils = timeutils();
    parsed_url = url.parse(req.url, true);
    data = timeUtils.getUnixTime(parsed_url.query.iso);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
};

var server = http.createServer(function(req, res){
    parsed_url = url.parse(req.url);
    route = routes[parsed_url.pathname];
    console.log(typeof(route));
    if(typeof(route) == 'function')
        route(req, res);
});
server.listen(PORT);

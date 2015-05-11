//requires
var http = require('http');

// lets go
module.exports = function(url, callback){
    http.get(url, function(res){
        res.setEncoding('utf8');
        res.on('data', function(data){
            callback(null, data);
        });

        res.on('end', function(){
            callback(null, null);
        });

        res.on('error', function(err){
            callback(err);
        });
    });
}

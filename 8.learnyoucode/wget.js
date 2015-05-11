// require
var http = require('http');
var bl = require('bl');

// lets go
module.exports = function(url, callback){
    http.get(url, function(res){
        res.setEncoding('utf8');
        res.pipe(bl(function(err, data){
            data = data.toString();
            if(err)
                callback(err);
            else
                callback(null, data);
        }));
    });
}

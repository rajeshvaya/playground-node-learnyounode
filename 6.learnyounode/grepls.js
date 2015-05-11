// requires
var fs = require('fs');
var path = require('path');

//initialize
var files = [];

// lets go
module.exports = function(dir, extension, callback){
    fs.readdir(dir, function(err, list){
        if(err){
            callback(err);
            return;
        }

        list.forEach(function(file){
            if(path.extname(file) === '.'+extension)
                files.push(file);
        });

        callback(null, files);
    });
}


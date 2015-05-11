// requires
var fs = require('fs');

// initialize
var filePath = process.argv[2];

// lets go
fs.readFile(filePath, function(err, data){
    if(err){
        console.log("Something went wrong" + err);
    }else{
        lines_count = data.toString().split('\n').length - 1
        console.log(lines_count);
    }
});



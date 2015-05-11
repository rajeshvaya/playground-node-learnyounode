// requires
var grepls = require('./grepls');

// lets go
dir = process.argv[2];
extension = process.argv[3];

grepls(dir, extension, function(err, data){
    if(err){
        console.log(err);
    }else{
        data.forEach(function(file){
            console.log(file);
        });
    }
});

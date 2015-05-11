// require
var wget = require('./wget');

// initialize
url = process.argv[2];

wget(url, function(err, data){
    if(err){
        console.error("Something went wrong: " + err);
    }else{
        characters = data.length
        console.log(characters);
        console.log(data);   
    }
});

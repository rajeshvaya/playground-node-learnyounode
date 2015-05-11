// requires
var wget = require('./wget');

// initialize
url = process.argv[2];

// lets go
wget(url, function(err, data){
    if(err)
        return console.error('Something went wrong: ' + err);
    
    if(data)
        console.log(data);
});

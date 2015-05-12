// requires
var wget = require('./wget');

// initialize
var urls = [];
var urls_response = [];
var counter = 0;

// get all the urls requested for
for(i=2; i<process.argv.length; i++)
    urls.push(process.argv[i]);

function check_status(){
    if(urls.length === counter){
        urls_response.forEach(function(url_response, index){
           console.log(url_response);
        });
    }
}

(function(urls){
    urls.forEach(function(url, index){
        wget(url, function(err, data){
            if(err)
                data = '';
            
            urls_response[index]  =  data;
            counter++;
            check_status(); 
        })
    });    
})(urls);




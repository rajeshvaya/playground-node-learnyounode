// requires
var fs = require('fs');

module.exports = function(file){
    stream = fs.createReadStream(file);
    return stream;
}

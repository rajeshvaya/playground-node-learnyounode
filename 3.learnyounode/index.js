// requires
var fs = require('fs');

// initialization
filePath = process.argv[2];

// lets go
buffer = fs.readFileSync(filePath);
data = buffer.toString();
lines = data.split('\n');

// print the number of lines
console.log(lines.length - 1);



// initialize
var sum = 0;

// add the arguments to summ
for(i=2; i<process.argv.length; i++){
    sum += parseInt(process.argv[i]);
}

// print the sum
console.log(sum);

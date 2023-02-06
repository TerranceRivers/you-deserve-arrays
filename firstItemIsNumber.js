const prompt = require('prompt-sync')({sigint: true});

let array =JSON.parse(prompt("Enter an Array: "))
let long = array[0]>=0

console.log(long)
const prompt = require('prompt-sync')({sigint: true});

let array =JSON.parse(prompt("Enter an Array: "))
let long = array.length >= 2

console.log(long)




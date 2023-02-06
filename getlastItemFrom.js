const prompt = require('prompt-sync')({sigint: true});

let array =JSON.parse(prompt("Enter an Array: "))

console.log(array[array.length-1])

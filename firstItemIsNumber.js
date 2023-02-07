const prompt = require('prompt-sync')({sigint: true});

let array =JSON.parse(prompt("Enter an Array: "))
let long = true
let short = false

if (typeof array[0] === "number"){
console.log(long)
} else {
    console.log(short)
}
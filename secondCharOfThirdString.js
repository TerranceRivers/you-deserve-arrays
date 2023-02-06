const prompt = require('prompt-sync')({sigint: true});

let array =JSON.parse(prompt("Enter an Array: "))
let third = array[2]

if (typeof third === "string"){
    console.log(third[1])
}else {
   console.log("error") 
}

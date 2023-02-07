const prompt = require('prompt-sync')({sigint: true});

let array =JSON.parse(prompt("Enter an Array: "))
 
if (array.length > 3){
    console.log(array[3])

}else {
    console.log(array[array.length-1])
}

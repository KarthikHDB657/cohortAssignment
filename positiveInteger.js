//Write a program that takes an array of integers and returns a new array containing only the positive numbers from the original array
const readArray = require("./readArray")
const array = readArray();

function positiveArray(arr){

    let res = [];

   arr.forEach(element => {
    if(element > 0){
        res.push(element);
    }
        
    });
 return res;
}

console.log(positiveArray(array))

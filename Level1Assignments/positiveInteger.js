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

function positiveArray2(arr2){
 return arr2.filter(num => num > 0);
}
console.log(positiveArray(array))
console.log(positiveArray2(array))

//Write a program that takes an array of integers and returns the sum of all the numbers in the array
const readArray = require("./readArray")

function sumofArrayELements(array){
    let sum = 0;
    array.forEach(element => {
        sum+=element
    });
    // for(let i = 0; i < array.length; i++){
    //     sum += array[i];
    // }
    return sum;
}


const array = readArray();
const result = sumofArrayELements(array)
console.log(array);
console.log(result);

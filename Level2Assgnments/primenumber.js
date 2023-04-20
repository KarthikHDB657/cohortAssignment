//Write a program that takes an array of integers and returns a new array containing only the prime numbers from the original array.
const readArray = require("./readArray")
const array = readArray();

function primeNumberArray(arr){
   
    return arr.filter(num => isprime(num));
    

}

function isprime(num){
    let count = 0;
    for(let i = 1; i <=num ; i++){
        if(num % i == 0)
         count++
    }
    let res = (count == 2) ? true: false;
    return res

}

console.log(primeNumberArray(array))
//Write a program that takes an array of integers and returns a new array containing only the unique elements from the original array.
const readArray = require("./readArray")
const _ = require('lodash')

const array = readArray();

function uniqueElements(arr){
        const res = [];
        for(let i = 0; i < arr.length; i++){

           //Comparing last with first and skipping if its already present
           if(arr.lastIndexOf(arr[i]) !== arr.indexOf(arr[i])){
              continue;
           };
           res.push(arr[i]);
        };
        return res;
}

//using filter 

//using lodash will remove duplicate as well as repeated elements 
let uniqueele = _.uniq(array)
console.log(uniqueele)
console.log(uniqueElements(array));
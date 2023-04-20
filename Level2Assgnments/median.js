//Write a program that takes an array of integers and returns the median of the numbers in the array (i.e., the middle number when the array is sorted).
const readArray = require("./readArray")
const array  = readArray();

function median(arr){
    arr.sort((a,b) => a-b)
    let midindex = Math.floor(arr.length/2);
    let median = (arr.length % 2 != 0)? arr[midindex] :(arr[midindex] + arr[midindex - 1])/2;
    return median
}

console.log(median(array));
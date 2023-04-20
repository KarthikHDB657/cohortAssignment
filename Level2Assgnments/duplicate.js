//Write a program that takes an array of integers and returns a new array containing only the elements that appear more than once in the original array.
const readArray = require("./readArray")
const array = readArray();


function findDuplicates(arr) {
    let res = arr.filter((value, index) =>
    arr.indexOf(value) !== index);
    return Array.from(new Set(res))
 }


 console.log(findDuplicates(array))
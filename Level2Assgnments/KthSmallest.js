//Write a program that takes an array of integers and returns the kth smallest element in the array.
const readArray = require("./readArray")
const array = readArray();
const prompt = require("prompt-sync")();
const k =parseInt(prompt("Enter K"));

//need to add edge cases 
function KthSmallestElement(arr, k){
     
    arr.sort((a,b)=> a-b)
     return arr[k-1];
}

console.log(KthSmallestElement(array,k))
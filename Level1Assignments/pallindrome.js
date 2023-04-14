//Write a program that takes a string and returns true if the string is a palindrome (i.e., the string is the same forwards and backwards), and false otherwise

const prompt = require("prompt-sync")();
const input = prompt('Enter a string: ');

function validatePallindrome(input){
    let revStr = input.split("");
    // reverse the new created array elements
    const reverseArray = revStr.reverse();
    let res = (reverseArray.join("").toUpperCase() === input.toUpperCase()) ? true: false;
    
    return res;
}

console.log(validatePallindrome(input));

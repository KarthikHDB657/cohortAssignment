// program to reverse a string
const prompt = require("prompt-sync")();
function reverseString(str) {

    // return a new array of strings
    const arrayStrings = str.split("");
   
    // reverse the new created array elements
    const reverseArray = arrayStrings.reverse();
 
    // join all elements of the array into a string
    const joinArray = reverseArray.join("");
    
    // return the reversed string
    return joinArray;
}

//Using recursion
function reverse(str) {
    return (str === '') ? '' : reverse(str.substr(1)) + str.charAt(0);
}

//Using decrement
function decrement(str){
    let res = '';
    for(let i = str.length -1 ; i>=0; i--){
       res+= str[i]
    } 
  return res
}
 
// take input from the user
const string = prompt('Enter a string: ');

const result = reverseString(string);
const newres = reverse(string);
const dec = decrement(string);
console.log(result);
console.log(newres);
console.log(dec);
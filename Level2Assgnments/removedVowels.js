//Write a program that takes a string and returns a new string with all the vowels removed.
const prompt = require("prompt-sync")();
const input = prompt('Enter a string: ');

function removeVowels(input){
  let res =  input.replace(/[aeiou]/gi, '');
  return res;
}

console.log(removeVowels(input));
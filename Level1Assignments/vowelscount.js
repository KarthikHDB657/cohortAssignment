const prompt = require("prompt-sync")();

// program to count the number of vowels in a string

function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

//using arrow func
const newres = (input) => {
    return input.match(/[aeiou]/gi).length;
} 

console.log(result);
console.log(newres(string));
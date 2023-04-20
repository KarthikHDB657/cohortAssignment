//Write a program that takes a string and returns a new string with each word reversed, but the order of the words should remain the same.
const prompt = require("prompt-sync")();
const input = prompt('Enter a string: ');

function reversedWords(inp){
  // Reverse the given string
  inp = inp.split("").reverse().join("");
  
  // Splitting
  let rev = inp.split(" ");
  
  // Reversing the list of words
  rev = rev.reverse();
  // Joining the words to form a new string
  let reversedString = rev.join(" ");
  return reversedString;

}

//in one line
function wordReverse(inp){
    return inp.split("").reverse("").join("").split(" ").reverse().join(" ")
}
console.log(reversedWords(input))
console.log(wordReverse(input))


   
  
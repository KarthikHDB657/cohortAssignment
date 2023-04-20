//Write a program that takes a string and returns true if the string is a pangram (i.e., it contains all the letters of the alphabet at least once), and false otherwise.
const prompt = require("prompt-sync")();
const input = prompt('Enter a string: ');


function pangrams(input) {

    if(input.length < 26){
        return false;
    }
    //initializing alphabet array
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    //removing space
    let lowercase = input.toLowerCase();
    //removing empty spaces
    lowercase= lowercase.replace(/\s/g, "");
    
    //converting it to array
    lowercase =lowercase.split('')
    
    //sorting it in ascending order
    lowercase =lowercase.sort((a,b) => a-b);
    
    //joining it and comparing
    lowercase =lowercase.join('');
   
    //converting it to set to remove duplicates 
    lowercase = new Set(lowercase);
    
    let res = (lowercase.size === 26) ? true : false 
    
    return res;
 }

 // using set 
 function checkIfPangram(input) {
   input = input.toLowerCase().replace(/\s/g, "")
   return  new Set(input).size === 26;
 }
 console.log(checkIfPangram(input))
 console.log(pangrams(input))
const prompt = require("prompt-sync")();
//Reading array element

function readingArray(){
    const size =parseInt(prompt("Enter Array size"));
    let arr =[]
    for(let i =0; i < size; i++){
    arr.push(parseInt(prompt("Enter number")));
}
return arr;
}

Array.from
module.exports = readingArray;
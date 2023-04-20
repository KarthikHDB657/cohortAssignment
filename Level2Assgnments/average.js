//Write a program that takes an array of integers and returns the average of all the numbers in the array.
const readArray = require("./readArray")

const array = readArray();


function average(arr)  {
    let sum = 0;
    arr.forEach(element => {
        sum = sum + element;
        

    });
    var  avg = sum/arr.length;
    return avg;
    
}

//Second way 
function average2(arr2){
    var sum = 0;
    for( var i = 0; i < arr2.length; i++ ){
        sum += parseInt( arr2[i], 10 ); 
    }
    
    var avg = sum/arr2.length;
    return avg
}

//using reducer function of array
function avgUsingReducer(arr3){
const sumWithInitial = arr3.reduce((accumulator, currentValue) => accumulator + currentValue);
const avg = sumWithInitial/arr3.length
return avg;
}

let res = average(array)
console.log(res)
console.log(average2(array));
console.log(avgUsingReducer(array));
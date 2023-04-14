const readArray = require("./readArray")

const array = readArray();

function evenArray(arr){
   let even = [];
    arr.forEach(element => {
        if(element%2 === 0){
          even.push(element)
        }
        
    });
    return even.sort()
}


const res = evenArray(array)
console.log(res)
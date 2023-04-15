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

//using filter and arrow func
const output = (input) => {
  return input.filter(num => (num%2 === 0))
}

const res = evenArray(array)
console.log(res)
console.log(output(array));
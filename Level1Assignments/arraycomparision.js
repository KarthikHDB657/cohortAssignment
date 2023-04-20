const readArray = require("./readArray")

const array1 = readArray();
const array2 = readArray();

function commonIntegerArray(arr1,arr2){
    let res = [];
    arr1.forEach(element => {
        arr2.forEach(element2 =>{
            if(element === element2){
                res.push(element)
            }
        })
        
    });
    return res;
}

console.log(commonIntegerArray(array1,array2))



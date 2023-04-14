//Write a program that takes an array of integers and returns the largest number in the array.
const readArray = require("./readArray")

function largest(arr){
    try {
        let max = 0;
        // for(let i =0; i < arr.length; i++){
          
        //   if(max < arr[i]){
        //      max =arr[i];
        //   }
        // }
        arr.forEach(element => {
            if(max<element){
                max = element;
            }
        });
       return max
        
    } catch (error) {
        console.log("Array is empty. Please enter some value for validation")
    }
}

//Second method
function largestOtherWay(arr){
    let res = arr.length === 0 ?  0: Math.max.apply(0, array);
    return res;
}


//Second largest
function secondlargest(arr){
   try{ 
    if(arr.length < 2 || arr.length === 0)
        console.log("Invalid input");

    let first = 0, second = -1;
    for (let i = 0; i < arr.length; i++)
    {
      if (arr[i] > arr[first])
      {
         second = first;
         first = i;
      }
      else if (arr[i] < arr[first])
      {
         if (second == -1 || arr[second] < arr[i])
            second= i;
      }
   }

   return arr[second];
   }
   catch(error){
     console.log("Array size issue. please check")
   }

}

//Second largest other method
function secondlargestOtherWay(arr){
    let res = arr.length != 0 ? arr.sort()[arr.length-2]: -1;
    return res;
}

const array = readArray();
const max = largest(array)

//Second way 
const largestnum = largestOtherWay(array);

//Second largest num 
const secondlarge = secondlargest(array);

//Second largest num 
const seclarge = secondlargestOtherWay(array);

console.log(array);
console.log(max);
console.log(largestnum);
console.log(secondlarge);
console.log(seclarge);
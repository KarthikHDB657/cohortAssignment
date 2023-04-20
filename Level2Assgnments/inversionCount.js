//Write a program that takes an array of integers and returns the number of inversions in the array (i.e., the number of pairs of elements where the first element is greater than the second element but appears before it in the array).
const readArray = require("./readArray")
const array = readArray();

function inversionCount(arr)
{
    let count = 0;
    for(let i = 0; i < arr.length - 1; i++)
    {
        for(let j = i + 1; j < arr.length; j++)
        {
            if(arr[i] > arr[j]) count++;
        }
    }
    return count;
}

console.log(inversionCount(array))
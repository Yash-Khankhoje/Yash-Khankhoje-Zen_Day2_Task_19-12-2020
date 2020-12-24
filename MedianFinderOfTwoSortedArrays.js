/*
    Return median of two sorted arrays of same size
*/

var len = prompt("Please enter length of the array.: ");
let inputArray = [];

for(let i = 0; i < len; i++){
    let num = prompt("Please enter element number "+ i+ ": ");
    inputArray.push(num);
}

var len2 = prompt("Please enter length of the array.: ");
let inputArray2 = [];

for(let i = 0; i < len; i++){
    let num = prompt("Please enter element number "+ i+ ": ");
    inputArray2.push(num);
}


// Using anonymus function
console.log("***Printing the median using anonymus function.***");
let anonymusFunctionOutput = function (array, array2){
    for(let i = 0; i < array2.length; i++){
        array.push(array2[i]);
    }
    array = array.sort(function(a, b){return a - b});
    let len = array.length;
    let lowerIndex = parseInt(len/2);
    let upperIndex = parseInt(len/2)+1;
    let median = (array[lowerIndex]+array[upperIndex])/2;
    console.log(median); 
}

anonymusFunctionOutput(inputArray, inputArray2);


// Using Arrow function
console.log("***Printing the median using arrow function.***");
let arrowFunctionOutput = (array, array2)=> {
    for(let i = 0; i < array2.length; i++){
        array.push(array2[i]);
    }
    array = array.sort(function(a, b){return a - b});
    let len = array.length;
    let lowerIndex = parseInt(len/2);
    let upperIndex = parseInt(len/2)+1;
    let median = (array[lowerIndex]+array[upperIndex])/2;
    console.log(median);
}

arrowFunctionOutput(inputArray, inputArray2);


// Using IIFE
console.log("***Printing the median using IIFE.***");
(function(array, array2){
    for(let i = 0; i < array2.length; i++){
        array.push(array2[i]);
    }
    array = array.sort(function(a, b){return a - b});
    let len = array.length;
    let lowerIndex = parseInt(len/2);
    let upperIndex = parseInt(len/2)+1;
    let median = (array[lowerIndex]+array[upperIndex])/2;
    console.log(median);
})(inputArray, inputArray2)
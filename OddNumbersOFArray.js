/*
    Print odd numbers in an array 
*/

var len = prompt("Please enter length of the array.: ");
let inputArray = [];

for(let i = 0; i < len; i++){
    let num = prompt("Please enter element number "+ i+ ": ");
    inputArray.push(num);
}


// Using anonymus function
console.log("***Printing the odd numbers using anonymus function.***");
let anonymusFunctionOutput = function (length, array){
    for(let i = 0; i < length; i++){
        if(array[i] % 2 !== 0){
            console.log(array[i]);
        }
    }
}

anonymusFunctionOutput(len, inputArray);


// Using Arrow function
console.log("***Printing the odd numbers using arrow function.***");
let arrowFunctionOutput = (length, array)=> {
    for(let i = 0; i < length; i++){
        if(array[i] % 2 !== 0){
            console.log(array[i]);
        }
    }
}

arrowFunctionOutput(len, inputArray);


// Using IIFE
console.log("***Printing the odd numbers using IIFE.***");
(function(length,array){
    for(let i = 0; i < length; i++){
        if(array[i] % 2 !== 0){
            console.log(array[i]);
        }
    }
})(len, inputArray)
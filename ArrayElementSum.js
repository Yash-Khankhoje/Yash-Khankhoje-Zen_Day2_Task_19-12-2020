/*
    Sum of all numbers in an array
*/

var len = prompt("Please enter length of the array.: ");
let inputArray = [];

for(let i = 0; i < len; i++){
    let num = prompt("Please enter element number "+ i+ ": ");
    inputArray.push(num);
}


// Using anonymus function
console.log("***Printing the summessioin of all the  numbers using anonymus function.***");
let anonymusFunctionOutput = function (length, array){
    let sum = parseInt(0);
    for(let i = 0; i < length; i++){
        sum = sum + parseInt(array[i]);
    }
    console.log("Summession of all the elements of the array using anonymus function = ", sum);
}

anonymusFunctionOutput(len, inputArray);


// Using Arrow function
console.log("***Printing the summessioin of all the  numbers using arrow function.***");
let arrowFunctionOutput = (length, array)=> {
    let sum = parseInt(0);
    for(let i = 0; i < length; i++){
        sum = sum + parseInt(array[i]); 
    }
    console.log("Summession of all the elements of the array using arrow function = ", sum);
}

arrowFunctionOutput(len, inputArray);


// Using IIFE
console.log("***Printing the summessioin of all the  numbers using IIFE.***");
(function(length,array){
    let sum = parseInt(0);
    for(let i = 0; i < length; i++){
        sum = sum + parseInt(array[i]);
    }
    console.log("Summession of all the elements of the array using IIFE = ", sum);
})(len, inputArray)
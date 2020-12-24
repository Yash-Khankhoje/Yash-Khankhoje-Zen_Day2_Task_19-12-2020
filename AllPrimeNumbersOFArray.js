/*
    Return all the prime numbers in an array 
*/

var len = prompt("Please enter length of the array.: ");
let inputArray = [];

for(let i = 0; i < len; i++){
    let num = prompt("Please enter element number "+ i+ ": ");
    inputArray.push(num);
}

// Using anonymus function
console.log("***Printing all prime the  numbers using anonymus function.***");
let anonymusFunctionOutput = function (length, array){
    for(let i = 0; i < length; i++){
        let tempNum = parseInt(array[i]);
        if(tempNum === 1 || tempNum === 2){
            console.log(tempNum);
        }
        else{
            let counter = 0;
            for(let j = 2; j <= parseInt(tempNum/2); j++){
                if(tempNum % j === 0){
                    counter += 1;
                    break;
                }
            }
            if(counter === 0){
                console.log(tempNum);
            }
        }
    }
}

anonymusFunctionOutput(len, inputArray);


// Using Arrow function
console.log("***Printing all the prime  numbers using arrow function.***");
let arrowFunctionOutput = (length, array)=> {
    for(let i = 0; i < length; i++){
        let tempNum = parseInt(array[i]);
        if(tempNum === 1 || tempNum === 2){
            console.log(tempNum);
        }
        else{
            let counter = 0;
            for(let j = 2; j <= parseInt(tempNum/2); j++){
                if(tempNum % j === 0){
                    counter += 1;
                    break;
                }
            }
            if(counter === 0){
                console.log(tempNum);
            }
        }
    }
}

arrowFunctionOutput(len, inputArray);


// Using IIFE
console.log("***Printing all the prime  numbers using IIFE.***");
(function(length,array){
    for(let i = 0; i < length; i++){
        let tempNum = parseInt(array[i]);
        if(tempNum === 1 || tempNum === 2){
            console.log(tempNum);
        }
        else{
            let counter = 0;
            for(let j = 2; j <= parseInt(tempNum/2); j++){
                if(tempNum % j === 0){
                    counter += 1;
                    break;
                }
            }
            if(counter === 0){
                console.log(tempNum);
            }
        }
    }
})(len, inputArray)
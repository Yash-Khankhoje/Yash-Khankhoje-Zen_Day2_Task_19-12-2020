/*
    Remove duplicates from an array
*/

let len = prompt("Please enter number of strings you want to insert.: ");
let stringArray = [];

for(let i = 0; i < len; i++){
    let string = prompt("Please enter string number "+ i+ ": ");
    stringArray.push(string);
}


// Using anonymus function
console.log("***Removing the duplicate elements of the array using anonymus function.***");
let anonymusFunctionOutput = function (length, array){
    let outputArray = [];
    
    for(let i = 0; i < length; i++){
        let counter = parseInt(0);
        for(let j = 0; j <=i; j++){
            if(array[i] === array[j]){
                counter += 1
            }
        }
        if(counter === 1){
            outputArray.push(array[i])
        }
    }
    console.log(outputArray);
}

anonymusFunctionOutput(len, stringArray);


// Using arrow function
console.log("***Removing the duplicate elements of the array using arrow function.***");
let arrowFunctionOutput = (length, array)=> {
    let outputArray = [];
    
    for(let i = 0; i < length; i++){
        let counter = parseInt(0);
        for(let j = 0; j <=i; j++){
            if(array[i] === array[j]){
                counter += 1
            }
        }
        if(counter === 1){
            outputArray.push(array[i])
        }
    }
    console.log(outputArray);
}

arrowFunctionOutput(len, stringArray);


// Using IIFE
console.log("***Removing the duplicate elements of the array using IIFE.***");
(function(length, array){
    let outputArray = [];
    
    for(let i = 0; i < length; i++){
        let counter = parseInt(0);
        for(let j = 0; j <=i; j++){
            if(array[i] === array[j]){
                counter += 1
            }
        }
        if(counter === 1){
            outputArray.push(array[i])
        }
    }
    console.log(outputArray);
})(len, stringArray)
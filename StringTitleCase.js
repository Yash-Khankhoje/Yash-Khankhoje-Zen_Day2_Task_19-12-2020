/*
    Convert all the strings to title caps in a string array
*/

let len = prompt("Please enter number of strings you want to insert.: ");
let stringArray = [];

for(let i = 0; i < len; i++){
    let string = prompt("Please enter string number "+ i+ ": ");
    stringArray.push(string);
}


// Using anonymus function
console.log("***Printing the strings using anonymus function.***");
let anonymusFunctionOutput = function (length, array){
    for(let i = 0; i < length; i++){
        let string = array[i];
        string = string.split(" ");
        for(let j = 0; j < string.length; j++){
            string[j] = string[j].charAt(0).toUpperCase() + string[j].slice(1);
        }
        console.log(string.join(' ')); 
    }
}

anonymusFunctionOutput(len, stringArray);


// Using arrow function
console.log("***Printing the strings using arrow function.***");
let arrowFunctionOutput = (length, array)=> {
    for(let i = 0; i < length; i++){
        let string = array[i];
        string = string.split(" ");
        for(let j = 0; j < string.length; j++){
            string[j] = string[j].charAt(0).toUpperCase() + string[j].slice(1);
        }
        console.log(string.join(' ')); 
    }
}

arrowFunctionOutput(len, stringArray);


// Using IIFE
console.log("***Printing the strings using IIFE.***");
(function(length, array){
    for(let i = 0; i < length; i++){
        let string = array[i];
        string = string.split(" ");
        for(let j = 0; j < string.length; j++){
            string[j] = string[j].charAt(0).toUpperCase() + string[j].slice(1);
        }
        console.log(string.join(' ')); 
    }
})(len, stringArray)


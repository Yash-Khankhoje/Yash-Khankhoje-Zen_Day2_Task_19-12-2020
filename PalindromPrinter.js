/*
    Return all the palindromes in an array
*/

let len = prompt("Please enter number of strings you want to insert.: ");
let stringArray = [];

for(let i = 0; i < len; i++){
    let string = prompt("Please enter string number "+ i+ ": ");
    stringArray.push(string);
}


// Using anonymus function
console.log("***Printing the palindrom strings using anonymus function.***");
let anonymusFunctionOutput = function (length, array){
    for(let i = 0; i < length; i++){
        let string = array[i];
        let reverseArr = string.split('');
        reverseArr = reverseArr.reverse();
        reverseString = reverseArr.join('');
        if(string === reverseString){
            console.log(string);
        }
    }
}

anonymusFunctionOutput(len, stringArray);


// Using arrow function
console.log("***Printing the palindrom strings using arrow function.***");
let arrowFunctionOutput = (length, array)=> {
    for(let i = 0; i < length; i++){
        let string = array[i];
        let reverseArr = string.split('');
        reverseArr = reverseArr.reverse();
        reverseString = reverseArr.join('');
        if(string === reverseString){
            console.log(string);
        }
    }
}

arrowFunctionOutput(len, stringArray);


// Using IIFE
console.log("***Printing the palindrom strings using IIFE.***");
(function(length, array){
    for(let i = 0; i < length; i++){
        let string = array[i];
        let reverseArr = string.split('');
        reverseArr = reverseArr.reverse();
        reverseString = reverseArr.join('');
        if(string === reverseString){
            console.log(string);
        }
    }
})(len, stringArray)

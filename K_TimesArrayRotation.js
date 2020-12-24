/*
    Rotate an array by k times and return the rotated array.
*/

var len = prompt("Please enter length of the array.: ");
let inputArray = [];

for(let i = 0; i < len; i++){
    let num = prompt("Please enter element number "+ i+ ": ");
    inputArray.push(num);
}
let rotationIndex = prompt("Please enter the index from which you want to rotate the array.: ");

// Using anonymus function
console.log("***Printing the rotated array using anonymus function.***");
let anonymusFunctionOutput = function (length, k, array){
    if(k > length){
        console.log("Invalid index given. Rotation can not be possible");
        return;
    }
    else if( k <= 0){
        console.log("Invalid index given. Rotation can not be possible");
        return;
    }
    else{
        let rotatedArray = [];
        for(let i = k; i < length; i++){
            rotatedArray.push(array[i]);
        }
        for(i = 0; i < k; i++){
            rotatedArray.push(array[i]);
        }
        console.log(rotatedArray);
    }
}

anonymusFunctionOutput(parseInt(len),rotationIndex, inputArray);


// Using Arrow function
console.log("***Printing the rotated array using arrow function.***");
let arrowFunctionOutput = (length, k, array)=> {
    if(k > length){
        console.log("Invalid index given. Rotation can not be possible");
        return;
    }
    else if( k <= 0){
        console.log("Invalid index given. Rotation can not be possible");
        return;
    }
    else{
        let rotatedArray = [];
        for(let i = k; i < length; i++){
            rotatedArray.push(array[i]);
        }
        for(i = 0; i < k; i++){
            rotatedArray.push(array[i]);
        }
        console.log(rotatedArray);
    }
}

arrowFunctionOutput(parseInt(len),rotationIndex, inputArray);


// Using IIFE
console.log("***Printing the rotated array using IIFE.***");
(function(length, k, array){
    if(k > length){
        console.log("Invalid index given. Rotation can not be possible");
        return;
    }
    else if( k <= 0){
        console.log("Invalid index given. Rotation can not be possible");
        return;
    }
    else{
        let rotatedArray = [];
        for(let i = k; i < length; i++){
            rotatedArray.push(array[i]);
        }
        for(i = 0; i < k; i++){
            rotatedArray.push(array[i]);
        }
        console.log(rotatedArray);
    }
})(parseInt(len),rotationIndex, inputArray)
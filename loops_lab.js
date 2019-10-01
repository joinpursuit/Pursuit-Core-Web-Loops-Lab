// ## Exercises

// ## Problem One 

// a. Write a `while` loop that takes the variable `num` and logs all the numbers, descending, between "num" and 1

// b. Write a `for` loop that takes the variable `num` and logs all the numbers, descending, between "num" and 1

// Example:

// ```js
// let num = 8

// **** A ****
// let num = 50
// while (num > 2){
//     num--
//     console.log(num)
// }

// OR *** Unsure if we should include or exlcude num and 1 

// let numB = 50
// while (numB >= 1){
//     console.log(numB)
//     numB--
// }
// // **** B ****
// for(let numC = 30; numC >= 1; numC--){
//     console.log(numC)
// }

// # Problem Two

// a. Write a `while` loop that takes the variable "max", and iterates over all numbers from 0 to "max". 
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

// b. Use a `for` loop instead

// Example: 

// ```js
// let max = 3

// **** A. ****
let max = 100;

while (max <= 100 && max >= 0) {
    if (max % 2 === 0) {
        console.log(max + " is even");
    } else {
        console.log(max + " is odd");
    }
    max--;
}

// ***** B. *****

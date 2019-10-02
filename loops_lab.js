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
// let max = 100;

// while (max <= 100 && max >= 0) {
//     if (max % 2 === 0) {
//         console.log(max + " is even");
//     } else {
//         console.log(max + " is odd");
//     }
//     max--;
// }

// ***** B. *****
// for (let maxB = 25; maxB >= 0; maxB--) {
//     if (maxB % 2 === 0) {
//         console.log(maxB + " is even")
//     } else {
//         console.log(maxB + " is odd")
//     }
// }

// ## Problem Three

// a. Write a `while` loop that takes the variable "x" and iterates over all numbers from 0 to "x". For each iteration of the loop, it will multiply the number of "x" by 9 and log the result 

// b. Use a `for` loop instead.

// Example:

// ```js
// let x = 5
// let x = 5
// while (x > 0){
//     console.log(x * 9)
//     x--
// }
// // ***** B. *****
// for (let x1 = 3; x1 > 0; x1-- ){
//     console.log (x1*9)
// }
// ## Problem Four

// Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.
// let solu4 = 0
// while (solu4 < 100){
//     if (solu4 % 5 === 0 && solu4 % 2 === 1){
//         console.log(solu4)
//     }
//     solu4++
// }
// ## Problem Five

// Without running/executing your code, how many times will the loop below run? Explain why.

// ```js
// let i = 5;

// while (i > 3) {
//     i += 1
// }
// The loop will run for inifinity because i is already greater than 3 and will never return a false value. 

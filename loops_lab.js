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

// ## Problem Six

// Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.

// let pro6 = 1;
// while (pro6 <= 100) {
//     if (pro6 % 3 === 0) {
//         console.log("Fizz");
//     } else if (pro6 % 5 === 0 && pro6 % 3 > 0) {
//         console.log("Buzz");
//     } else {
//         console.log(pro6);
//     } pro6++;
// }

// ## Problem Seven

// Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).

// let pro7 = 1;
// while (pro7 <= 100) {
//     if (pro7 % 3 === 0 && pro7 % 5 === 0){
//         console.log("FizzBuzz")
//     }else if(
//         pro7 % 3 === 0) {
//         console.log("Fizz");
//     } else if (pro7 % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(pro7);
//     } pro7++;
// }

// ## Problem Eight

// Write a program that would log the [lyrics of the song 99 Bottles of Beer](http://www.99-bottles-of-beer.net/lyrics.html). This is the first verse of the song:

// let beer = 100;
// while (beer >= 1) {
//     if (beer >= 3) {
//         console.log(`${beer} bottles of beer on the wall, ${beer} bottles of beer.
//         Take one down, pass it around, ${beer - 1} bottles of beer on the wall.`)
//     } else if (beer === 2) {
//         console.log(`${beer } bottles of beer on the wall, ${beer} bottles of beer.
//         Take one down, pass it around, ${beer - 1} bottle of beer on the wall.`)
//     } else {
//         console.log(`1 bottle of beer on the wall, 1 bottle of beer.
//         Take one down, pass it around, No more bottle of beer on the wall.`)
//     } beer--;
// }
// # Problem Nine

// Given an integer N draw a square of N x N asterisks. Look at the examples.

let N = 10
let asteri = "*"
row = asteri.repeat (N)

while (N > 0){
    console.log (row)
    N--;
}
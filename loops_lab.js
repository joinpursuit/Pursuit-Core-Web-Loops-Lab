// // Loops Lab
// //
// // Problem One
// // a.Write a while loop that takes the variable num and logs all the numbers, descending, between "num"
// // and 1

let numA = 5;
while (numA > 1) {
    console.log(numA)
    numA--;
}
console.log(numA)

// // b.Write a
// // for loop that takes the variable num and logs all the numbers, descending, between "num"
// // and 1

// // Example:

// //     let num = 8

// // // Your code here

// // /* Logs:
// // 8
// // 7
// // 6
// // 5
// // 4
// // 3
// // 2
// // 1
// // */
for (let numB = 8; numB >= 1; numB--) {
    console.log(numB)
}

// // Problem Two
// // a.Write a while loop that takes the variable "max", and iterates over all numbers from 0 to "max".For each iteration, it will check
// // if the current number is even or odd, and log that to the screen(e.g.
// //     "2 is even")

let i = 0;
let max = 78;
while (i <= max) {
    i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`)
    i++;
}


// //let i = 0;
// // let max = 78;
// // while (i <= max) {
// //     if (i % 2 === 0) {
// //         console.log(`${i} is even`)
// //     } else {
// //         console.log(`${i} is odd`)
// //     }
// //     i++;
// // }


// // b.Use a
// // for loop instead

// // Example:

// //     let max = 3

// // // Your code here

// // /* Logs:
// // "0 is even"
// // "1 is odd"
// // "2 is even"
// // "3 is odd"
// // */

let maxB = 20;

for (let i = 0; i <= maxB; i++) {
    i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`)
}

// let testMaxB = 20
// for (let i = 0; i <= testMaxB; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`)
//     } else {
//         console.log(`${i} is odd`)
//     }
// }

// Problem Three
// a.Write a
// while loop that takes the variable "x"
// and iterates over all numbers from 0 to "x".For each iteration of the loop, it will multiply the number of "x"
// by 9 and log the result

let x = 15;
let iThree = 0;
let result = ''

while (iThree <= x) {
    result = 9 * iThree
    console.log(`${iThree} * 9 = ${result}`)
    iThree++;
}


// b.Use a
// for loop instead.

// Example:

//     let x = 5

// // Your code here

// /* Logs:
// "0 * 9 = 0"
// "1 * 9 = 9"
// "2 * 9 = 18"
// "3 * 9 = 27"
// "4 * 9 = 36"
// "5 * 9 = 45"
// */
// Write a
// while loop and a
// for loop that takes the variable "x"
// and iterates over all numbers from 0 to "x".For each iteration of the loop, it will multiply the number of "x"
// by 9 and log the result(e.g.
//     "2 * 9 = 18").

// Problem Four
// Write code that prints / logs all the numbers that end in a 5 from 1 to 100, exclusive.

// Problem Five
// Without running / executing your code, how many times will the loop below run ? Explain why.

// let i = 5;

// while (i > 3) {
//     i += 1
// }

// // Your explanation here
// Problem Six
// Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions.For numbers divisible by 3, log "Fizz"
// instead of the number, and
// for numbers divisible by 5(and not 3), log "Buzz"
// instead.

// Problem Seven
// Modify your program to log "FizzBuzz",
//     for numbers that are divisible by both 3 and 5(still log "Fizz"
//         or "Buzz"
//         for numbers divisible by only one of those).

// Problem Eight
// Write a program that would log the lyrics of the song 99 Bottles of Beer.This is the first verse of the song:

//     99 bottles of beer on the wall, 99 bottles of beer.
// Take one down, pass it around, 98 bottles of beer on the wall.
// This verse is repeated, each time with one less bottle, until the number of bottles is 0. When the number of bottles is 2, the verse is:

//     2 bottles of beer on the wall, 2 bottles of beer.
// Take one down, pass it around, 1 bottle of beer on the wall.
// In the last line, the word bottles(plural), is replaced with bottle(singular)

// When the number of bottles is 1, the verse is:

//     1 bottle of beer on the wall, 1 bottle of beer.
// Take one down, pass it around, No more bottle of beer on the wall.
// Problem Nine
// Given an integer N draw a square of N x N asterisks.Look at the examples.

// Example 1: Input: let N = 2

// Output:

//     **
//     **
//     Example 2: Input: let N = 3

// Output:

//     **
//     *
//     **
//     *
//     **
//     *
//     Hint 1
// Hint 2
// Problem Ten
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.
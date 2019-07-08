// # Loops Lab Exercises
//-----------------------
// 1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.
//  A)
// let num = 12;
// while (num >= 1) {
//   console.log(num);
//     num -= 1;
// }
 // B)
// for (let num = 12; num >= 1; num --) {
//   console.log(num);
// }
// //
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// 2. Write a `while` loop and a `for` loop that takes the variable "max", and iterates over all numbers from 0 to "max".
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")
//
//  A)
// let max = 0;
// while (max <=15) {
//     if (max % 2 === 0){
//        console.log(max + ' is even');
//      } else {
//        console.log(max + ' is odd');
//      }
//      max++
//     }
//
//  B)
// for (let max = 0; max <= 15; max += 1 ){
//       if ( max % 2 == 0) {
//         console.log(max + ' is even');
//           } else {
//         console.log( max + ' is odd');
//       }
//     }
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// 3. Write a `while` loop and a `for` loop that takes the variable "x" and iterates over all numbers from 0 to "x".
// For each iteration of the loop, it will multiply the number of "x" by 9 and log the result (e.g. "2 * 9 = 18").
//   _Bonus_ think of another way to solve it.
//  A)
// let cst = 9;
// let x = 0;
// while (x <= 10){
//   console.log( cst  + " * " + x + " = " + x * cst );
//   x += 1;
// }
//
 // B)
//  let cst = 9;
//  let num = 0;
// for(let num = 0; num <= 10; num ++ ){
//   console.log(cst  + " * " + num + " = " + num * cst)
// }
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// 4. Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.
// for (let x = 5; x <= 100 ; x += 10){
//   console.log(x)
// }
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// 5. Without running/executing your code, how many times will the loop below run? Explain why.
//
 // let i = 5;
 // while (i > 3) {
 //     i += 1
 // }
// // Your explanation here
// ```
// loop will over and over until the computer run of memory or occur an console.error;
// we have the variable i and i = 5
// // While represent the condition that should be excecuted at first to see if true
// We have to test if 5 is greather than 3 ===> 5 > 3  it is true
// then we have to execute the
//  increment i += 1 ===> it will add 1 evrytime because all the values after 5 are greather than 3. the code did not have the limit that make the conditional to stop the loop.
// // ---------------------------------------------------------------------------------------------------------------------------------------------------
// 6. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
 // for ( var x = 1; x <= 100; x++)
 // {
 //   if ( x%3 === 0)
 //   {
 //     console.log(" Fizz")
 //   }
 //   else if (x%5 === 0 && x%3 !=0 ) {
 //     console.log(" Buzz")
 //   }
 //   else {
 //     console.log( x )
 //   }
 // }
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// 7. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).
// for ( var x = 1; x <= 100; x++)
// {
//   if (x%5 === 0 && x%3 === 0 ) {
//     console.log("FizzBuzz")
//   }
//   else if ( x%3 === 0)
//   {
//     console.log("Fizz")
//   }
//   else if (x%5 === 0 ) {
//     console.log("Buzz")
//   }
//   else {
//     console.log( x )
//   }
// }
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ### Bonus:
//
// 1. Write a program that would log the [lyrics of the song 99 Bottles of Beer](http://www.99-bottles-of-beer.net/lyrics.html). This is the first verse of the song:
//
//   ```
//   99 bottles of beer on the wall, 99 bottles of beer.
//   Take one down, pass it around, 98 bottles of beer on the wall.
//   ```
//   This verse is repeated, each time with one less bottle, until the number of bottles is 0. When the number of bottles is 2, the verse is:
// ---------------------------------------------------------------------------------------------------------------------------------------------------
//   ```
//   2 bottles of beer on the wall, 2 bottles of beer.
//   Take one down, pass it around, 1 bottle of beer on the wall.
//   ```
//
//   In the last line, the word bottles (plural), is  replaced with bottle (singular)
//
//   When the number of bottles is 1, the verse is:
//
//   ```
//   1 bottle of beer on the wall, 1 bottle of beer.
//   Take one down, pass it around, No more bottle of beer on the wall.
//   ```
//
// ___
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// 2. Use the `assignGrade` function (given below). Write a function that logs each number from 60 - 100 along with its corresponding letter score.
// Exp For each number from 81 to 90, log B, like so:
//
// ```js
// 60 - F
// ...
// 81 - B
// 82 - B
// 83 - B
// ...
// 93 - A
// 94 - A
//
// for(let x = 60; x <= 100; x++){
//     if (x >= 91) {
//         console.log(x + ' - A');
//     } else if (x <= 90 && x >= 81) {
//         console.log(x + ' - B');
//     } else if (x < 81 && x >= 71) {
//         console.log(x + ' - C');
//     } else if (x < 71 && x >= 61) {
//         console.log(x + ' - D');
//     } else {
//         console.log(x + ' - F');
//     }
//   }

//   What is happening here? Can you explain it?
// </details>
//
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// 3. Given an integer N draw a square of N x N asterisks. Look at the examples.
//
// Example 1:
// Input: `let N = 2`
//
// Output:
// ```js
// **
// **
// let n = 2;
// let string = '';
//   for (let i = 0; i < n; i++){
//   string += "*"
// }
// console.log(string)
// for (let i = 1; i < n; i++){
//   string += ""
// }
// console.log(string)
// //
// Example 2:
// Input: `let N = 3`
//
//
// Output:
// ```js
// ***
// ***
// ***
// //---------------------------------------------------------
// let n = 3;
// let string = '';
// for (let i = 0; i < n; i++) {
// string += "*"
// } console.log(string)
// for (let i = 1; i < n; i++) {
// string += ""
// } console.log(string)
// for (let i = 2; i < n; i++) {
// string += ""
// } console.log(string)
//

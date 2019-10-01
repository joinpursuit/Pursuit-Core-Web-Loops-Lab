// // ## Problem One 

// // a. Write a `while` loop that takes the variable `num` and logs all the numbers, descending, between "num" and 1
// // let num = 10

// while (num >= 1) {
//     console.log(num);
//     num -= 1;

// }

// // b. Write a `for` loop that takes the variable `num` and logs all the numbers, descending, between "num" and 1

// // Example:

// // ```js
// // let num = 8

// for (let num = 10; num >= 1; num -= 1) {
//     console.log(num);
    
// }

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
// // ```

// // ## Problem Two

// // a. Write a `while` loop that takes the variable "max", and iterates over all numbers from 0 to "max". 
// // For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

// let max = 0;
// while(max <= 10){
//     if(max % 2 === 0){
//         console.log(max + " is Even")
//     } else {
//         console.log(max + " is odd")
//     }
//     max +=1;
    
// }

// // b. Use a `for` loop instead

// // Example: 

// // ```js
// // let max = 3

// for(let max = 0; max <=10; max+=1){
//     if(max % 2 === 0){
//         console.log(max + " is Even")
//     } else {
//         console.log(max + " is Odd")
//     }
// }

// // /* Logs:
// // "0 is even"
// // "1 is odd"
// // "2 is even"
// // "3 is odd"
// // */

// // ```

// // ## Problem Three

// // a. Write a `while` loop that takes the variable "x" and iterates over all numbers from 0 to "x". For each iteration of the loop, it will multiply the number of "x" by 9 and log the result 
// // let x = 0

// while (x <= 90) {
//     console.log(x);
//     x += 9
// }
// // b. Use a `for` loop instead.
// // Example:

// // ```js
// // let x = 5

// for (let x = 0; x <= 90; x +=9) {
//     console.log(x)
// }

// // /* Logs:
// // "0 * 9 = 0"
// // "1 * 9 = 9"
// // "2 * 9 = 18"
// // "3 * 9 = 27"
// // "4 * 9 = 36"
// // "5 * 9 = 45"
// // */
// // ```



// // Write a `while` loop and a `for` loop that takes the variable "x" and iterates over all numbers from 0 to "x". For each iteration of the loop, it will multiply the number of "x" by 9 and log the result (e.g. "2 * 9 = 18").
// // Already Completed above!

// // ## Problem Four

// // Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.

// for(let num = 1; num <= 100; num +=1){
//     if(num % 2 !== 0 && num % 5 === 0){
//         console.log(num)
//     }
// }

// // ## Problem Five

// // Without running/executing your code, how many times will the loop below run? Explain why.

// // ```js
// // let i = 5;

// // while (i > 3) {
// //     i += 1
// // }

// // // Your explanation here
// // ```

// //** This will return a infiniti loop because the conditional will always be true **//

// // ## Problem Six

// // Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.

// for(let num1 = 1; num1 <= 100; num1 +=1){
//     if(num1 % 3 === 0 ){
//         console.log("Fizz")
//     } else if(num1 % 5 === 0 ){
//         console.log("Buzz")
//     } else {
//         console.log(num1)
//     }
// }

// // ## Problem Seven

// // Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).

// for(let num2 = 1; num2 <= 100; num2 +=1){
//     if(num2 % 3 === 0 && num2 % 5=== 0){
//         console.log("FizzBuzz")
//     } else if (num2 % 3 === 0){
//         console.log("Fizz")
//     }else if(num2 % 5 === 0 ){
//         console.log("Buzz")
//     } else {
//         console.log(num2)
//     }
// }

// // ## Problem Eight

// // Write a program that would log the [lyrics of the song 99 Bottles of Beer](http://www.99-bottles-of-beer.net/lyrics.html). This is the first verse of the song:

// //   ```
// //   99 bottles of beer on the wall, 99 bottles of beer.
// //   Take one down, pass it around, 98 bottles of beer on the wall.
// //   ```

// // This verse is repeated, each time with one less bottle, until the number of bottles is 0. When the number of bottles is 2, the verse is:

// //   ```
// //   2 bottles of beer on the wall, 2 bottles of beer.
// //   Take one down, pass it around, 1 bottle of beer on the wall.
// //   ```

// //   In the last line, the word bottles (plural), is  replaced with bottle (singular)

// //   When the number of bottles is 1, the verse is:

// //   ```
// //   1 bottle of beer on the wall, 1 bottle of beer.
// //   Take one down, pass it around, No more bottle of beer on the wall.
// //   ```

// for(let num3 = 100; num3 >= 1; num3 -=1){
   
//    if(num3 ===1){
//     console.log(num3 + " bottles of beer on the wall, "+num3+" bottles of beer.")
//     console.log("Take one down, pass it around,no more bottle of beer on the wall.\n");
//    } else {
//     console.log(num3 + " bottles of beer on the wall, "+num3+" bottles of beer.")
//     console.log("Take one down, pass it around,"+(num3 - 1)+" bottle of beer on the wall.\n");
//    }
// }

// // ## Problem Nine

// // Given an integer N draw a square of N x N asterisks. Look at the examples.

// // Example 1:
// // Input: `let N = 2`

// // Output:
// // ```js
// // **
// // **
// // ```

for (let N = 2; N <= 4; N +=2) {
    if (N * 2){
        console.log('**')
    }
}
// // Example 2:
// // Input: `let N = 3`

// // Output:
// // ```js
// // ***
// // ***
// // ***
// // ```

// // <details>
// //   <summary>
// //     Hint 1 
// //   </summary>
// //   Try printing/logging a single line of * first.
// // </details>

// // <details>
// //   <summary>
// //     Hint 2
// //   </summary>
// //   You will need 2 loops for this.
// // </details>

// // let num = 3
// // let a = "*"

// // for(i = 1; i<=num; i ++) {
// //    console.log("rows "+i)
// //     for (j = 0; j < num; j++){
// //        // console.log("This is Start")
// //         // if(j >= i){
// //         //     a += a
// //            console.log(a);
// //         // }
// //     //     if(j = i){
// //     //   console.log(a);
// //     //     }
// //   //  a +=a;
// //     }
// //    // console.log("Outside *\n")
// //    a +=a
// // }
// for (let N = 3; N <= 9; N +=3) {
//     if (N * 3){
//         console.log('***')
//     }
// }

// // ## Problem Ten

// // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// // Find the sum of all the multiples of 3 or 5 below 1000.
// // let all =0;


// for(let num2 = 1; num2 = 1000; num2 +=1){
//     if(num2 % 3 === 0 || num2 % 5=== 0){
//         console.log(num2)
//         all +=num2;
//     }
    
// }
// console.log("The sum is "+all)
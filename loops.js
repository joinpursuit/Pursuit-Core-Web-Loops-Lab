// ## Problem One 

// a. Write a `while` loop that takes the variable `num` and logs all the numbers, descending, between "num" and 1

// ANSWER
let num = 77;
while (num >=1) {
    console.log(num);
    num -= 1;
}


// b. Write a `for` loop that takes the variable `num` and logs all the numbers, descending, between "num" and 1

// ANSWER
for (num2 = 50; num2 >= 1; num2 -= 1){
    console.log(num2);
}

// ## problem two

// a. Write a `while` loop that takes the variable "max", and iterates over all numbers from 0 to "max". 
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

// ANSWER
let max = 50
while (max >= 0) {
    console.log(max);
    if (max % 2 === 0) {
        console.log("this is even")
    }
    else {
        console.log("this is odd")
    
    }
    max -= 1
}

// b. Use a `for` loop instead

// ANSWER
for (let max2 = 50; max2 >= 0; max2 --){
    if (max2 % 2 === 0){
        console.log(`${max2} is an even number`)
    } 
    else (console.log(`${max2} is and odd number`))
}
// ## Problem Three

/* a. Write a `while` loop that takes the variable "x" and iterates over all numbers from 0 to "x". For each iteration of the loop, 
it will multiply the number of "x" by 9 and log the result */

// // ANSWER
let x = 50
// for (let j = 0; j <= x; j++) {
//     console.log(j * 9)
// }

// ANSWER WHILE LOOP
let z = 50
let j = 0

while ( j <= z){
    j += 1;
    console.log(j*9)
}

// ## Problem Four

// Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.

// ANSWER
// for (nums = 5; nums <= 100; nums += 10) {
//     if (nums % 5  === 0 ) {
//         console.log(nums)
//     }
// }

// ## Problem Five

// Without running/executing your code, how many times will the loop below run? Explain why.

// ```js

// let i = 5;

// while (i > 3) {
//     i += 1
// }

// // ANSWER : it will get into an infinite loop because any number will be greater than 3, so condition is always true
// ```

// ## Problem Six

// Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. 
// For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.

// ANSWER
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
    console.log("fizz")
    }   
    else if(i % 5 === 0){
    console.log("buzz")
    }
    if(i % 3 === 0 && i % 5 === 0){
        console.log('fizzbuzz')
    }
    else (console.log (i))
}

// ## Problem Eight

// Write a program that would log the [lyrics of the song 99 Bottles of Beer](http://www.99-bottles-of-beer.net/lyrics.html). This is the first verse of the song:

//   ```
//   99 bottles of beer on the wall, 99 bottles of beer.
//   Take one down, pass it around, 98 bottles of beer on the wall.
//   ```

// This verse is repeated, each time with one less bottle, until the number of bottles is 0. When the number of bottles is 2, the verse is:

//   ```
//   2 bottles of beer on the wall, 2 bottles of beer.
//   Take one down, pass it around, 1 bottle of beer on the wall.
//   ```

//   In the last line, the word bottles (plural), is  replaced with bottle (singular)

//   When the number of bottles is 1, the verse is:

//   ```
//   1 bottle of beer on the wall, 1 bottle of beer.
//   Take one down, pass it around, No more bottle of beer on the wall.

//ANSWER 

let bottles = 99
for (let bottles = 99; bottles >= 1; bottles -= 1) {
    console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.
    Take one down, pass it around, ${bottles - 1} bottles of beer on the wall.`)
    if (bottles === 2 && bottles === 1) {
        console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.
        Take one down, pass it around, ${bottles - 1} bottle of beer on the wall.`)
    }
    
}   

// ## Problem Nine

// Given an integer N draw a square of N x N asterisks. Look at the examples.
let n = 2;
for(let i = 0; i < 2; i++){
    if( n === 2) 
    console.log("**")
}

// Example 1:
// Input: `let N = 2`

// Output:
// ```js
// **
// **
// ```

// Example 2:
// Input: `let N = 3`

// Output:
// ```js
// ***
// ***
// ***
// ```

// <details>
//   <summary>
//     Hint 1 
//   </summary>
//   Try printing/logging a single line of * first.
// </details>

// <details>
//   <summary>
//     Hint 2
//   </summary>
//   You will need 2 loops for this.
// </details>

// ## Problem Ten

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.


let sum = 0
for (let i = 0; i < 1000; i++){
    if(i % 3 === 0 || i % 5 === 0){
        sum += i
    }
}
console.log(sum)
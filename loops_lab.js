// // ## Exercises
// //
// // 1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.
console.log('----- #1 while loop -----');
let num = 10;
while (num > 0) {
  console.log(num);
  num--;
}

console.log('----- #1 for loop -----');
for (let num1 = 15; num1 > 0; num1--) {
  console.log(num1);
}
//
// // 2. Write a `while` loop and a `for` loop that takes the variable "max", and iterates over all numbers from 0 to "max".
// // For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")
console.log('----- #2 while loop -----');
let max = 10;
let counter = 0;
while (counter <= max) {
  if (counter % 2 === 0) { console.log(counter + ' is even');
  }   else {
    console.log(counter + ' is odd');
  }
  counter++;
}
//
console.log('----- #2 for loop -----');
let max1 = 10;
for (let counter1 = 0; counter1 <= max1; counter1++) {
  if (counter1 % 2 === 0) { console.log(counter1 + ' even');
  }  else {
    console.log(counter1 + ' odd');
  }
}
//
// // 3. Write a `while` loop and a `for` loop that takes the variable "x" and iterates over all numbers from 0 to "x".
// // For each iteration of the loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
console.log('----- #3 while loop "cannot get the numbers to ascend" -----');
// // cannot get the numbers to ascend
let x = 11;
let xx = 0;
while (xx <= x){ //&& 0 <= x)

  let num2 = xx * 9;
  console.log(xx + ' * 9 = ' + num2);
  xx++;
}
//
console.log('----- #3 for loop "cannot get the numbers to ascend" -----');
// // cannot get the numbers to ascend
// let xx1 = 0;
for (let x1 = 0; x1 <= x; x1++) {
  console.log( x1 + ' * 9 = ' + (x1*9));
}


// _Bonus_ think of another way to solve it.
//         Hint
//       Find the final number and increment the loop by 9.
// let x = 10;
// let num1 = [];
// while (x >= num1*9) {
//   console.log(x + ' * 9 = ' + num1);
//   x--;
// }

// 4. Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.
console.log('----- #4 -----');
let fives = 5;
while (fives <= 100) {
console.log(fives);
fives += 10;
}
// 5. Without running/executing your code, how many times will the loop below run? Explain why.
//
// ```js
// let i = 5;
//
// while (i > 3) {
//     i += 1;
// }
//
// // Your explanation here
// ```
console.log('----- #5 -----');
console.log('This code will run as an infinte loop because "i" will always be greater than 3. ')

// 6. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
console.log('----- #6 -----');
const num3 = 100;
for (let counter = 1; counter <= num3; counter++) {
  if ((counter % 3) === 0) {
    console.log('Fizz');
  } else if ((counter % 5) === 0) {
    console.log('Buzz');
  } else {
    console.log(counter);
  }
}

// 7. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).
console.log('----- #7 -----');
const num4 = 100;
for (let counter = 1; counter <= num4; counter++) {
  if ((counter % 3) === 0 && (counter % 5) === 0) {
    console.log('Fizz Buzz');
  } else if ((counter % 3) === 0) {
    console.log('Fizz');
  } else if ((counter % 5) === 0) {
    console.log('Buzz');
  } else {
    console.log(counter);
  }
}

//
// ### Bonus:
//
// 1. Write a program that would log the [lyrics of the song 99 Bottles of Beer](http://www.99-bottles-of-beer.net/lyrics.html). This is the first verse of the song:
//
//   ```
//   99 bottles of beer on the wall, 99 bottles of beer.
//   Take one down, pass it around, 98 bottles of beer on the wall.
//   ```
//
//   This verse is repeated, each time with one less bottle, until the number of bottles is 0. When the number of bottles is 2, the verse is:
//
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
//
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
// ...
// ```
//
// ```js
// function assignGrade(score) {
//     if (score > 90) {
//         return 'A';
//     } else if (score > 80) {
//         return 'B';
//     } else if (score > 70) {
//         return 'C';
//     } else if (score > 65) {
//         return 'D';
//     } else {
//         return 'F';
//     };
// };
// ```
// <details>
// <summary>
//   <b>Hint</b>
// </summary>
//   Explore this:
//
//   ```js
//   let grade = assignGrade(80)
//   console.log(grade)
//   ```
//   What is happening here? Can you explain it?
// </details>

// 3. Given an integer N draw a square of N x N asterisks. Look at the examples.
//
// Example 1:
// Input: `let N = 2`
//
// Output:
// ```js
// **
// **
// ```
//
// Example 2:
// Input: `let N = 3`
//
// Output:
// ```js
// ***
// ***
// ***
// ```
//
// <details>
//   <summary>
//     Hint 1
//   </summary>
//   Try printing/logging a single line of * first.
// </details>
//
// <details>
//   <summary>
//     Hint 2
//   </summary>
//   You will need 2 loops for this.
// </details>

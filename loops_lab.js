// //## Exercises
//
// // 1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.
//
console.log("1._________________________________________");

let num = 20;

while (num > 0) {
  console.log(num);
  num--;
}

for (let num = 10; num > 0; num--){
  console.log(num);
}
//
//
// //2. Write a `while` loop and a `for` loop that takes the variable "max", and iterates over all numbers from 0 to "max".
// //For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")
//
console.log("2._________________________________________");
let zero = 0;
let max = 10;

while (zero <= max) {
  if (zero % 2 === 0){
    console.log(zero + " is even.");
  } else {
    console.log(zero + " is odd.")
  }
  zero++;
}

for (let zero = 0; zero >= 0 && zero <= max; zero++) {
  if (zero % 2 === 0) {
    console.log(zero + " is even.");
  } else {
    console.log(zero + " is odd.");
  }
}

//
//
// //3. Write a `while` loop and a `for` loop that takes the variable "x" and iterates over all numbers from 0 to "x".
// // For each iteration of the loop, it will multiply the number of "x" by 9 and log the result (e.g. "2 * 9 = 18").
// //   _Bonus_ think of another way to solve it.
// //     <details>
// //       <summary>
// //         Hint
// //       </summary>
// //       Find the final number and increment the loop by 9.
// //     </details>
// //
// //
console.log("3._________________________________________");

let y = 0;
let x = 10;

while (y <= x ) {
  console.log(y + " * 9 = " + (y*9));
  y++;
}

for (let y = 0; y <= x; y++) {
  console.log(y + " * 9 = " + (y*9));
}


//
// // 4. Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.
// //
//
console.log("4._________________________________");

let w = 1;

while(w <= 100){
  if (w % 5 === 0 && w % 10 !== 0){
    console.log(w);
  } w++;
}

//
// // 5. Without running/executing your code, how many times will the loop below run? Explain why.
// //
// // ```js
// // let i = 5;
// //
// // while (i > 3) {
// //     i += 1
// // }
// //
// // // Your explanation here
// // ```
//
console.log("5. The loop in question 5 will run infinite times because i is already greater than 3, so if the loops continues to add one to i it will always be greater than 3.");


//
// // 6. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
// //
//
console.log("6._________________________________");

for (let a = 1; a <= 100; a++){
  if (a % 3 === 0){
    console.log("Fizz");
  } else if (a % 5 === 0){
    console.log("Buzz");
  } else {
    console.log(a);
  }
}


//
// // 7. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).
// //
//
console.log("7._________________________________");

for (let a = 1; a <= 100; a++){
  if (a % 3 === 0 && a % 5 === 0){
    console.log("FizzBuzz");
  } else if (a % 3 === 0){
    console.log("Fizz");
  } else if (a % 5 === 0){
    console.log("Buzz");
  } else {
    console.log(a);
  }
}


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
console.log("Bonus Number 1._________________________________");

for (let i = 100; i > 0; i--) {
  if (i !== 2 && i !== 1){
      console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down, pass it around " + (i - 1) + " bottles of beer on the wall.");
  } else if (i === 2) {
      console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down, pass it around " + (i -1) + " bottle of beer on the wall.");
    } else {
      console.log(i + " bottle of beer on the wall, " + i + " bottle of beer. Take one down, pass it aorund " + (i - 1) + " no more bottles of beer on the wall.");
    }
}


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
//


console.log("Bonus Number 2._________________________________");


function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    };
};

for(let score = 60; score <= 100; score++){
  console.log(score + " - " + assignGrade(score));
}

// ___
//
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


console.log("Bonus Number 3._________________________________");

let b = 5;
let ast = "";

for (let n = 1; n <= b; n++) {
    ast += "*";
}

for (let n = b; n > 0; n--) {
  console.log(ast);
}

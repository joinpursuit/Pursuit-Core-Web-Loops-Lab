


console.log("New Version 7/2/2019");


// # Loops Lab
//
// To complete this lab, do the following:
//
// 1. Fork this repo
// 2. Clone **your** forked repo
// 3. Create a file called `loops_lab.js` inside your cloned repo
// 4. Copy the description of the exercise as a comment
// 5. Underneath the commented description write your code.
// 6. Ensure your solutions work properly!
// 7. Open PR against this repo.
//
// ___
//
// ## Exercises
//
// 1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.
//
console.log("#1 -----------------");

let num = 20
while (num <= 20 && num > 0) {
  console.log(num);
  num--
}

console.log("-----------------");

for (let num = 20; num > 0; num--) {
  console.log(num);
}

//
// 2. Write a `while` loop and a `for` loop that takes the variable "max", and iterates over all numbers from 0 to "max".
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")
//

console.log("#2 -----------------");

let max = 0
while (max <= 20) {
  if (max % 2 === 0) {
    console.log(max + " is EVEN!");
  } else {
    console.log(max + " is ODD!");
  }
  max++
}

console.log("-----------------");

for (let max = 0; max <= 20; max++) {
  if (max % 2 === 0) {
    console.log(max + " is EVEN!");
  } else {
    console.log(max + " is ODD!");
  }
}

// 3. Write a `while` loop and a `for` loop that takes the variable "x" and iterates over all numbers from 0 to "x".
// For each iteration of the loop, it will multiply the number of "x" by 9 and log the result (e.g. "2 * 9 = 18").
//   _Bonus_ think of another way to solve it.
//     <details>
//       <summary>
//         Hint
//       </summary>
//       Find the final number and increment the loop by 9.
//     </details>
//

console.log("#3 -----------------");

let x = 0;
while (x <= 20) {
  console.log(x + " * 9 = " + (x * 9));
  x++
}

console.log("-----------------");

for (let x = 0; x <= 20; x++) {
  console.log(x + " * 9 = " + (x * 9))
}

console.log("BONUS! -----------------");

let num2 = 180
let num3 = 20
while (num3 <= 20 && num3 >= 0) {
  console.log(num3 + " * 9 = " + num2);
  num3--
  num2 -= 9
}


//
// 4. Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.
//

console.log("#4 -----------------");

for (let x = 1; x <= 100; x++) {
  if (x % 5 === 0) {
    console.log(x)
  }
}

//
// 5. Without running/executing your code, how many times will the loop below run? Explain why.
//
// ```js
// let i = 5;
//
// while (i > 3) {
//     i += 1
// }
//
// // Your explanation here
// ```
//
console.log("#5 -----------------");

console.log("It should run infinately, but not print anything to the terminal because there is no console.log() command. Because 5 > 3, it will continue to incrimentally iterate by +1 over and over again.")

// 6. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
//

console.log("#6 -----------------");

for (let x = 1; x <= 100; x++) {
  if (x % 3 === 0) {
    console.log("FIZZ");
  } else if (x % 5 === 0) {
    console.log("BUZZ");
  } else {
    console.log(x);
  }
}

//
// 7. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).
//

console.log("#7 -----------------");

for (let x = 1; x <= 100; x++) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("FizzBuzz");
  } else if (x % 3 === 0) {
    console.log("FIZZ");
  } else if (x % 5 === 0) {
    console.log("BUZZ");
  } else {
    console.log(x)
  }
}

//
// ### Bonus:
//
// 1. Write a program that would log the [lyrics of the song 99 Bottles of Beer](http://www.99-bottles-of-beer.net/lyrics.html). This is the first verse of the song:

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

console.log("BONUS #1 -----------------");

for (let x = 99 ; x > 0; x--) {
  if (x < 3 && x > 1) {
    console.log(x + " bottles of beer on the wall, " + x + " bottles of beer.");
    console.log("You take one down, pass it around, 1 bottle of beer on the wall.");
  } else if (x < 2 && x > 0) {
    console.log(x + " bottle of beer on the wall, " + x + " bottle of beer.");
    console.log("You take one down, pass it around, NO MORE BOTTLE OF BEER ON THE WAAAAAAALLLLL!!!");
  } else {
    console.log(x + " bottles of beer on the wall, " + x + " bottles of beer.");
    console.log("You take one down, pass it around " + (x - 1) + " bottles of beer on the wall.")
  }
}

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

// ```
// <details>
// <summary>
//   <b>Hint</b>
// </summary>
//   Explore this:

console.log("BONUS #2 -----------------");

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

score = 60
while (score <= 100) {
  console.log(score + " = " + assignGrade(score))
  score++
}

//   ```js
//   let grade = assignGrade(80)
//   console.log(grade)
//   ```
//   What is happening here? Can you explain it?
// </details>
//
// ___
//
// 3. Given an integer N draw a square of N x N asterisks. Look at the examples.
//

console.log("BONUS #3 -----------------");

//I had a lot of help from Amin on this one!
let numberofrep = 20
let star = ""
  for (let n = numberofrep; n > 0; n -= 1) {
  star += "*"
  }
//

for (let x = numberofrep; x > 0; x--) {
  console.log(star)
}

//below is the loop we worked on yesterday. I know these mechanics are used somehow in the asterisk loop, but I can't crack it.

// let asterisk = ""
// for (let num = 10; num > 0; num -= 1) {
//   if (num % 2 === 0) {
//     asterisk += "*";
//     console.log(asterisk);
//   } else {
//     asterisk += "*";
//     console.log(asterisk);
//   }
// }


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

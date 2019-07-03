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
// 1. Write a `while` loop and a `for` loop that takes the variable
// "num" and logs all the numbers, descending, between "num" and 1.

let num = 10;

while (num > 0) {
  console.log(num);
  num--;
}

for (let num = 10; num > 0; num--) {
  console.log(num);
}

// 2. Write a `while` loop and a `for` loop that takes the variable
// "max", and iterates over all numbers from 0 to "max".
// For each iteration, it will check if the current number is
// even or odd, and log that to the screen (e.g. "2 is even")

let max = 10;

while (max > 0) {
  if (max % 2 === 0) {
    console.log(max + ' is even');
  } else if (max % 2 === 1) {
    console.log(max + ' is odd');
  } else {
    console.log('error ' + max + ' is not an integer.');
  } max--;
}

for (let max = 10; max > 0; max--) {
  if (max % 2 === 0) {
    console.log(max + ' is even');
  } else if (max % 2 === 1) {
    console.log(max + ' is odd');
  } else {
    console.log('error ' + max + ' is not an integer.');
  }
}

// 3. Write a `while` loop and a `for` loop that takes the
// variable "x" and iterates over all numbers from 0 to "x".
// For each iteration of the loop, it will multiply the number
// of "x" by 9 and log the result (e.g. "2 * 9 = 18").
//   _Bonus_ think of another way to solve it.
//     <details>
//       <summary>
//         Hint
//       </summary>
//       Find the final number and increment the loop by 9.
//     </details>

let x = 10;
let j = 0;
while (j <= x) {
  console.log(j * 9);
  j++;
}

for (let i = 0; i <= x; i++) {
  console.log(i * 9);
}

j = 0;
while (j <= x * 9) {
  console.log(j);
  j += 9;
}

for (let i = 0; i <= x * 9; i += 9) {
  console.log(i);
}

// 4. Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.

for (let i = 1; i <= 100; i++) {
  i % 5 === 0 && i % 2 === 1 ? console.log(i) : null;
}

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
// Infinite because we are incrementing by 1 therefore making i bigger.
// However nothing will sho becasue we're not printing anything.
// The variable i already starts at greater than 3 therefore it'll run but never stop.
// ```

// 6. Write a loop that uses console.log to log all the numbers from 1 to 100,
// with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number,
// and for numbers divisible by 5 (and not 3), log "Buzz" instead.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// 7. Modify your program to log "FizzBuzz", for numbers that are divisible by both
// 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// ### Bonus:
//
// 1. Write a program that would log the [lyrics of the song 99 Bottles of Beer]
// (http://www.99-bottles-of-beer.net/lyrics.html). This is the first verse of the song:
//
//   ```
//   99 bottles of beer on the wall, 99 bottles of beer.
//   Take one down, pass it around, 98 bottles of beer on the wall.
//   ```
//
//   This verse is repeated, each time with one less bottle, until the number
// of bottles is 0. When the number of bottles is 2, the verse is:
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
for (var i = 99; i >= 0; i--) {
  console.log(sp(i) + ' of beer on the wall, ' + sp(i) + ' of beer.');
  i > 0 ?
    console.log('Take one down, pass it around, ' + sp(i - 1) + ' of beer on the wall.') :
    console.log('Go to the store and buy some more, 99 bottles of beer on the wall.');
  console.log('');
}

function sp(i) {
  switch (i) {
    case 0:
      j = 'No more bottles';
      break;
    case 1:
      j = '1 bottle';
      break;
    default:
      j = i + ' bottles';
  }
  return j;
}

// ___
//
// 2. Use the `assignGrade` function (given below). Write a function that
// logs each number from 60 - 100 along with its corresponding letter score.
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

//EXPLANATION OF ^^^^
// the function assignGrade() is being called when the input is 80
// Which would return C therfore console.log('C')
// resulting in the .js displaying a C

// </details>

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
  }
}

for (i = 60; i <= 100; i++) {
  console.log(i + ' - ' + assignGrade(i));
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

let n = 5;
let str = '';
for (let i = n; i > 0; i--) {
  str += '*';
}

for (i = n; i > 0; i--) {
  console.log(str);
}

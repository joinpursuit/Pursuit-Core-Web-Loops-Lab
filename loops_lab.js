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
// 1. Write a `while` loop and a `for` loop that takes the variable "num"
// and logs all the numbers, descending, between "num" and 1.

// WHILE LOOP

let num = 10;
while (num >= 1) {
  console.log(num);
  num -= 1;
}

// // FOR LOOP
//
for (let num = 10; num >= 1; num -= 1) {
  console.log(num);
}

// 2. Write a `while` loop and a `for` loop that takes the variable "max",
// and iterates over all numbers from 0 to "max".
// For each iteration, it will check if the current number is even or odd,
// and log that to the screen (e.g. "2 is even")

// WHILE LOOP
let currentNum = 0;
let maxNum = 50;

while (currentNum <= maxNum && currentNum >= 0) {
  if (currentNum % 2 !== 0) {
    console.log(currentNum + ' is odd');
  } else if (currentNum % 2 === 0) {
    console.log(currentNum + ' is even');
  }
  currentNum += 1;
}

// FOR LOOP

for (let max = 0; max <= 50 && max >= 0; max += 1) {
  if (max % 2 !== 0) {
    console.log(max + ' is odd');
  } else {
    console.log(max + ' is even');
  }
}

// 3. Write a `while` loop and a `for` loop that takes the variable "x"
// and iterates over all numbers from 0 to "x".
// For each iteration of the loop, it will multiply the number of "x" by
// 9 and log the result (e.g. "2 * 9 = 18").
//   _Bonus_ think of another way to solve it.
//     <details>
//       <summary>
//         Hint
//       </summary>
//       Find the final number and increment the loop by 9.
//     </details>

let x = 12;
let y = 0;
while (y <= x && y >= 0) {
  console.log(y * 9);
  y += 1;
}

//
// 4. Write code that prints/logs all the numbers that end in a 5 from 1 to
// 100, **exclusive**.

let number = 1;
while (number >= 1 && number <= 100) {
  if (number % 10 === 5) {
    console.log(number);
  }
  number++;
}


// 5. Without running/executing your code, how many times will the loop
// below run? Explain why.
//
// ```js
// let i = 5;
//
// while (i > 3) {
//     i += 1
//
// // The loop will run indefinitely due to the fact that the end point is
//    not specified, and the only condition that needs to be satisfied is i
// being greater than 3
// ```
//
// 6. Write a loop that uses console.log to log all the numbers from 1 to 100,
// with two exceptions. For numbers divisible by 3, log "Fizz" instead of the
// number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.

let nums = 1;
while (nums >= 1 && nums <= 100) {
  if (nums % 3 === 0) {
    console.log('fizz');
  } else if (nums % 5 === 0) {
    console.log('buzz');
  } else {
    console.log(nums);
  }

  nums++;
}

// 7. Modify your program to log "FizzBuzz", for numbers that are divisible
// by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only
// one of those).

let nums1 = 1;
while (nums1 >= 1 && nums1 <= 100) {
  if (nums1 % 3 === 0 && nums1 % 5 === 0) {
    console.log('fizzbuzz');
  } else if (nums1 % 5 === 0) {
    console.log('buzz');
  } else if (nums1 % 3 === 0) {
    console.log('fizz');
  } else {
    console.log(nums1);
  }
  nums1++;
}

// ### Bonus:
//
// 1. Write a program that would log the [lyrics of the song 99 Bottles of
// Beer](http://www.99-bottles-of-beer.net/lyrics.html). This is the first
// verse of the song:
//
//   ```
//   99 bottles of beer on the wall, 99 bottles of beer.
//   Take one down, pass it around, 98 bottles of beer on the wall.
//   ```
//
//   This verse is repeated, each time with one less bottle, until the
// number of bottles is 0. When the number of bottles is 2, the verse is:
//
//   ```
//   2 bottles of beer on the wall, 2 bottles of beer.
//   Take one down, pass it around, 1 bottle of beer on the wall.
//   ```
//
//  In the last line, the word bottles (plural), is  replaced with bottle
// (singular)
//
//   When the number of bottles is 1, the verse is:
//
//   ```
//   1 bottle of beer on the wall, 1 bottle of beer.
//   Take one down, pass it around, No more bottle of beer on the wall.
//   ```
//------------------MY answer
let bottle = 99;
while (bottle <= 99 && bottle >= 0) {
  if (bottle >= 3) {
    console.log(bottle + ' bottles of beer on the wall, ' + bottle + ' bottles of beer. Take one down, pass it around, ' + (bottle - 1) + ' bottles of beer on the wall.');
  } else if (bottle === 2) {
    console.log(bottle + ' bottles of beer on the wall, ' + bottle + ' bottles of beer. Take one down, pass it around, ' + (bottle - 1) + ' bottle of beer on the wall.');
  } else if (bottle === 1) {
    console.log(bottle + ' bottle of beer on the wall, ' + bottle + ' bottle of beer. Take one down, pass it around, No more bottles of beer on the wall.');
  }

  bottle--;
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
// </details>
//--------------------- My answer

let xy = 60;
function assignGrade(xy) {
  if (xy > 90) {
    return 'A';
  } else if (xy > 80) {
    return 'B';
  } else if (xy > 70) {
    return 'C';
  } else if (xy > 65) {
    return 'D';
  } else {
    return 'F';
  };
};

while (xy >= 60 && xy <= 100) {
  console.log(xy + ' - ' + assignGrade(xy));
  xy += 1;
}

// ___
//
// 3. Given an integer N draw a square of N x N asterisks. Look at the
// examples.
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

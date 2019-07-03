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

let num = 10;

while (num > 0) {
  console.log("1.a " + num);
  num--;
}

let num2 = 10;
for(num2; num2 > 0; num2--) {
  console.log("1.b " + num2);
}

console.log("--------------------");

// 2. Write a `while` loop and a `for` loop that takes the variable "num", and iterates over all numbers from 0 to "num".
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

let num3 = 10;

while (num3 >= 0) {
  if(num3 % 2 === 0) {
    console.log(`2.a Even: ${num3}`);
  } else {
    console.log(`2.a Odd:  ${num3}`);
  }
  num3--;
}

console.log("--------------------");

let num4 = 10;

for (num4; num4 >= 0; num4--) {
  if(num4 % 2 === 0) {
     console.log(`2.b Even: ${num4}`);
   } else {
     console.log(`2.b Odd:  ${num4}`);
   }
}

console.log("--------------------");
// 3. Write a `while` loop and a `for` loop that takes the variable "num" and iterates over all numbers from 0 to "num".
// For each iteration of the loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//   _Bonus_ think of another way to solve it.
//     <details>
//       <summary>
//         Hint
//       </summary>
//       Find the final number and increment the loop by 9.
//     </details>

let num5 = 10;
let i = 1;

while (num5 > 0) {
  console.log(`3.a ${i} * 9 = ${i * 9}`);
  i++;
  num5--;
}

console.log("--------------------");

let num6 = 10;

for (let i = 1; i < num6; i++) {
  console.log(`3.b ${i * 9}`);
}

console.log("--------------------");

// 4. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 !== 0) {
    console.log("4. Buzz");
  } else if (i % 3 === 0) {
    console.log("4. Fizz");
  } else {
    console.log("4. " + i);
  }
}

console.log("--------------------");
// 5. Explain
// let i = 5;
//
// while (i > 3) {
//     i += 1
// }

console.log("Explanation => It will loop forever since i keeps getting bigger and the stop condition is true as long as i is greater than 3 which is always due to i+= 1 going to infinte")

// 5. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("5. FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("5. Buzz")
  }else if (i % 3 === 0) {
    console.log("5. Fizz");
  } else {
    console.log("5. " + i);
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

console.log("--------BONUS #1--------");

let lyrics = "99 bottles of beer on the wall, 99 bottles of beer. Take one down, pass it around, 98 bottles of beer on the wall.";
let split = lyrics.split(" ");

for (let i = Number(split[0]); i >= 0; i--) {
  console.log(split.join(" "));
  split[0]--;
  split[7]--;
  split[17]--;
  if (split[17] === 0) {
      split[1] = "bottle";
      split[8] = "bottle";
      split[17] = "No more";
      split[18] = "bottle";
      console.log(split.join(" "));
       break;
  }
}


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

console.log("--------BONUS #2--------");

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

for (let i = 60; i <= 100; i++) {
  console.log(`${i} - ${assignGrade(i)}`);
}

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

let size = 3;
let asterisks = "";

for(let i = 0; i < size; i++) {
  asterisks += "*";
}

for(let i = 0; i < size; i++) {
  console.log(asterisks)
}


//

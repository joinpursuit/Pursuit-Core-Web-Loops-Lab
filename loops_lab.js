// 1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.
// let num = 24;
//
// while (num-- && num >= 2) {
//   console.log(num);
// }
//
// for (num >= 2; num-= 1;) {
//   console.log(num);
// }

// 2. Write a `while` loop and a `for` loop that takes the variable "max", and iterates over all numbers from 0 to "max".
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")
// let max = 32;
//
// for (let max = 0; max <= 32;) {
//   if (max % 2 === 0) {
//     console.log(max + " is even.");
//   } else {
//     console.log(max + " is odd.");
//   }
//   max ++;
// }

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
// 4. Write code that prints/logs all the numbers that end in a 5 from 1 to 100, exclusive.
// let myNumber = 1;
// while (myNumber < 100) {
//   if (myNumber % 5 === 0 && myNumber > 5 && myNumber % 2 != 0) {
//     console.log(myNumber);
//   }
//   myNumber ++;
// }

// 5. Without running/executing your code, how many times will the loop below run? Explain why.
//
// let i = 5;
//
// while (i > 3) {
//     i += 1
// }
//
// // Your explanation here
//It will run an infinite number of times as there's no max limit given for the loop. i equals 5, which is already greater than 3, and will
//continue to run over all the possible numbers greater than 3.

// 6. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
let fizzy = 1;
// while (fizzy <= 100) {
//   if (fizzy % 3 === 0) {
//     console.log("Fizz");
//   } else if (fizzy % 5 === 0 && fizzy % 3 != 0) {
//     console.log("Buzz");
//   } else {
//     console.log(fizzy);
//   }
//   fizzy ++;
// }


// 7. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5
// (still log "Fizz" or "Buzz" for numbers divisible by only one of those).
while (fizzy <= 100) {
  if (fizzy % 3 === 0 && fizzy % 5 != 0) {
    console.log("Fizz");
  } else if (fizzy % 5 === 0 && fizzy % 3 != 0) {
    console.log("Buzz");
  } else if (fizzy % 5 === 0 && fizzy % 3 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(fizzy);
  }
  fizzy ++;
}

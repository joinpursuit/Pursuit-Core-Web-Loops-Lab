// <!-- # Loop Exercises
//
// 1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.

let num = 12;

while(num > 0) {
  console.log(num);
  num--;
}
;

for(let i = num; i > 0; i--) {
  console.log(i)
}


// 2. Write a `while` loop and a `for` loop that takes the variable "num", and iterates over all numbers from 0 to "num".
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

let num = 12;
let i = 0;

while(i <= num) {
  let oddOrEven = i % 2?"odd":"even";
  console.log(i + " is " + oddOrEven);
  i++;
}

for(let i = 0; i <= num; i++) {
    let oddOrEven = i % 2?"odd":"even";
  console.log(i + " is " + oddOrEven);
}

// 3. Write a `while` loop and a `for` loop that takes the variable "num" and iterates over all numbers from 0 to "num".
// For each iteration of the loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

let num = 7;
let i = 0;

while (i <= num) {
  let multipliedNumber = i * 9;
  console.log(i + " * 9 = " + multipliedNumber);
  i++;
}

for (i = 0; i <= num; i++) {
  console.log(i + " * 9 = " + (i * 9));
}

//
// _Bonus_ think of another way to solve it.
//       Hint
//     Find the final number and increment the loop by 9.

for (i = 0; i <= num * 9; i += 9) {
  console.log(i);
}

/////////  Not sure how to log the above as a sentence (e.g. "2 * 9 = 18").
//
// 4. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
//

for(let i = 1; i <= 100; i++) {

  if(i % 3 === 0) {
    console.log("Fizz")

  } else if(i % 5 === 0) {
    console.log("Buzz")

  } else {
    console.log(i)
  }
}

//
// 5. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).


for(let i = 1; i <= 100; i++) {

  if (i % 3 === 0 && i % 5 === 0) {
  console.log("FizzBuzz");

  } else if (i % 3 === 0) {
    console.log("Fizz");

  } else if (i % 5 === 0) {
    console.log("Buzz");

  } else {
    console.log(i);
  }
}

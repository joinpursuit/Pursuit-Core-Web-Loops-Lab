
// ## Exercises

// 1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.
let num = 10
while (num >= 1) {
    console.log(num);
    num -= 1
}

for (let i = 10; i > 0; i--) {
    console.log(i);
}

// 2. Write a `while` loop and a `for` loop that takes the variable "max", and iterates over all numbers from 0 to "max". 
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

let max = 20
let i = 0
while (i <= max) {
    if (i % 2 === 0) {
        console.log(i + " is even"); 
    } else {
        console.log (i + ' is odd');
    }
    i += 1
}

for (let i = 0; i <= max; i++) {
    if (i % 2 === 0) {
  console.log (i + ' is even');
    } else {
  console.log (i + ' is odd');
    }
}
// 3. Write a `while` loop and a `for` loop that takes the variable "x" and iterates over all numbers from 0 to "x". 
// For each iteration of the loop, it will multiply the number of "x" by 9 and log the result (e.g. "2 * 9 = 18").
let y = 0
let x = 10

while (y <= x) {
    console.log(y * 9);
    y += 1
}

for (let y = 0; y <= x; y++) {
    console.log(y * 9)
}

//   _Bonus_ think of another way to solve it. 
//     <details>
//       <summary>
//         Hint
//       </summary>
//       Find the final number and increment the loop by 9.
//     </details>

// 4. Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.
for (let i = 5; i < 100; i += 10) {
    console.log(i)   
}
// 5. Without running/executing your code, how many times will the loop below run? Explain why.

// ```js
// let i = 5;

// while (i > 3) {
//     i += 1
// }

// // Your explanation here
// ```
//the loop won't stop running because "i" will never be less that 

// 6. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. 
//For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
for (let i = 1; i < 100; i++) {
   if (i % 5 === 0) {
        console.log ('Buzz');
    } else if (i % 3 === 0) {
        console.log ('Fizz');
    } else {
        console.log(i);
        
    }

}


// 7. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).
for (let i = 1; i < 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log ('FizzBuzz');
  } else if (i % 5 === 0) {
    console.log ('Buzz');
  } else if (i % 3 === 0) {
    console.log ('Fizz');
  } else {
    console.log (i);
  }
}

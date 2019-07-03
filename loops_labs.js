# Loops Lab

To complete this lab, do the following:

1. Fork this repo
2. Clone **your** forked repo
3. Create a file called `loops_lab.js` inside your cloned repo
4. Copy the description of the exercise as a comment
5. Underneath the commented description write your code.
6. Ensure your solutions work properly!
7. Open PR against this repo.

___

## Exercises

1. Write a `while` loop and a `for` loop that takes the variable
"num" and logs all the numbers, descending, between "num" and 1.

// ANSWER:
//
//  FOR:

// for (let num = 50; num > 0; num -= 1) {
//   console.log(num);
// }

// LET :

// let num = 50;
// while (num > 0) {
//   console.log(num);
//   num -= 1;
// }

2. Write a `while` loop and a `for` loop that takes the variable
"num", and iterates over all numbers from 0 to "num". For each iteration,
it will check if the current number is even or odd, and log that
to the screen (e.g. "2 is even")

// ANSWER:
// for (let max = 0; max <= 10; max += 1) {
//   if (max % 2 === 0) {
//     console.log(max + " is even")
//   } else {
//     console.log(max + " is odd")
//   }
// }

//SEEKING HEEEELPPPPP!!!!

// let max = 0;
// while (max <= 10) {
//   if (max % 2 === 0) {
//   console.log(max + " is even")
// } else {
//   console.log(max + " is odd")
// }
//   max += 1;
// }


3. Write a `while` loop and a `for` loop that takes the
variable "num" and iterates over all numbers from 0 to "num".
For each iteration of the loop, it will multiply the
number by 9 and log the result (e.g. "2 * 9 = 18").
   _Bonus_ think of another way to solve it.
     <details>
       <summary>
         Hint
       </summary>
       Find the final number and increment the loop by 9.
     </details>

 FOR LOOP:
 for (let num = 0; num <= 10; num += 1) {
   console.log(num + " * 9 is " + num * 9);
 }

// WHILE LOOP:

// let num = 0
// while (num < 10) {
//   console.log(num + " * 9 " + num * 9)
//   num ++
// }

4.  Write code that prints/logs all the numbers
that end in a 5 from 1 to 100, exclusive.

// for (let num = 5; num <= 100; num += 5) {
//   if (num % 2 === 1) {
//     console.log(num);
//   }
// }

5.  Without running/executing your code, how many
times will the loop below run? Explain why.

// let i = 5;
//
// while (i > 3) {
//     i += 1
// }
// The loop will run infinitely until the terminal
// crashes because "i" is always greater than 3.

6. Write a loop that uses console.log to log all the numbers
from 1 to 100, with two exceptions. For numbers divisible by 3,
log "Fizz" instead of the number, and for numbers divisible by 5
(and not 3), log "Buzz" instead.

// for (let x = 1; x <= 100; x += 1) {
//   if (x % 3 === 0) {
//     console.log("Fizz");
//   } else if (x % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(x)
//   }
// }

7. Modify your program to log "FizzBuzz", for numbers that are
divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers
divisible by only one of those).


// for (let y = 1; y <= 100; y += 1) {
//   if (y % 3 === 0 && y % 5 === 0) {
//     console.log("FizzBuzz");
//   }else if (y % 3 === 0) {
//     console.log("Fizz");
//   }else if (y % 5 === 0) {
//     console.log("Buzz")
//   }else {
//     console.log(y);
//   }
// }

### Bonus:

 1. Write a program that would log the [lyrics of the song 99 Bottles of
Beer](http://www.99-bottles-of-beer.net/lyrics.html).
This is the first verse of the song:

   ```
   99 bottles of beer on the wall, 99 bottles of beer.
   Take one down, pass it around, 98 bottles of beer on the wall.
   ```

   This verse is repeated, each time with one less bottle, until the number of bottles is 0. When the number of bottles is 2, the verse is:

  ```
   2 bottles of beer on the wall, 2 bottles of beer.
   Take one down, pass it around, 1 bottle of beer on the wall.
   ```

   In the last line, the word bottles (plural), is  replaced with bottle (singular)

   When the number of bottles is 1, the verse is:

   ```
   1 bottle of beer on the wall, 1 bottle of beer.
   Take one down, pass it around, No more bottle of beer on the wall.

   ```

// for (let b = 99; b >= 1; b -= 1) {
//   if (b > 2) {
//     console.log(b + ' bottles of beer on the wall, ' + b + ' bottles of beer.');
//     console.log('Take one down, pass it around, ' + (b - 1) + ' bottles of beer on the wall.');
//   } else if (b === 2) {
//     console.log(b + ' bottles of beer on the wall, ' + b + ' bottles of beer.');
//     console.log('Take one down, pass it around, 1 bottle of beer on the wall.');
//   }else if (b === 1) {
//     console.log(b + ' bottle of beer on the wall, 1 bottle of beer.');
//     console.log('Take one down, pass it around, No more bottle of beer on the wall.');
//   }
// }

 ___

2. Use the `assignGrade` function (given below).
Write a function that logs each number from 60 - 100 along with its corresponding letter score.
 Exp For each number from 81 to 90, log B, like so:

 ```js
 60 - F
 ...
 81 - B
 82 - B
 83 - B
 ...
 93 - A
 94 - A
 ...
 ```
 ```js
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
```
<details>
<summary>
  <b>Hint</b>
</summary>
  Explore this:

  ```js
  let grade = assignGrade(80)
  console.log(grade)
  ```
  What is happening here? Can you explain it?
</details>

let score = 0
while (score = 100) {
if (score >= 90) {
  console.log
}
}

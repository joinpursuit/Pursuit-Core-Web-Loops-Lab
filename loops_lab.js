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

let num = 80
while (num > 0) {
console.log(num)
  num -= 1
}

for (let num = 80; num > 0; num -= 1) {
  console.log(num)
}


// 2. Write a while loop and a for loop that takes the variable "max", and iterates over all numbers from 0 to "max". For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

let max = 0
while ( max <= 15) {
if (max % 2 === 0){
  console.log ( max + " is even ")
} else {
  console.log( max + " is odd ")
}
max += 1
}

for (let max = 0; max <= 15; max +=1) {
  if (max % 2 ===0) {
    console.log ( max + " is even ")
  } else {
    console.log (max + " is odd ")
    }
  }



// ( originial questions # 2) Write a `while` loop and a `for` loop that takes the variable "num", and iterates over all numbers from 0 to "num".
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

let num = 0
while (num <= 70 && num >= 0) {
if (num % 2 === 0){
  console.log( num + ' even number ')
} else {
  console.log( num + ' odd number ')
}
num += 1
}
//
for (let num = 0; num <= 70; num += 1) {
if (num % 2 === 0) {
  console.log (num + ' even number ')
} else {
  console.log( num + ' odd number ')
  }
}
//
// 3. Write a `while` loop and a `for` loop that takes the variable "num" and iterates over all numbers from 0 to "x".
// For each iteration of the loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//   _Bonus_ think of another way to solve it.
//         Hint
//       Find the final number and increment the loop by 9.
//     </details>

let x = 0
while (x <= 12) {
console.log( x + " * 9 =  " + x * 9)
// console.log (x  * 9)
num +=1
}

for ( let x = 0; x <= 12; x += 1) {
  console.log (x + " * 9 = " + x * 9)
}
//
// 4. Write code that prints/logs all the numbers that end in a 5 from 1 to 100, exclusive.

let a = 1
while ( a <= 100) {
if (a % 5 === 0 && a % 10 === 5) {
  console.log(a)
  }
a ++
}

// 5. Without running/executing your code, how many times will the loop below run? Explain why.
// let i = 5;
//
// while (i > 3) {
//     i += 1
// }

// Your explanation here
This code is executing by one and without stopping any number greater than three but since its missing the console.log it cannot run.
It cannot demostrate that if the boolean expression is true.

//  6. (0riginal #4 ) Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
//

let num = 0
while (num <= 100) {
  if (num % 3 === 0) {
    console.log(" Fizz ")
  } else if ( num % 5 === 0) {
    console.log (' buzz')
  }
  num +=1
}

for (let num = 0; num <= 100; num += 1)
if ( num % 3 === 0) {
  console.log('Fizz')
} else if (num % 10 === 0) {
  console.log( 'buzz')
 }





// 7. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).


let num = 0
while (num <= 100) {
  if (num % 3 === 0) {
    console.log(" Fizz ")
  } else if ( num % 5 === 0) {
    console.log (' buzz')
  } else {
    console.log (' buzz' + 'Fizz')
  }
  num +=1
}

for (let num = 0; num <= 100; num += 1)
if ( num % 3 === 0) {
  console.log('Fizz')
} else if (num % 5 === 0) {
  console.log( 'buzz')
} else {
  console.log (' buzz' + 'Fizz')
 }


//Bonus:

// Write a program that would log the lyrics of the song 99 Bottles of Beer. This is the first verse of the song:
 let x = 99
  while ( x <= 99 && x >= 1) {
    console.log( x)
    x += 1
  }



 // 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down, pass it around, 98 bottles of beer on the wall.
// This verse is repeated, each time with one less bottle, until the number of bottles is 0. When the number of bottles is 2, the verse is:
//
// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down, pass it around, 1 bottle of beer on the wall.
// In the last line, the word bottles (plural), is replaced with bottle (singular)
//
let x = 99
assignGrade = a
 while ( x >= 1)
  if ( a >= 2) {
   console.log(x + " bottles of beer on the wall, " + x + " bottles of beer. " )
   console.log(" Take one down and pass it around, " + x + " bottles of beer on the wall. ")
 } else if ( a <= 1){
   console.log( x + " bottles of beer on the wall, " + x + " bottles of beer. " )
 console.log(" Take one down and pass it around, " + x + " bottles of beer on the wall, " + " No more bottle of beer on the wall.")
 }
   x -= 1
 }

// When the number of bottles is 1, the verse is:
//
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down, pass it around, No more bottle of beer on the wall.
// Use the assignGrade function (given below). Write a function that logs each number from 60 - 100 along with its corresponding letter score. Exp For each number from 81 to 90, log B, like so:
// 60 - F
// ...
// 81 - B
// 82 - B
// 83 - B
// ...
// 93 - A
// 94 - A
// ...
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
//  Hint
// Given an integer N draw a square of N x N asterisks. Look at the examples.
// Example 1: Input: let N = 2
//
// Output:
//
// **
// **
// Example 2: Input: let N = 3
//
// Output:
//
// ***
// ***
// ***
//  Hint 1
// Try printing/logging a single line of * first.
//  Hint 2
// You will need 2 loops for this.
let x = 99
 while ( x >= 0) {

   if ( x >= 3) {
    console.log(x + " bottles of beer on the wall, " + x + " bottles of beer. " )
    console.log(" Take one down and pass it around, " + (x - 1) + " bottles of beer on the wall. ")
  } else if ( x === 2 ) {
     console.log( x + " bottles of beer on the wall, " + x + " bottles of beer. " )
     console.log( " Take one down and pass it around, " + (x - 1) + " bottle of beer on the wall. " )
   } else if ( x === 1) {
   console.log( x + " bottle of beer on the wall, " + x + " bottle of beer. ")
   console.log( " Take one down and pass it around, " + " no more bottles of beer on the wall. ")
 } else if ( x === 0) {
    console.log( " No more bottles of beer on the wall, " + " no more bottles of beer. ")
    console.log( " Go to the store and buy some more, " + " 99 bottles of beer on the wall. ")
 }
   x -= 1
 }

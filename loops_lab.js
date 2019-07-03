// 1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.
let num = 9
while (num > 0) {
  console.log(num)
  num--
}

for (let num2 = 15; num2 >0; num2--){
  console.log(num2)
}

// 2. Write a while loop and a for loop that takes the variable "max", and iterates over all numbers from 0 to "max". For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")
let max = 12
let init = 0
while (init <= max) {
  console.log(init)
  init++
}

init = 0
for (let max2 = 7; init <= max2; init++ ) {
  console.log(init)
}

// 3. Write a while loop and a for loop that takes the variable "x" and iterates over all numbers from 0 to "x". For each iteration of the loop, it will multiply the number of "x" by 9 and log the result (e.g. "2 * 9 = 18"). Bonus think of another way to solve it.
init = 0
let x = 5
while (init <= x) {
  console.log(init + (' * 9 = ') + init*9)
  init++
}

init = 0
for (let x2 = 8; init <= x2; init++) {
  console.log(init + (' * 9 = ') + init*9)
}

// 4. Write code that prints/logs all the numbers that end in a 5 from 1 to 100, exclusive.
for (let i = 1; i < 100; i++){
  if (i % 5 === 0 && i % 10 === 5){
  console.log (i)
  }
}

// 5. Without running/executing your code, how many times will the loop below run? Explain why.

// let i = 5;
//
// while (i > 3) {
//     i += 1
// }

// It will run forever, because i is already greater than 3 and with the increment of 1 the condition will be always true.

// 6. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
for (let a = 1; a <= 100; a++){
  if (a % 3 === 0) {
    console.log('Fizz')
  } else if (a % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(a)
  }
}

// 7. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).
for (let b = 1; b <= 100; b++){
  if (b % 3 === 0 & b % 5 === 0) {
    console.log('FizzBuzz')
  } else if (b % 3 === 0) {
    console.log('Fizz')
  } else if (b % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(b)
  }
}

// Bonus
// 1. Write a program that would log the lyrics of the song 99 Bottles of Beer. This is the first verse of the song:
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down, pass it around, 98 bottles of beer on the wall.
// This verse is repeated, each time with one less bottle, until the number of bottles is 0. When the number of bottles is 2, the verse is:
//
// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down, pass it around, 1 bottle of beer on the wall.
// In the last line, the word bottles (plural), is replaced with bottle (singular)
//
// When the number of bottles is 1, the verse is:
//
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down, pass it around, No more bottle of beer on the wall.
let beer = 99
let plural = ' bottles'
let singular = ' bottle'
while (beer > 0) {
  console.log(beer + plural + ' of beer on the wall, ' + beer + plural + ' of beer.')
  if (beer === 2) {
    plural = singular
  }
  if (beer === 1) {
    beer = "No more"
  }
  if (beer > 1) {
    beer--
  }
  console.log('Take one down, pass it around, ' + beer + plural + ' of beer on the wall.')
}

// 2. Use the assignGrade function (given below). Write a function that logs each number from 60 - 100 along with its corresponding letter score. Exp For each number from 81 to 90, log B, like so:
// 60 - F
// ...
// 81 - B
// 82 - B
// 83 - B
// ...
// 93 - A
// 94 - A
// ...

//function assignGrade(score) {
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
let letter = ''
let score = 60
while (score < 101) {
  if (score > 90) {
          letter = 'A';
  } else if (score > 80) {
          letter = 'B';
  } else if (score > 70) {
          letter = 'C';
  } else if (score > 65) {
          letter = 'D';
  } else {
          letter = 'F'
  }
  console.log(score + ' - ' + letter)
  score ++
}

// 3. Given an integer N draw a square of N x N asterisks. Look at the examples.
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
n = 4
let star = ''
for (let y = 1; y <= n; y++) {
  star = star + '*'
}
for (let z = 1; z <= n; z++) {
  console.log(star)
}

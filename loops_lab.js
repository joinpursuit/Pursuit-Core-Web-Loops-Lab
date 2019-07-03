// ## Exercises
//
// 1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.

let numA = 100;
while (numA >= 0){
  console.log (numA)
  numA-- ;
};

for (let myNumA = 100; myNumA >= 0; myNumA --){
  console.log(myNumA)
}

// 2. Write a `while` loop and a `for` loop that takes the variable "num", and iterates over all numbers from 0 to "num".
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")
//
let numB = 0;
while (numB <= 50) {
  if (numB % 2 === 0) {
    console.log(numB + ' is even')
  } else{
    console.log( numB + ' is odd')
  }
  numB ++;
}
for (let myNumB = 0; myNumB <= 50; myNumB++){
  if (myNumB % 2 === 0){
    console.log(myNumB + ' is even')
  }else{
    console.log(myNumB + ' is odd')
  }
}

// 3. Write a `while` loop and a `for` loop that takes the variable "num" and iterates over all numbers from 0 to "num".
// For each iteration of the loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//   _Bonus_ think of another way to solve it.
//     <details>
//       <summary>
//         Hint
//       </summary>
//       Find the final number and increment the loop by 9.
//     </details>
//
let numC = 0
while (numC <= 10){
  console.log(numC + ' * 9 = ' + numC * 9)
  numC ++;
}

for (let x = 0; x <= 10; x += 1){
  console.log(x + ' * 9 = ' + x * 9)
}
// 4. Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.

let numD = 1
while (numD <= 90){
  if (numD == 1){
    console.log(numD + 4)
    numD += 4
  } else{
    console.log(numD + 10)
    numD += 10
  }
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
// The starting point of the loop is at the number 5. It iterates infinitely because the body says as long as the variable is greater than 3 it should continue to loop.
// ```
//
// 6. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
//
for (let count = 0; count <= 100; count += 1) {
  if(count % 3 === 0){
    console.log('Fizz')
  }else if (count % 5 === 0){
    console.log('Buzz')
  }else{
    console.log(count)
  }
}

// 7. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).
//
for (let count = 0; count <= 100; count += 1) {
  if(count % 3 === 0 && count % 5 === 0){
    console.log('FizzBuzz')
  }else if (count % 3 === 0){
    console.log('Fizz')
  }else if (count % 5 === 0){
    console.log('Buzz')
  }else{
    console.log(count)
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
for (let beerCount = 99; beerCount >= 0; beerCount -= 1){
if (beerCount === 2 ){
  console.log(beerCount + ' bottles of beer on the wall,' + beerCount + 'bottles of beer. Take one down, pass it around, ' + (beerCount - 1) + 'bottle of beer on the wall.')
} else if( beerCount === 1){
  console.log(beerCount + ' bottle of beer on the wall,' + beerCount + 'bottles of beer. Take one down, pass it around, No more bottles of beer on the wall.')
}else {
  console.log (beerCount + ' bottles of beer on the wall,' + beerCount + ' bottles of beer. Take one down, pass it around, ' + beerCount  + ' bottles of beer on the wall.')
}
}
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
for (let grader = 60; grader <= 100; grader += 1){
  console.log(assignGrade(grader) + ' - ' + grader)
}

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
// The grade variable is being assigned to the function. When we call the function in console log it prints the function as 80 is passed through as a parameter

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
//

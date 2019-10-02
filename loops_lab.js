// a. Write a `while` loop that takes the variable `num` and logs all the numbers, descending, between "num" and 1

let num = 10
while (num >= 1){
    console.log("The number is " + num)
    num -=1
}


// b. Write a `for` loop that takes the variable `num` and logs all the numbers, descending, between "num" and 1

for (let num = 20; num >= 1; num -=1) {
  console.log(num);
}

// ## Problem Two Nilber

// a. Write a `while` loop that takes the variable "max", and iterates over all numbers from 0 to "max". 
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

let max = 1
while (max <= 10){
    if (max%2 === 0){
        console.log(max + " is even")
    } else if (max%2 !==0){
        console.log(max + " is odd")
    } max +=1
}

// b. Use a `for` loop instead

for (let max = 0; max <=10; max +=1){
    if (max%2 === 0){
        console.log(max + " is even")
    } else if (max%2 !==0){
        console.log(max + " is odd")
    } 
}


// ## Problem Three Patrick

// a. Write a `while` loop that takes the variable "x" and iterates over all numbers from 0 to "x". For each iteration of the loop, it will multiply the number of "x" by 9 and log the result 

let x = 20
while (x >= 0){
  console.log(x * 9);
  x --
}

// b. Use a `for` loop instead.

for (let x = 20; x >= 0; x--){
    console.log(x * 9)
  }

// Example:

// ```js
// let x = 5

// // Your code here

// /* Logs:
// "0 * 9 = 0"
// "1 * 9 = 9"
// "2 * 9 = 18"
// "3 * 9 = 27"
// "4 * 9 = 36"
// "5 * 9 = 45"
// */
// ```


// Write a `while` loop and a `for` loop that takes the variable "x" and iterates over all numbers from 0 to "x". For each iteration of the loop, it will multiply the number of "x" by 9 and log the result (e.g. "2 * 9 = 18").


// ## Problem Four Nilber

// Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.


for (let num = 5; num <= 100; num += 10){
    console.log(num) 
  }

// ## Problem Five Patrick

// Without running/executing your code, how many times will the loop below run? Explain why.

This is an infinite loop
// ```js
// let i = 5;
// while (i > 3) {
//     i += 1
// }

// // Your explanation here
// ```
Since i is 5 and i is greater than the value of the conditional statement, the code will iterate infinitely.

// ## Problem Six Nilber

// Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.

for (i=1; i<=100; i++){
    if (i%3 === 0){
        console.log("Fizz")
        if (i%5 === 0){
            console.log(i + " is also divisible by 5")
        }
    } else if (i%5 === 0){
        console.log("Buzz")
    } else {
        console.log(i + " is not divisible by 3 or 5")
    }
}

// ## Problem Seven Patrick

// Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).

or(num = 1; num <= 100; num ++){
    if(num % 3 === 0 && num % 5 === 0){
      console.log('FizzBuzz')
    } else if (num % 3 === 0){
      console.log('Fizz')
   } else if(num % 5 === 0) {
     console.log('Buzz')
  } else {
        console.log(num)
  }
  }

// ## Problem Eight Nilber & Patrick

let bottles;
for (counter = 99; counter >= 1; counter = counter -1) 
{
    if (counter == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(counter + " " + bottles + " of beer on the wall.");
    
    if (counter < 99) {
    console.log(counter+" "+bottles+" of beer.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if (counter == 1) {
        console.log("No bottles of beer on the wall.");
    }
}
}


// Write a program that would log the [lyrics of the song 99 Bottles of Beer](http://www.99-bottles-of-beer.net/lyrics.html). This is the first verse of the song:

//   ```
//   99 bottles of beer on the wall, 99 bottles of beer.
//   Take one down, pass it around, 98 bottles of beer on the wall.
//   ```

// This verse is repeated, each time with one less bottle, until the number of bottles is 0. When the number of bottles is 2, the verse is:

//   ```
//   2 bottles of beer on the wall, 2 bottles of beer.
//   Take one down, pass it around, 1 bottle of beer on the wall.
//   ```

//   In the last line, the word bottles (plural), is  replaced with bottle (singular)

//   When the number of bottles is 1, the verse is:

//   ```
//   1 bottle of beer on the wall, 1 bottle of beer.
//   Take one down, pass it around, No more bottle of beer on the wall.
//   ```

// ## Problem Nine Patrick

// Given an integer N draw a square of N x N asterisks. Look at the examples.


// Example 1:
// Input: `let N = 2`

// Output:
// ```js
// **
// **
// ```

// Example 2:
// Input: `let N = 3`

// Output:
// ```js
// ***
// ***
// ***
// ```

// <details>
//   <summary>
//     Hint 1 
//   </summary>
//   Try printing/logging a single line of * first.
// </details>

// <details>
//   <summary>
//     Hint 2
//   </summary>
//   You will need 2 loops for this.
// </details>

// ## Problem Ten Nilber

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

sum = 0
for (q = 1; q <1000; q++){
    if (q %3 === 0 || q %5 ===0){
        sum +=q
    }
} console.log(sum)
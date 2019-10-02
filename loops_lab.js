Problem One

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

// ## Problem Two

// a. Write a `while` loop that takes the variable "max", and iterates over all numbers from 0 to "max". 
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")
let max = 10
while(max >= 0){
  if(max % 2 === 0){
  console.log(max+ ' is even');
  } else(max+ ' is odd')
  max --
} 

// b. Use a `for` loop instead
for (let max = 10; max >= 0; max -- ){
  if(max % 2 === 0){
    console.log(max+ ' is even')
  } else{
    console.log(max+' is odd')
  }
}

// ## Problem Three

// a. Write a `while` loop that takes the variable "x" and iterates over all numbers from 0 to "x". For each iteration of the loop, it will multiply the number of "x" by 9 and log the result 

let x = 20
while (x >= 0){
  console.log(x * 9);
  x --
}


// b. Use a `for` loop instead.
// Example:

for (let x = 20; x >= 0; x--){
  console.log(x * 9)
}


// Write a `while` loop and a `for` loop that takes the variable "x" and iterates over all numbers from 0 to "x". For each iteration of the loop, it will multiply the number of "x" by 9 and log the result (e.g. "2 * 9 = 18").
// While Loop
let x = 20
while (x >= 0){
  console.log(x * 9);
  x --
}

// For Loop
for (let x = 20; x >= 0; x--){
  console.log(x * 9)
}


// ## Problem Four

// Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.
for (let num = 5; num <= 100; num += 10){
  console.log(num) 
}

// ## Problem Five

// Without running/executing your code, how many times will the loop below run? Explain why.

// ```js
// let i = 5;

// while (i > 3) {
//     i += 1
// }

// // Your explanation here
console.log('You will have an infinite loop because "i" is always greater than 3')

// ## Problem Six

// Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.

for(num = 1; num <= 100; num ++){
  if(num % 3 === 0 && num % 5 === 0){
    console.log('Fizz')
  } else if (num % 5 === 0 && num % 3 != 0){
    console.log('Buzz')
  } else{
    console.log(num)
  }
}

// ## Problem Seven

// Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).

for(num = 1; num <= 100; num ++){
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

// ## Problem Eight
var bottles;
for (counter = 99; counter >= 1; counter = counter - 1) 
{
    if (counter == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(counter + " " +bottles + " of beer on the wall.");
    
    if (counter < 99) {
    console.log(counter+" "+bottles+" of beer.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if (counter == 1) {
        console.log("No bottles of beer on the wall.");
    }
}
}
// ## Problem Nine

// ## Problem Ten

// Find the sum of all the multiples of 3 or 5 below 1000.

let sum = 0;
for (let i = 3; i < 10; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;}
}


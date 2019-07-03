// 1. Write a while loop and a for loop that takes the variable "num" and logs
// all the numbers, descending, between "num" and 1.
//
let num = 20; // will display 19 to 2

// started with the for loop first to don't have to reaffect num again
for (let i = num - 1; i > 1; i--){
  console.log(i);
}
console.log("----------------------------------------- \n");

while (num > 2){
  num --;
  console.log(num);
}
console.log("----------------------------------------- \n");


// 2. Write a while loop and a for loop that takes the variable "num", and
// iterates over all numbers from 0 to "num". For each iteration, it will check
// if the current number is even or odd, and log that to the screen
// (e.g. "2 is even")
//
num = 20;

for (i = 0; i <= num; i ++){
  if (i % 2 === 0){
    console.log(i, " is even");
  } else console.log(i, " is odd");
}
console.log("----------------------------------------- \n");

let a = num;
while (num >= 0){
  if (num % 2 === 0){
    console.log(a - num, " is even");
  } else console.log(a - num, " is odd");
num --;
}
console.log("----------------------------------------- \n");


// 3. Write a while loop and a for loop that takes the variable "num" and iterates
// over all numbers from 0 to "num". For each iteration of the loop, it will
// multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

num = 10;

for (let i = 0; i <= num; i ++){
  console.log(i, " * 9 = ", i*9);
}
console.log("----------------------------------------- \n");

a = num;
while (num >= 0){
  console.log(a-num, " * 9 = ", (a-num)*9);
  num --;
}
console.log("----------------------------------------- \n");


// Bonus think of another way to solve it.
//
num = 10;
let mult = 9

for (let i = 0; i <= (num * mult); i+=mult){
  console.log(i);
}
console.log("----------------------------------------- \n");


// 4. Write code that prints/logs all the numbers that end in a 5 from 1 to 100, exclusive.
for (let i = 5; i <= 95; i +=5)
console.log(i);
console.log("----------------------------------------- \n");

// Without running/executing your code, how many times will the loop below run? Explain why.
//
// let i = 5;
//
// while (i > 3) {
//     i += 1
// }
//
//  Your explanation here
// It's an infinit loop because i stats with 5 and it's compared to 3
// (if it's greater then 3) then it's incremented by 1 so it's always greater then 3

//
// 6. Write a loop that uses console.log to log all the numbers from 1 to 100,
// with two exceptions. For numbers divisible by 3, log "Fizz" instead of
// the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
//
let num1 = 100;

for (let i = 1; i <= num1; i++){
  if (i % 3 === 0){
    console.log("Fizz");
  } else if (i % 5 === 0 && i % 3 !== 0){
    console.log("Buzz");
  } else console.log(i);
}
console.log("----------------------------------------- \n");


// 7. Modify your program to log "FizzBuzz", for numbers that are divisible
// by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).
//
for (let i = 1; i <= num1; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  } else if (i % 3 === 0){
    console.log("Fizz");
  } else if (i % 5 === 0){
    console.log("Buzz");
  } else console.log(i);
}
console.log("----------------------------------------- \n");


// Bonus1:
// Write a program that would log the lyrics of the song 99 Bottles of Beer. This is the first verse of the song:
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
//
let lyricsNum = 5; // did it for just 5 for an easier display

for (i = lyricsNum; i >= 1; i--){
  switch (i){
    case 1:
      console.log("1 bottle of beer on the wall, 1 bottle of beer.\n",
                  "Take one down, pass it around, No more bottle of beer on the wall.\n \n");
    break;
    case 2:
      console.log("2 bottles of beer on the wall, 2 bottles of beer.\n",
                  "Take one down, pass it around, 1 bottle of beer on the wall.\n \n");
    break;
    default: console.log(i, " bottles of beer on the wall, ", i, " bottles of beer.\n",
                          "Take one down, pass it around, ", i-1, " bottles of beer on the wall.\n \n");
  }
}
console.log("----------------------------------------- \n");


// Bonus2 :
// Use the assignGrade function (given below). Write a function that logs each
// number from 60 - 100 along with its corresponding letter score. Exp For each
// number from 81 to 90, log B, like so:
//
// 60 - F
// ...
// 81 - B
// 82 - B
// 83 - B
// ...
// 93 - A
// 94 - A
// ...
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
    }
}
//  Hint

for (let i = 60; i <= 100; i++){
  console.log("The score ", i, " is grade :", assignGrade(i));
}
console.log("----------------------------------------- \n");

// Bonus3:
// Given an integer N draw a square of N x N asterisks.
let N = 5;
let ast = "";

for (let i = 1; i <= N; i++){
  ast += "* ";
}
  for (let j = 1; j <= N; j++){
      console.log(ast);
}
console.log("----------------------------------------- \n");

// Bonus4:
// Multiplication table with only two loops
for (let i = 1; i <= 10; i++){
  console.log(i, "Multiplication table \n");
  for (let j = 1; j <= 10; j++){
    console.log(i, " x ", j, " = ", i*j);
  }
}

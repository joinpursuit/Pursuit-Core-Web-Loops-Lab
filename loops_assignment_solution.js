// # Loop Exercises

// 1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.

//ASSUMING ALL POSITIVE INTEGERS FOR num AND EXCLUDING num ans 1 in the log;
console.log("Prob 1: while loop");
let num = 10;
while (num >= 3) {
  console.log(num-1);
  num --;
}

console.log("Prob 1: for loop");
let numA = 10;
for(let i=numA; i>2; i--){
    console.log(i-1);
}

// 2. Write a `while` loop and a `for` loop that takes the variable "num", and iterates over all numbers from 0 to "num".
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

console.log("Prob 2: for loop");
let numB = 10;
for (let i = 0; i<=numB; i++) {
    if(i%2 === 0){
        console.log(i + " is even");
    }else{
        console.log(i + " is odd");
    }
}

console.log("Prob 2: while loop");
let numC = 10;
let i = 0;
while(i<=numC){
    if(i%2 === 0){
        console.log(i + " is even");
    }else{
        console.log(i + " is odd");
    }
    i++;
}

// 3. Write a `while` loop and a `for` loop that takes the variable "num" and iterates over all numbers from 0 to "num". 
// For each iteration of the loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
console.log("Prob 3: for loop");
let numD = 12;
for (let i = 0; i<=numD; i++) {
    console.log(i + " * 9 = " + i*9);
}

console.log("Prob 3: while loop");
let numE = 10;
let j = 0;
while(j<=numE){
    console.log(j + " * 9 = " + j*9);
    j++;
}
// _Bonus_ think of another way to solve it. 
console.log("Prob 3: Bonus");
let numF = 10;
for (let k = 0; k<=numF*9; k+=9) {
    console.log(k/9 + " * 9 = " + k);
}

// 4. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
console.log("Prob 4")
for(let i=1; i<=100; i++){
    if(i % 3 === 0){
        console.log("Fizz");
    }else if(i % 5 === 0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}

// 5. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).
console.log("Prob 5")
for(let i=1; i<=100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if(i % 3 === 0){
        console.log("Fizz");
    }else if(i % 5 === 0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}

// Bonus: 

// 1. Write a program that would log the lyrics of the song 99 Bottles of Beer. This is the first verse of the song:

// 99 bottles of beer on the wall,

// 99 bottles of beer.

// Take one down, pass it around,

// 98 bottles of beer on the wall.

// This verse is repeated, each time with one less bottle, until the number of bottles is 0. When the number of bottles is 2, the verse is:

// 2 bottles of beer on the wall,

// 2 bottles of beer.

// Take one down, pass it around,

// 1 bottle of beer on the wall.

// In the last line, the word bottles (plural), is  replaced with bottle (singular)

// When the number of bottles is 1, the verse is:

// 1 bottle of beer on the wall,

// 1 bottle of beer.

// Take one down, pass it around,

// No more bottle of beer on the wall.
console.log("####Bonus Prob 1: 99 bottles of beer ####");

for (let i=99; i>0; i--){
    let pluralForm = i > 1 ? "bottles" : "bottle";
    console.log(i + " " + pluralForm + " of beer on the wall,");
    console.log(i + " " + pluralForm + " of beer.");
    console.log("Take one down, pass it around,");
}
console.log("No more bottle of beer on the wall.");



// 2. Use the assignGrade function (given below). Write a function that logs each number from 60 - 100 along with its corresponding letter score.
// Exp For each number from 81 to 90, log B, like so:

console.log("####Bonus Prob 2: ####");

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

for(let i=60; i<=100; i++){
    console.log(i + " - " + assignGrade(i));
}











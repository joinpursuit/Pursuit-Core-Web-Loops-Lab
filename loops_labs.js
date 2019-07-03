// 1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, 
//descending, between "num" and 1.

let num =15;
let counter = num;

while(counter > 0) {
  console.log(counter);
  counter--;
}
console.log('----------');

for(let i = num; i > 0; i--) {
  console.log(i);
}

// Write a while loop and a for loop that takes the variable "max", and iterates over all numbers from 0 to "max". 
//For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

console.log('------------')

let max = 10;
let whileMax = max;
let counter2 = 0;

while(counter2 <= max ) {
  if(counter2 % 2 === 0){
    console.log(counter2 + ' is even.') 
  }
  else {
    console.log(counter2 + ' is odd.')
  }
  counter2++;
}

console.log('------------');

for(let i = 0; i <= max; i++){
   if(i % 2 === 0){
    console.log(i + ' is even.') 
  }
  else {
    console.log(i + ' is odd.')
  }
}

console.log('--------------')
//Write a while loop and a for loop that takes the variable "x" and iterates over all numbers from 0 to "x". 
//For each iteration of the loop, it will multiply the number of "x" by 9 and log the result (e.g. "2 * 9 = 18"). 
//Bonus think of another way to solve it.

let x = 15;
let xCounter = 0;

while(xCounter <= x) {
  console.log(xCounter + ' * 9 = ' + (xCounter * 9));
  xCounter++;
}

console.log('------------');

for(let i = 0; i <= x; i++) {
  console.log(i + ' * 9 = ' + (i * 9));
}

console.log('------------');

//Write code that prints/logs all the numbers that end in a 5 from 1 to 100, exclusive.

let yMax = 100;
let yCounter = 1;

while(yCounter <=yMax) {
  if(yCounter % 5 === 0 && !(yCounter % 10 === 0)) {
    console.log(yCounter);
  }
  yCounter++;
}

// Without running/executing your code, how many times will the loop below run? Explain why.

// let i = 5;

// while (i > 3) {
//     i += 1
// }

// Your explanation here
//Forever. This code will eventually crash the system and make the computer run out of memory. The reason why is because 
// the condition that the loop is based on is never fulfilled. i will never be less than 3 so it will never stop.

//---------------------------------------------------------------------------------------------------------------------------


//Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions.
//For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), 
//log "Buzz" instead.

for(let i = 1; i <= 100; i++) {
  if(i % 3 === 0) {
    console.log('Fizz');
  }
  else if(i % 5 === 0) {
    console.log('Buzz');
  }
  else{
    console.log(i);
  }
}

console.log('------------------');

//Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz"
// for numbers divisible by only one of those).

for(let i = 1; i <= 100; i++) {
  if(i % 15 === 0) {
    console.log('FizzBuzz')
  }
  else if(i % 3 === 0) {
    console.log('Fizz');
  }
  else if(i % 5 === 0) {
    console.log('Buzz');
  }
  else{
    console.log(i);
  }
}

console.log('------------------');
//Write a program that would log the lyrics of the song 99 Bottles of Beer. This is the first verse of the song:
 

 for(let i = 99; i > 0; i --) {
  if(i === 2) {
    console.log('2 bottles of beer on the wall, 2 bottles of beer.Take one down, pass it around, 1 bottle of beer on the wall.');
  }
  else if(i === 1) {
    console.log('1 bottle of beer on the wall, 1 bottle of beer.Take one down, pass it around, No more bottle of beer on the wall.')
  }
  else {
    console.log(i + ' bottles of beer on the wall, ' + i +  ' bottles of beer.Take one down, pass it around, ' 
     +(i - 1) + ' bottles of beer on the wall.');
  }
 }

 console.log('----------------------');


//Use the assignGrade function (given below). Write a function that logs each number from 60 - 100 along with
// its corresponding letter score. Exp For each number from 81 to 90, log B, like so:

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

for(let i = 60; i < 100; i++){
  console.log(i + ' - ' +  assignGrade(i))
}

console.log('-------------------');
//Given an integer N draw a square of N x N asterisks. Look at the examples.


let asterisks =  '';
let n = 2  ;

for(let i = 0; i < n; i++) {
  asterisks += '*';
}

for(let i = 0; i < n; i++) {
  console.log(asterisks);
}


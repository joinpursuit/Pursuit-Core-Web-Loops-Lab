// a. Write a `while` loop that takes the variable `num` and logs all the numbers, descending, between "num" and 1
let num = 6

while (num >= 1) {
    console.log(num);
    num --;
}
//b. Write a `for` loop that takes the variable `num` and logs all the numbers, descending, between "num" and 1

for (let num = 6; num >= 1; num --) {
    console.log(num)
}

// ## Problem Two

// a. Write a `while` loop that takes the variable "max", and iterates over all numbers from 0 to "max". 
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

let max = 20
let x = 0

while (x <= max) {
    if (x % 2 === 0) {
        console.log(x + " this is even")
    } else {
        console.log(x + " this is odd")
    } x ++;
}

//b. Use a `for` loop instead

for (x; x <= max; x ++) {
    if (x % 2 === 0) {
        console.log(x + " this is even")
    } else {
        console.log(x + " this is odd")
    }
}

//Problem 3
//a. Write a `while` loop that takes the variable "x" and iterates over all numbers from 0 to "x". For each iteration of the loop, it will multiply the number of "x" by 9 and log the result 
let x1 = 8
let y = 0

while (y <= x1) {
    console.log(y * 9);
    y ++
}

//b
for (y; y <=x1; y++) {
    console.log(y * 9)
}

//Problem 4 
//Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.
let i = 1

for (i; i <= 100; i++) {
    if (i % 5 === 0 && i % 2 !== 0) {
        console.log(i)
    }
}


//Problem 5
// Without running/executing your code, how many times will the loop below run? Explain why.
// ```js
// let i = 5;

// while (i > 3) {
//     i += 1
// }

//This loop will run forever, because the starting postion is at 5 while the condition only require for i to be greater than 3. Thus, if i is being incremented by 1, every number growing from 5 will be greater than 3, causing a infinite loop.

//Problem 6 Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.

let z = 1
for (z; z <= 100; z++) {
    if (z % 3 === 0 && z % 5 === 0) {
        console.log("FizzBuzz")
    }if (z % 3 === 0) {
        console.log("Fizz")
    } else(z % 5 === 0 );{
        console.log("Buzz")
    }
}

//Problem 7 Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).

//Problem 8 Write a program that would log the [lyrics of the song 99 Bottles of Beer]

let bottles = 99
for (bottles; bottles >= 0; bottles--) {
    if (bottles > 1) {
        console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer.
        Take one down, pass it around, " + (bottles-1) +  " bottles of beer on the wall.")
    }
}

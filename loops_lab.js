//Problem Set 1
//a. Write a `while` loop that takes the variable `num` and
// logs all the numbers, descending, between "num" and 1
let num = 5;

while ( num >= 1) { 
    console.log("the number is: " + num)
    num -= 1
}

// b. Write a `for` loop that takes the variable `num`
// and logs all the numbers, descending, between "num" and 1


for (let num2 = 10; num2 >= 1; num2 -= 1){

    console.log ("The number is: "+num2);
};

// Problem Set 2
//a. Write a `while` loop that takes the variable "max", and iterates over all numbers from 0 to "max". 
//For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")
let max = 8

let counter = 0


while (counter <= max) {
    if (counter%2 === 0){
    console.log(counter + " is even")
    } else[
        console.log(counter + " is odd")
    ]
        counter += 1

}

// b. Use a `for` loop instead.

let max2 = 10

for (let counter2 = 0;counter2 <= max; counter2 += 1){

    if (counter2 % 2 === 0){
        console.log(counter2 + " is even")
        } else[
            console.log(counter2 + " is odd")
        ]
}

// Problem Set 3
//a. Write a `while` loop that takes the variable "x" and iterates over all numbers 
//from 0 to "x". For each iteration of the loop, it will multiply the number of "x" 
//by 9 and log the result 

let y = 0;
let x = 9;

while (y <= x) {

    console.log(y + " * 9 =" + y * 9)

    y += 1
}

//b. Use a `for` loop instead.

let y2 = 9

for(let x2 = 0; x2 >= y2; x2++ ){

    console.log(y + " * 9 =" + y * 9)

}

//Problem Set 4
//Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.

for (let numNum = 5; numNum <=100; numNum += 10 ){
        
    
        console.log(numNum)
}

//Problem Set 5
//Without running/executing your code, how many times will the loop below run? 
//Explain why.

//let i = 5;

//while (i > 3) {
 //   i += 1
//}

//It will run forever because i is always larger than 3.

//## Problem Six
//Write a loop that uses console.log to log all the numbers from 1 to 100, 
//with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, 
//and for numbers divisible by 5 (and not 3), log "Buzz" instead.

for (let number = 1; number <= 100; number ++){
if (number %3===0){
    console.log("Fizz") 
} if (number %5===0 && number %3!==0) {

    console.log("Buzz")
} else {
    console.log(number)
}

}

//## Problem Seven
//Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 
//(still log "Fizz" or "Buzz" for numbers divisible by only one of those).

for (let number = 1; number <= 100; number ++){
    if (number %3===0 && number %5===0){
        console.log("FizzBuzz")
    } else if (number %3===0){
        console.log("Fizz") 
    } else if (number %5===0 && number %3!==0) {
        console.log("Buzz")
    } else {
        console.log(number)
    }
}

// ## Problem Eight

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

let a = 99

while (a >= 1){

if (a===1){
console.log("1 bottle of beer on the wall, 1 bottle of beer. Take one down, pass it around, No more bottle of beer on the wall.")
}else{
console.log (a + " bottles of beer on the wall, "+a+" bottles of beer. Take one down, pass it around "+(a-1)+"bottles of beer on the wall.")
}
a-=1

}


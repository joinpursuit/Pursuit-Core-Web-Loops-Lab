# Loop Exercises

1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.

// while loop
let num = 17
while (num >= 2) {
 console.log(num)
 num -= 2
}

//for loop
for (let num = 17; num >= 1; num -= 1) {
 console.log(num)
}



2. Write a `while` loop and a `for` loop that takes the variable "num", and iterates over all numbers from 0 to "num".
For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

//while loop
let num = 48
while (num >= 0 ) {
 if (num%2===0) {console.log(num + " is even");} else{ console.log(num + " is odd");} num--
}


//for loop
for (let num = 48; num>=0; num--) {
 if (num % 2 === 0) {
   console.log(num + " is even")
 } else {
   console.log(num + " is odd")
 }
}


3. Write a `while` loop and a `for` loop that takes the variable "num" and iterates over all numbers from 0 to "num".
For each iteration of the loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

//while Loop

let num = 1
while (num <= 10){
 console.log(`${num}* 9 = ${num * 9}`)
 num++
}

//for loop
for (let num = 1; num <= 10; num++){
 console.log(`${num}* 9 = ${num * 9}`)
}


_Bonus_ think of another way to solve it.
  <details>
    <summary>
      Hint
    </summary>
    Find the final number and increment the loop by 9.
  </details>

4. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.

//for Loop
let num = 1
while (num <= 100){
 if (num % 3 === 0){
   console.log("Fizz")
 } else if (num % 5 === 0){console.log("Buzz")
} else {console.log (num)}
 num++
}

//for Loop
for (num = 1; num <= 100; num++){
 if (num % 3 === 0){
   console.log("Fizz")
 } else if (num % 5 === 0) {
   console.log("Buzz")
 } else {console.log (num) }

}


5. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).

for (num = 1; num <= 100; num++){
 if (num % 3 === 0 && num % 5 === 0 ){
   console.log("FizzBuzz")
 }
 else if (num % 3 === 0){
   console.log("Fizz")
 } else if (num % 5 === 0) {
   console.log("Buzz")
 } else {console.log (num) }

}

Bonus:

1. Write a program that would log the lyrics of the song 99 Bottles of Beer. This is the first verse of the song:

99 bottles of beer on the wall,

99 bottles of beer.

Take one down, pass it around,

98 bottles of beer on the wall.

This verse is repeated, each time with one less bottle, until the number of bottles is 0. When the number of bottles is 2, the verse is:

2 bottles of beer on the wall,

2 bottles of beer.

Take one down, pass it around,

1 bottle of beer on the wall.

In the last line, the word bottles (plural), is  replaced with bottle (singular)

When the number of bottles is 1, the verse is:

1 bottle of beer on the wall,

1 bottle of beer.

Take one down, pass it around,

No more bottle of beer on the wall.

for (let num = 99; num >= 1; num-- ) {
 if(num === 1) {
   console.log (`${num} bottle of beer on the wall,
${num} bottle of beer.
Take one down, pass it around,
No more bottle of beer on the wall.`
)
 }

else {console.log(
  `
${num} bottles of beer on the wall,
${num} bottles of beer.
Take one down, pass it around,
${num} bottles of beer on the wall. `
)}
}

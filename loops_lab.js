// 1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.
//
let num = 15;

while (num >= 1){
  console.log(num);
  num -= 1;
}

console.log("*****");

for(let x = 15; x >=1; x -=1){
  console.log(x);
}

console.log("-------------  ");
//
// 2. Write a `while` loop and a `for` loop that takes the variable "max", and iterates over all numbers from 0 to "max".
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

let  max = 0

while (max <= 40){
  max += 1
  if( max % 2 === 1 ){
    console.log(max + " is odd");
  } else {
    console.log(max + " is even ");
  }

}

console.log("*****");

for(let max2 = 1; max2 <= 40; max2 += 1){
  if( max2 % 2 === 1 ){
    console.log(max2 + " is odd");
  } else {
    console.log(max2 + " is even ");
  }
}

console.log("--------------");

// Write a `while` loop and a `for` loop that takes the variable "x" and iterates over all numbers from 0 to "x".
// For each iteration of the loop, it will multiply the number of "x" by 9 and log the result (e.g. "2 * 9 = 18").
//   _Bonus_ think of another way to solve it.
//     <details>
//       <summary>
//         Hint
//       </summary>
//       Find the final number and increment the loop by 9.
//     </details>

  x = 1
  while (x <=10){
      console.log( x + " * 9 = " + (x * 9));
      x++
}

console.log("*****");

for(let y = 1 ; y <= 10; y++){
    console.log( y + " * 9 = " + (y * 9) );
  }

console.log("--------------");

// Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.
//
let a = 0
while (a <= 9) {
    console.log( a + "5");
    a++
}

// // 5. Without running/executing your code, how many times will the loop below run? Explain why.
// //
// // ```js
// // let i = 5;
// //
// // while (i > 3) {
// //     i += 1
// // }
//
// //this will run without end.  the code says while i is greater than 3.
//

// 6. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3,
// log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.

b = 3;

while (b < 100){
  if (b % 3 === 0){
    console.log("Fizz");
} else (b % 5 === 0)
  console.log("Buzz");

    b++
}

// 7. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers
// divisible by only one of those).

b = 3;

while (b < 100){
  if (b % 3 === 0 && b % 5 === 0){
    console.log("FizzBuzz");
}
    b++
}
//
// Write a program that would log the [lyrics of the song 99 Bottles of Beer](http://www.99-bottles-of-beer.net/lyrics.html). This is the
// first verse of the song:
//
//   99 bottles of beer on the wall, 99 bottles of beer.
//   Take one down, pass it around, 98 bottles of beer on the wall.
//  ```

  let BEER = 99;

  while ( BEER >= 1 ){
      console.log(BEER + " bottles of bottles on the wall," +BEER+ "bottles of beer. Take one down, pass it around, " +
    (BEER -= 1) + " bottles of beer on the wall.");
    BEER -= 1;
}

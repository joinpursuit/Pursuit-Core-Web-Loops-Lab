// ## Exercises
//
// 1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.
 let num = 10;

 while(num >=1 ){
   console.log(num)
   num -=1
 }

 console.log("-------")

 for (let num = 20; num >= 1; num -= 1 ){
   console.log(num)
 }

console.log("-------")
// 2. Write a `while` loop and a `for` loop that takes the variable "max", and iterates over all numbers from 0 to "num".
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

for ( let max = 0 ; max <=  14 ; max +=1) {
  if (max % 2 !== 0) {
  console.log(max + " is odd")
} else {
    console.log(max + " is even")
  }
}

console.log("------")

// while loop
let max = 0 ;
while( max <= 15){
    if (max % 2){
      console.log(max + " is odd")
    } else if ( max % 2 === 0) {
        console.log(max + " is even")
        }
    max ++
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

let num3 =0;
while (num3 <= 20) {
    console.log(num3 * 9)
 num3 ++
}

console.log("-------")

for(let num3 = 0 ;num3 <= 25; num3 ++) {
    console.log(num3 * 9)
}

console.log("-------")
//4. Write code that prints/logs all the numbers that end in a 5 from 1 to 100, exclusive.
     for (let count5 =1; count5 <=100; count5 += 1){
          if ((count5 % 5 === 0) && (count5 % 10)){
              console.log(count5)
            }
     }
console.log("-------")
//5.Without running/executing your code, how many times will the loop below run? Explain why.

// let i = 5;
//
// while (i > 3) {
//     i += 1
// }

// Your explanation here
   // the loop will perform only twice since i is set at the limit of 5 and the loop starts at 3


// 6. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
// console.log( "---------")

for (let i = 0; i <= 100; i ++){
  if ( i % 3 === 0){
    console.log("Fizz")
  } else if ( i % 5 === 0 && i % 3 ){
      console.log( "Buzz")
  } else {
      console.log(i)
  }
}

console.log("-------")
// 7. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).
//console.log( "---------")

for ( let i = 0; i <= 100; i ++){
  if ( i % 3 === 0){
    console.log("Fizz")
  } else if ( i % 5 === 0){
      console.log( "Buzz")
  } else {
      console.log(i)
  }
  if ( (i % 3 ===0 ) && (i % 5 ===0)){
    console.log("FizzBuzz")
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


for ( let beerBottles= 99; beerBottles >=0; beerBottles -=1) {
    if (beerBottles !== 0 ){
      console.log( beerBottles + " bottles of beer on the wall, " + beerBottles + " bottles of beer.")
      console.log(" Take one down and pass it around, " + beerBottles + " bottles of beer on the wall. \n")
    } else {
      console.log("No more bottles of beer on the wall, no more bottles of beer.")
      console.log("Go to the store and buy some more, " + beerBottles + " bottles of beer on the wall.")
    }
  }


//___
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
// ```
// <details>
// <summary>
//   <b>Hint</b>
// </summary>
//   Explore this:

for (let score = 60; score <= 100; score ++){
       console.log(score + " - " + assignGrade(score))
}

//3. Given an integer N draw a square of N x N asterisks. Look at the examples.




//   ```js
  // let grade = assignGrade(80)
  // console.log(grade)
//   ```
//   What is happening here? Can you explain it?
// the the function assignGradeis being called and the value 80 is being placed insde as the score as, the program
// is then checking 80 asgainst the if loop comnditionals and printing out the letter grade associated with it

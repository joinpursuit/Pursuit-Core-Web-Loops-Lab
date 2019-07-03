// // # Loops Lab
// //
// // To complete this lab, do the following:
// //
// // 1. Fork this repo
// // 2. Clone **your** forked repo
// // 3. Create a file called `loops_lab.js` inside your cloned repo
// // 4. Copy the description of the exercise as a comment
// // 5. Underneath the commented description write your code.
// // 6. Ensure your solutions work properly!
// // 7. Open PR against this repo.
// //
// // ___
// //
// // ## Exercises
// //
// // 1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.

//descending variable with while loop
let num = 44;
while (num >=1){
  console.log(num);
  num--;
}

// descending variable with for loop (used different var for same numbers)
for(let x = 44; x >= 1; x --){
  console.log(x);
}


// // 2. Write a `while` loop and a `for` loop that takes the variable "num", and iterates over all numbers from 0 to "num".
// // For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

// while loop with iteration
let o = 11;
while(o >= 1 ){
  if(o % 2 === 0){
    console.log(o + ' is even.');
  } else {
    console.log(o + ' is odd.');
  }
  o--;
}

// //for loop with iteration
for(let i = 11; i >= 1; i--){
  if(i % 2 === 0){
    console.log(i + ' is even.')
  } else {
    console.log(i + ' is odd.')
  }
}

// // 3. Write a `while` loop and a `for` loop that takes the variable "num" and iterates over all numbers from 0 to "num".
// // For each iteration of the loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

while iteration
let num = 1;
let it = 9;
while(num <= 19){
  let sol = num * it;  // my table mates helped me figure out the fact that we needed an additional let inside the while loop to solve the iteration.
  console.log(num + ' * 9 = ' + sol);
  num++;
}

// for iteration
for(let y = 1, z = 9; y <= 19; y++){
  let res = y * z;
  console.log(y + ' * 9 = ' + res);
}

// _Bonus_ think of another way to solve it.
//     <details>
//       <summary>
//         Hint
//       </summary>
//       Find the final number and increment the loop by 9.
//     </details>

// 4. Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.

for (num = 0; num <= 100; num+=5){ // class mates helped me figure the increment value to make them go up by 5.
  if (num % 2 === 0){
  } else{
      console.log (num);
  }
}

// 5. Without running/executing your code, how many times will the loop below run? Explain why.
//
// ```js
let i = 5;

while (i > 3) {
    i += 1
}
// //
// // // Your explanation here
``` the code would not print anything because there is no console.log in the curly brackets.
// ```

// 6. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
//
for(let x = 1; x <= 100; x++){
  if(x % 3 === 0){
    console.log('Fizz');
  } else if ( x % 5 === 0){
    console.log('Buzz');
  } else {
    console.log(x);
  }
}

// // 7. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).

for(let x = 1; x <= 100; x++){
  if(x % 3 === 0 && x % 5 === 0){
    console.log('FizzBuzz');
  } else if ( x % 5 === 0){
    console.log('Buzz');
  } else if ( x % 3 === 0 ){
    console.log('Fizz')
  }else {
    console.log(x);
  }
}

// // ### Bonus:
// //
// // 1. Write a program that would log the [lyrics of the song 99 Bottles of Beer](http://www.99-bottles-of-beer.net/lyrics.html). This is the first verse of the song:
// //
// //   ```
// //   99 bottles of beer on the wall, 99 bottles of beer.
// //   Take one down, pass it around, 98 bottles of beer on the wall.
// //   ```
// //
// //   This verse is repeated, each time with one less bottle, until the number of bottles is 0. When the number of bottles is 2, the verse is:
// //
// //   ```
// //   2 bottles of beer on the wall, 2 bottles of beer.
// //   Take one down, pass it around, 1 bottle of beer on the wall.
// //   ```
// //
// //   In the last line, the word bottles (plural), is  replaced with bottle (singular)
// //
// //   When the number of bottles is 1, the verse is:
// //
// //   ```
// //   1 bottle of beer on the wall, 1 bottle of beer.
// //   Take one down, pass it around, No more bottle of beer on the wall.
// // //   ```
let init = 4;
let fin = 1;
let dinit = init - fin;
while(init > 0){
    console.log(init + ' bottle of beer on the wall,' + init + 'bottle of beer. Take one down, pass it around,' + dinit + ' bottles of beer on the wall.')
    init = init - 1
    if (init > 1){
      console.log(init + ' bottle of beer on the wall,' + init + 'bottle of beer. Take one down, pass it around,' + dinit + ' bottles of beer on the wall.')
      init = init -1
    }
  }
  init --
// I am going to continue working on this...

// // ___
// //
// // 2. Use the `assignGrade` function (given below). Write a function that logs each number from 60 - 100 along with its corresponding letter score.
// // Exp For each number from 81 to 90, log B, like so:
// //
// // ```js
// // 60 - F
// // ...
// // 81 - B
// // 82 - B
// // 83 - B
// // ...
// // 93 - A
// // 94 - A
// // ...
// // ```
//
//
// //
// // ```js
// // function assignGrade(score) {
// //     if (score > 90) {
// //         return 'A';
// //     } else if (score > 80) {
// //         return 'B';
// //     } else if (score > 70) {
// //         return 'C';
// //     } else if (score > 65) {
// //         return 'D';
// //     } else {
// //         return 'F';
// //     };
// // };
// // ```
// // <details>
// // <summary>
// //   <b>Hint</b>
// // </summary>
// //   Explore this:
// //
// //   ```js
// //   let grade = assignGrade(80)
// //   console.log(grade)
// //   ```
// //   What is happening here? Can you explain it?
// // </details>

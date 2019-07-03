//1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.
let num = 15
while (num <= 15 && num > 0){
  console.log(num);
  num -=1;
}

for(let num = 15; num <= 15 && num > 0; num -=1){
  console.log(num);
}

// 2. Write a `while` loop and a `for` loop that takes the variable "max", and iterates over all numbers from 0 to "max".
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")
let max = 0;
while (max <= 88){
  if(max % 2 === 0){
    console.log(max + " is even.");
  }
if(max % 2 !== 0){
    console.log(max + " is odd.");
  }
max++;
}

for(let max = 0; max <= 88; max ++){
  if(max % 2 === 0){
    console.log(max + " is even.");
  }
  if(max % 2 !== 0){
    console.log(max + " is odd.");
  }
}

// 3. Write a `while` loop and a `for` loop that takes the variable "x" and iterates over all numbers from 0 to "x".
// For each iteration of the loop, it will multiply the number of "x" by 9 and log the result (e.g. "2 * 9 = 18").
let x = 0;
while (x <= 108){
  console.log(x);
  x +=9;
}

for(let x = 0; x <= 108; x +=9){
  console.log(x);
}

// 4. Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.
for (let y = 1; y <= 100; y ++){
  if(y % 5 ===0 && y % 10 !== 0){
    console.log(y)
  }
};


// 5. Without running/executing your code, how many times will the loop below run? Explain why.
// ```js
// let i = 5;
//
// while (i > 3) {
//     i += 1
// }

// The loop will run infinitely because it wasn't given a limit to stop at.


// 6. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.

let b = 1
while (b <=100){
  if(b % 3 === 0){
    console.log("Fizz")
  }
  if(b % 5 === 0 && b % 3 !== 0){
    console.log("Buzz")
  } else {
    console.log(b)
  }
  b ++
}

// 7. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5
// (still log "Fizz" or "Buzz" for numbers divisible by only one of those).

let c = 1
while (c <= 100){
  if(c % 5 === 0 && c % 3 === 0){
    console.log("FizzBuzz " + c)
  }
  else if(c % 5 === 0 && c % 3 !== 0){
    console.log("Buzz " + c)
  }
  else if (c % 3 === 0){
    console.log("Fizz" + c)
  } else {
    console.log(c)
  }
  c ++
}

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
//   ```

let d = 99
while (d > 0){
  if (d === 1){
    console.log(d + " bottle of beer on the wall, " + d + " bottle of beer. Take one down, pass it around, no more bottle of beer on the wall.")
  } else if (d === 2){
    console.log(d + " bottles of beer on the wall, " + d + " bottles of beer. Take one down, pass it around, " + (d-1) + " bottle of beer on the wall.")
  } else {
  console.log(d + " bottles of beer on the wall, " + d + " bottles of beer. Take one down, pass it around, " + (d-1) + " bottles of beer on the wall.")
}
  d -=1
}


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
// function assignGrade(score) {
//     if (score > 90) {
//         return 'A';
//     } else if (score > 80) {
//         return 'B';
//     } else if (score > 70) {
//         return 'C';
//     } else if (score > 65) {
//         return 'D';
//     } else {
//         return 'F';
//     };
// };
// ```
// <details>
// <summary>
//   <b>Hint</b>
// </summary>
//   Explore this:
//
//   ```js
//   let grade = assignGrade(80)
//   console.log(grade)
//   ```
//   What is happening here? Can you explain it?
// </details>

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

let grade = 100
while (grade >= 60){
  console.log("Your grade is " + grade + " which is a " + (assignGrade(grade)))
  grade --;
}

// 1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.
let num = 20;
//descending 20 to 1
while(num >= 1) {
  console.log(num);
  num--;
}

num = 20; //had to reinitialize because the num-- went to zero in the while loop
for (let i = 20; i >= 1; i--) {
  console.log(i);
}


// 2. Write a `while` loop and a `for` loop that takes the variable "max", and iterates over all numbers from 0 to "max".
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")
let max = 50;
let start = 0;
while(start <= max) {
  if(start % 2 === 0) {
    console.log(start + " is even");
  } else if(start % 2 === 1) {
    console.log(start + " is odd");
  }
  start++;
}

max = 50;
start = 0;
for(let i = 0; i <= max; i++) {
  if(start % 2 === 0) {
    console.log(i + " is even");
  } else if(start % 2 === 1) {
    console.log(i + " is odd");
  }
}




// 3. Write a `while` loop and a `for` loop that takes the variable "x" and iterates over all numbers from 0 to "x".
// For each iteration of the loop, it will multiply the number of "x" by 9 and log the result (e.g. "2 * 9 = 18").
//   _Bonus_ think of another way to solve it.
//     <details>
//       <summary>
//         Hint
//       </summary>
//       Find the final number and increment the loop by 9.
//     </details>
//variable x and iterate over all numbers 0 to x;
let x = 5;
let a = 0
while(x >= a) {
  console.log(a * 9);
  a++;
}

x = 5;
a = 0;

for(let i = 0; i <= 5; i++) {
  console.log(i * 9);
}


// 4. Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.

let var4 = 1;
while(var4 <= 100) {
  if(var4 === 5) {
    console.log(var4);
  }
  else if(var4 % 5 === 0 && var4 % 10 === 5) {
    console.log(var4);
  }
  var4++;
}


// 5. Without running/executing your code, how many times will the loop below run? Explain why.
//
// ```js
// let i = 5;
//
// while (i > 3) {
//     i += 1
// }
//
// // Your explanation here
//Infinite loop because I will always be greater than 3
//
// 6. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
let var6 = 1;
while(var6 <= 100) {
  if(var6 % 3 === 0) {
    console.log("Fizz")
  } else if(var6 % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(var6);
  }
  var6++;
}


// 7. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).
let var7 = 1;
while(var7 <= 100) {
  if(var7 % 3 === 0 && var7 % 5 === 0) {
    console.log("Fizzbuzz");
  } else if(var7 % 3 === 0) {
    console.log("Fizz")
  } else if(var7 % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(var7);
  }
  var7++;
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
//   ```
let bv1 = 99;
let last = 1
while(bv1 >= last) {
  if(bv1 !== last) {
    let temp = bv1;
    console.log(bv1 + " bottles of beer on the wall, " + bv1 + " bottles of beer. Take one down, pass it around, " + --temp + " bottles of beer on the wall.");
  } else if(bv1 === 1) {
    console.log("1 bottle of beer on the wall, 1 bottle of beer. Take one down, pass it around, No more bottle of beer on the wall.")
  }
  bv1--;
}

// ___
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
//
// ___
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

for(let i = 60; i <= 100; i++) {
  console.log(i + " is the letter grade: " + assignGrade(i) );
}


// 3. Given an integer N draw a square of N x N asterisks. Look at the examples.
//
// Example 1:
// Input: `let N = 2`
//
// Output:
// ```js
// **
// **
// ```
//
// Example 2:
// Input: `let N = 3`
//
// Output:
// ```js
// ***
// ***
// ***
// ```
//
// <details>
//   <summary>
//     Hint 1
//   </summary>
//   Try printing/logging a single line of * first.
// </details>
//
// <details>
//   <summary>
//     Hint 2
//   </summary>
//   You will need 2 loops for this.
// </details>
let bv3 = 5;

for(let i = 1; i <= bv3; i++) {
    let temp = 1;
    let star = ""
    while(temp <= bv3) {

      star += "* ";
      temp++;
    }
    console.log(star);
}

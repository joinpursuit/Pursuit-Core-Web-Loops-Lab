// // 1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.
let num = 50
while (num >= 1){
  console.log(num)
  num -=1
}
console.log ('----------------')
for (let num = 50; num >=1; num -=1){
  console.log(num)
}
// // //
// // // 2. Write a `while` loop and a `for` loop that takes the variable "max", and iterates over all numbers from 0 to "max".
// // // For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")
let max = 10
while (max <=10 && max >=0) {
  if (max %2 ===0){
    console.log(max + 'is even');
  } else if (max %2 !== 0){
    console.log(max +'is odd')
  }
  max -=1
}
console.log('------------')

for (let max=10;max<=10 && max>=0;max +=1){
  if (max %2 ===0){
    console.log(max +'is even');
  } else if (max %2 !==0) {
    console.log(max+'is odd');
  }
}
// // 3. Write a `while` loop and a `for` loop that takes the variable "x" and iterates over all numbers from 0 to "x".

//
//
// // For each iteration of the loop, it will multiply the number of "x" by 9 and log the result (e.g. "2 * 9 = 18").
// //   _Bonus_ think of another way to solve it.
// //     <details>
// //       <summary>
// //         Hint
// //       </summary>
// //       Find the final number and increment the loop by 9.
// //     </details>
let numw =5
while (numw <=5 && numw >=0){
  console.log(numw +' * 9 = '+ numw * 9 )
  numw -=1
}
console.log ('---------------')

for (let num =5; num <=5 && num >=0;num -=1){
  console.log(num + ' * 9 = ' + num * 9)

// }
// // // 4. Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.
for (let d =1; d<=100 && d>=1; d +=1){
  if (d%5===0 && d%2 ===1)
  console.log(d)
}
//
for (let i =5; i<=100; i+=10){
  console.log(i)
}
// // 5. Without running/executing your code, how many times will the loop below run? Explain why.
// //
// // ```js
// // let i = 5;
// //
// // while (i > 3) {
// //     i += 1
// // }
// //
console.log("If you were to run the code above it will never stop because the variable i will always be greater than 3. The condition only states if i is greater than 3 continue to log it and +1.")
// // ```
// //
// // 6. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
let r = 1
while (r>=1 && r <=100){
  if (r %3 ===0){
    console.log('fizz');
  } else if (r % 5 ===0){
    console.log('buzz');
  } else {
    console.log(r);
  }
  r +=1
}
// // // 7. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).
let e =1
while (e >=1 && e <=100){
  if (e % 3 ===0 && e %5 ===0){
    console.log('FizzBuzz');
  } else if (e %3===0){
    console.log('Fizz');
  } else if (e %5===0){
    console.log('Buzz');
  } else {
    console.log(e)
  }
  e +=1
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
// //   ```
let amount = 10
let line1 = 'bottles of beer on the wall'
let line2 = "bottles of beer"
let line3 = "Take one down, pass it around"
let singular1= 'bottle of beer on the wall'
let singular2= 'bottle of beer'
let lastline= 'No more bottle of beer on the wall'
while(amount <=10 && amount >=0){
  if (amount <=10 && amount >=2){
    console.log(amount + ' ' + line1)
    console.log(amount + ' '+ line2)
    console.log(line3)
  } else if(amount ===1){
    console.log(amount + ' '+ singular1)
    console.log(amount + ' ' + singular2)
    console.log(line3)
  } else if (amount ===0){
    console.log(lastline)
  }
  amount -=1
}
// ___
// //
// // 2. Use the `assignGrade` function (given below). Write a function that logs each number from 60 - 100 along with its corresponding letter score.
// // Exp For each number from 81 to 90, log B, like so:
// //
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

for(let y = 60; y <=100 ; y+=1){
  console.log(assignGrade(y))
}
// ```

//
// __
// 3. Given an integer N draw a square of N x N asterisks. Look at the examples.
let u =3
while(u>=3 && u <= 10){
  console.log('*      *')
  u+=1
}
let n = 3;
let string = '';
for (let i = 0; i < n; i++){
  string += "*"
}
for (let j=0; j<n;j++){
  console.log(string)
}

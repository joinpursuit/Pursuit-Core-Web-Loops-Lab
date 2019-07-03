// 1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.

let num = 20
while(num > 0) {
  console.log(num);
  num--
}
console.log('-----------')
for(i = 20; i > 0; i--){
  console.log(i)
}

// 2. Write a `while` loop and a `for` loop that takes the variable "max", and iterates over all numbers from 0 to "max".
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")
console.log('-----------')

let max = 0
while(max >= 0 && max <= 10 ){
  if(max % 2 === 0){
    console.log(max + ' is even.')
  } else {
    console.log(max + ' is odd.')
  }
  max++
}

console.log('-----------')

for (maxx = 0; maxx >= 0 && maxx <= 10; maxx++ ){
  if (maxx % 2 === 0){
  console.log(maxx + ' is even')
}else {
  console.log(maxx +' is odd')
}
}

console.log('-----------')

// 3. Write a `while` loop and a `for` loop that takes the variable "x" and iterates over all numbers from 0 to "x".
// For each iteration of the loop, it will multiply the number of "x" by 9 and log the result (e.g. "2 * 9 = 18").
//   _Bonus_ think of another way to solve it.
//     <details>
//       <summary>
//         Hint
//       </summary>
//       Find the final number and increment the loop by 9.
//     </details>

let x = 0
while (x <= 20) {
  console.log('(' + x + '*9) is ' + x * 9)
  x++
}

console.log('-----------')

for(y = 0; y <= 10; y++){
  console.log('(' + y + '*9) is ' + y * 9);
}

console.log('-----------')

let numb = 0
while(numb < 50){
  console.log(numb)
  numb += 9
}

console.log('-----------')

for (numm = 0; numm < 50; numm += 9) {
  console.log(numm)
}

// 4. Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.
//I got help on this problem. I had all multiples of 5 and wasn't sure how to only get the ones that ended in 5. I now know that I had to use the !== operator to cancel out multiples of 10.
console.log('-----------')

let k = 1
while(k <= 100) {
  if(k % 5 === 0 && k % 10 !== 0){
    console.log(k)
  }
    k++
}

console.log('-----------')

for(k = 1; k <= 100; k += 1){
  if(k % 5 === 0 && k % 10 !== 0){
    console.log(k)
}
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
// ```

console.log('-----------')

console.log('The above program will run to infinity because it will keep adding 1 and that number will always be greater than 3. the code won\'t print anything because the above code doesn\'t log any code')


// 6. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.

console.log('-----------')

let mul = 1
while(mul <= 100){
  if(mul % 3 === 0){
    console.log(mul + ' Fizz')
  }else if(mul % 5 === 0){
  console.log(mul + ' Buzz')
  }else {
  console.log(mul)
  }
 mul++
}

console.log('-----------')

for(mul = 1; mul <= 100; mul++){
  if (mul % 3 === 0){
    console.log(mul + ' Fizz')
  }else if(mul % 5 === 0) {
  console.log(mul + ' Buzz')
  } else {
  console.log(mul)
  }
}

// 7. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).

console.log('-----------')

let mult = 1
while (mult <= 100){
  if (mult % 3 === 0 && mult % 5 === 0){
    console.log(mult + ' FizzBuzz')
  } else if (mult % 3 === 0){
    console.log(mult + ' Fizz');
  } else if (mult % 5 === 0){
    console.log(mult + ' Buzz')
  }else {
    console.log(mult)
  }
  mult ++
}

console.log('-----------')

for(mult = 1; mult <= 100; mult++){
  if (mult % 3 === 0 && mult % 5 === 0){
    console.log(mult + ' FizzBuzz')
  }else if(mult % 3 === 0){
    console.log(mult + ' Fizz')
  }else if (mult % 5 === 0){
    console.log(mult + ' Buzz')
  }else {
    console.log(mult)
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
//   ```

let lyric = 99
while (lyric > 0) {
if(lyric > 2){
console.log(lyric + ' bottles of beer on the wall, ' + lyric + ' bottles of beer. Take one down, pass it around,' + (lyric-1) + ' bottles of beer on the wall.')
} else if (lyric === 2 ){
  console.log(lyric + ' bottles of beer on the wall, ' + lyric + ' bottles of beer. Take one down, pass it around,' + (lyric-1) + ' bottle of beer on the wall.')
}else if (lyric === 1){
  console.log(lyric + ' bottle of beer on the wall, ' + lyric + ' bottle of beer. Take one down, pass it around, No more bottle of beer on the wall.')
}
lyric--
}
console.log('-----------')

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

console.log('-----------')

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

for (let grade = 60; grade <= 100; grade++){
  console.log(grade + ' ' + assignGrade(grade))
}

console.log('-----------')
console.log('the variable grade is calling the function asignGrade with the score 80. it wants to print out the letter grade that corresponds with 80.')


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

console.log('-----------')
// Not sure how to complete

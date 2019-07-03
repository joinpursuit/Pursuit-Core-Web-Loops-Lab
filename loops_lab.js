//1. Write a `while` loop and a `for` loop that takes the variable
//  "num" and logs all the numbers, descending, between "num" and 1.
console.log("-----while loop-------")
let num = 15
while (num>=1) {
  console.log(num)
num--
}
console.log("-----for loop-------")
for (let newNum= 15; newNum >= 1; newNum--) {
  console.log(newNum)
}

//2. Write a `while` loop and a `for` loop that takes the variable "max",
//and iterates over all numbers from 0 to "max". For each iteration, it will
//check if the current number is even or odd, and log that to the screen
//(e.g. "2 is even")

console.log("-----while loop-------")
let max = 0;
while (max<=25) {
  if(max%2===0) {
  console.log(max + " even")
} else {
  console.log(max + " odd")
}
max++
}

console.log("-----for loop-------")

for (let max = 0; max <= 25 ; max ++) {
  if (max % 2 === 0) {
    console.log(max + " even")
  } else {
    console.log(max + " odd")
  }
  }

// 3. Write a `while` loop and a `for` loop that takes the variable "x" and
//iterates over all numbers from 0 to "x". // For each iteration of the loop,
//it will multiply the number of "x" by 9 and log the result (e.g. "2 * 9 = 18").
console.log("---- for loop ----")

let x = 9;

for (let i = 0; i <= 10; i++) {
    console.log(i + " x " + x + "= " + (x * i))
}

//console.log("----while loop----")
//let w = 9

//_Bonus_ think of another way to solve it.
//     <details>
//       <summary>
//         Hint
//       </summary>
//       Find the final number and increment the loop by 9.
//     </details>

//4. Write code that prints/logs all the numbers that end in a 5 from 1 to 100,
//exclusive.

for(let x = 5; x<=100; x+=10) {
  console.log(x)
}

//5.  Without running/executing your code, how many times will the loop below
// run? Explain why.
//
// let i = 5;
//
// while (i > 3) {
//     i += 1
// }

// It will continuously increment by 1 because their is no end value. The while
// as long the condition is true, it will go to the next number which is always
//larger than 3.

//6. Write a loop that uses console.log to log all the numbers from 1 to 100,
// with two exceptions. For numbers divisible by 3, log "Fizz" instead of
//the number, and for numbers divisible by 5 (and not 3), log "Buzz"
//instead.

for (let i = 1; i <= 100; i++){
  if(i%3 === 0) {
    console.log("Fizz")
} else if (i%5 === 0) {
    console.log("Buzz")
} else {
  console.log(i)
}
}

// 7. Modify your program to log "FizzBuzz", for numbers that are
//divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers
//divisible by only one of those).
//
for (let i = 1; i <= 100; i++){
  if(i%3 === 0 && i%5 ===0) {
    console.log("FizzBuzz")
} else if (i%3 === 0) {
    console.log("Fizz")
} else if (i%5){
  console.log("Buzz")
} else {
 console.log(i)
}
}

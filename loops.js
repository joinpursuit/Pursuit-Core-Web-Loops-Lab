// 1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.


// for (let num = 10; num>0; num-=1){
//   console.log(num);
// }
// console.log("Logged with For Loop");
//
// let num = 10
// while (num >=1){
//   console.log(num);
//   num--
// }
// console.log("Logged with While Loop")


// 2. Write a `while` loop and a `for` loop that takes the variable "num", and iterates over all numbers from 0 to "num".
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

// for (let num = 0; num <=10; num++ ){
//   if(num%2 ===0){
//     console.log(num + " is even");
//   }else{
//     console.log(num + " is odd");
//   }
// }
// console.log("Logged with For Loop");
//
// let num = 0
// while (num <=10){
//   if(num%2 ===0){
//     console.log(num + " is even");
//   }else{
//     console.log(num + " is odd")
//   }
//   num+=1
// }
// console.log("Logged with While Loop")



// 3. Write a `while` loop and a `for` loop that takes the variable "num" and iterates over all numbers from 0 to "num".
// For each iteration of the loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

//
// for (let num = 0; num <=10; num++ ){
//     console.log(num * 9);
// }
// console.log("Logged with For Loop");
//
// let num = 0
// while (num <=10){
//     console.log(num * 9);
//   num+=1
// }
// console.log("Logged with While Loop")


//
// _Bonus_ think of another way to solve it.
//   <details>
//     <summary>
//       Hint
//     </summary>
//     Find the final number and increment the loop by 9.
//   </details>

// for (let num = 0; num <=100; num+=9 ){
//     console.log(num);
// }
// console.log("Logged with For Loop");
//
// let num = 0
// while (num <=100){
//     console.log(num);
//   num+=9
// }
// console.log("Logged with While Loop")


// 4. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.

// for (let num =1; num<=100; num++){
//   if(num%3 ===0){
//     console.log("Fizz");
//   }else if (num%5===0){
//     console.log("Buzz");
//   }else{
//     console.log(num);
//   }
// }

// 5. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).

// for (let num =1; num<=100; num++){
//   if(num%3===0 && num%5===0){
//     console.log("FizzBuzz");
//   }else if(num%3 ===0){
//     console.log("Fizz");
//   }else if (num%5===0){
//     console.log("Buzz");
//   }else{
//     console.log(num);
//   }
// }


// BONUS:

// 1. 99 Bottles


let num = 99
let num2 = num - 1
let word1 = "bottle"
let word2 = "bottle"
let song = num + " " + word1 + " " + " of beer on the wall, " + num + " "+ word1 + " of beer. Take one down, pass it around, " + num2 + " " + word2 + " of beer on the wall."

while (num>=1){
  // if(num=2){
  //   word1 = "bottles"
  //   word2 = "bottle"
  //   console.log(song);
  // }else if(num=1){
  //   num2 = "No more"
  //   word1 = "bottle"
  //   word2 = "bottle"
  //   console.log(song);
  // }else{
      // word1= "bottles"
      // word2 = "bottles"
      console.log(song)
  // }
num-=1
}

// let num = 0
// while (num <=100){
//     console.log(num);
//   num+=9
// }

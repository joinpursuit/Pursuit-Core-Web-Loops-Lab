// Loops Lab
//
// Problem One
// a.Write a while loop that takes the variable num and logs all the numbers, descending, between "num"
// and 1

let numA = 5;
while (numA > 1) {
    console.log(numA)
    numA--;
}
console.log(numA)

// b.Write a
// for loop that takes the variable num and logs all the numbers, descending, between "num"
// and 1

// Example:

//     let num = 8

// // Your code here

// /* Logs:
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// */
for (let numB = 8; numB >= 1; numB--) {
    console.log(numB)
}

// Problem Two
// a.Write a while loop that takes the variable "max", and iterates over all numbers from 0 to "max".For each iteration, it will check
// if the current number is even or odd, and log that to the screen(e.g.
//     "2 is even")

let i = 0;
let max = 78;
while (i <= max) {
    i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`)
    i++;
}


//let i = 0;
// let max = 78;
// while (i <= max) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`)
//     } else {
//         console.log(`${i} is odd`)
//     }
//     i++;
// }
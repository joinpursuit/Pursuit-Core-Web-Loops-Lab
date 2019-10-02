// ## Problem One 

// a. Write a `while` loop that takes the variable `num` and logs all the numbers, descending, between "num" and 1
// let num = 77;
// while (num >=1) {
//     console.log(num);
//     num -= 1;
// }


// b. Write a `for` loop that takes the variable `num` and logs all the numbers, descending, between "num" and 1

// for (num2 = 50; num2 >= 1; num2 -= 1){
//     console.log(num2);
// }

// ## problem two

// a. Write a `while` loop that takes the variable "max", and iterates over all numbers from 0 to "max". 
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")
// let max = 50
// while (max >= 0) {
//     console.log(max);
//     if (max % 2 === 0) {
//         console.log("this is even")
//     }
//     else {
//         console.log("this is odd")
    
//     }
//     max -= 1
// }

// b. Use a `for` loop instead

// for(let max1=0; max1<=50; max1+=1){
//     if (max1 % 2 === 0) {
//         console.log( max1 + " is even");
//     }
//     else {
//         console.log(max1 + " is odd");
//     }
// }
// ## Problem Three

/* a. Write a `while` loop that takes the variable "x" and iterates over all numbers from 0 to "x". For each iteration of the loop, 
it will multiply the number of "x" by 9 and log the result */

// let x=5;
// let y=0;
// while(y < x){
//     console.log(x*9);
//     y++;
// }

// let x1=5;
// let y1=0;
// while(y1<=x1){
//     console.log(y1*9);
//     y1++;
// }

// // b. Use a `for` loop instead.
// let y2=0;
// for (let x2=5; y2<=x2; y2++){
//     console.log(y2*9);
// }

// ## Problem Four

// Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.

for (let x = 5; x <= 100; x += 10){
    console.log(x)
}

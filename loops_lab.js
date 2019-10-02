// console.log('Prblem 1');
// // A
// let num = 100
// while (num >=1) {
//     console.log(num)
//     num -=1
// }

// // B
// for (num = 100; num>0; num-=1){
//     console.log(num)
// }

// console.log('Prblem 2');

// // A

// let max = 10

// while (max < 20) {
//     if (max % 2 === 0) {
//     console.log("This number is Even " + max)
// } else {
//     console.log("This number is odd " + max)
// }
// max++; 
// }

// // B

// for (max = 0; max <= 20; max++) {
//     if(max % 2 === 0) {
//     console.log("The number is Even " + max)
// }   else {
//     console.log("This number is odd " + max)
// }
// }

// console.log('Prblem 3');
// //a

// let x = 0

// while (x<=10) {
//     console.log(x + " * 9 = "+ x *9);
//     x++;
// }

// // b
// for (x = 0; x <= 10; x++){
//     console.log(x + " * 9 = "+ x *9);
// }

// console.log('Prblem 4');

// for (let y = 1; y <= 100; y ++){
//     if (y % 5 ===0 && y % 10 !==0){
//     console.log(y)
//     }
// }

// console.log('Problem 5');

// console.log("This code will run forever. There is no limit for this loop, no break in the Loop")

// console.log('Problem 6');

// let numFB = 1

// for (let numFB = 1; numFB <=16; numFB++) {
//   if (numFB % 5 === 0) {
//     console.log("Buzz"); 
//   } else if (numFB % 3 === 0) {
//     console.log("Fizz")
//   } else {
//     console.log(numFB)
//   }
// }

// console.log('Problem 7');

// //
// let numFnB = 1

// for (let numFnB = 1; numFnB <=31; numFnB++) {
//   if (numFnB % 3===0 && numFnB %5===0){
//       console.log("FizzBuzz")
// }   else if (numFnB % 5 === 0) {
//     console.log("Buzz"); 
//   } else if (numFnB % 3 === 0) {
//     console.log("Fizz")
//   } else {
//     console.log(numFnB)
//   }
// }

console.log("Problem 8")


let x = 5
while (x > 0){
    console.log(x + " " + "bottles of beer on the wall" + " " + (x-1) + " " + "numbers of beer,")
    console.log("Take one down, pass it around,")
     x = x-1
 if (x === 1) {
     console.log(" 1 bottle of beer on the one,NO bottle of beer, take on dow pass it around, ")
 } else if (x === 0) {
    console.log("no more bottles of beer on the wall")
 }}


 console.log('Problem 9')
 for (let  sQ = 1; sQ <=5; sQ++){
    if(sQ <4) {
    console.log('*' +(sQ+'*')) 
 }
 }

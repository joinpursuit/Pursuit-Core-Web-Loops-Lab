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

for (let bott = 5; bott >0; bott--){
    if (bott >2){console.log((bott) + " bottle of beer on the wall," + (bott-1) + " bottles of beer. Take one down, pass it around.")
}
    else if (bott ===2){
        console.log(bott + " bottles of beer on the one, 1 bottle of beer, take on down pass it around, ")
    }
    else {
        console.log("1 bottle of beer on the wall, No more bottle of beer on the wall")
    }
}

// let x = 4
// while (x > 2) {
//     console.log(x+ "bottle of beer on the wall, 1 bottle of beer. Take one down, pass it around. No more bottle of beer on the wall");
// if (x === 2) {
//     console.log(x+ " bottles of beer on the one, " + x -1 + " bottle of beer, take on down pass it around, ")
// } else (x > 2); {
//     console.log(x+ " bottles of beer on the wall, " + x -1 + "bottles numbers of beer, Take one down, pass it around,")
// }  
// x--;
// }


 console.log('Problem 9')
//  for (let  sQ = 1; sQ <=5; sQ++){
//     if(sQ <5) {
//     console.log('*' +(sQ+'*')) 
//  }
//  }


let N = 3;
let askt = "";
for(let outter = 0; outter < N; outter++){
   for(let inner = 0; inner < N; inner++){
       askt += "*";
   }
}
console.log(askt);

console.log("Problem 10")

let sum = 0

for (let numFnB = 1; numFnB < 1000; numFnB++) {
  if (numFnB % 3 ===0 || numFnB % 5===0){
      sum += numFnB;
  }
}
console.log(sum)


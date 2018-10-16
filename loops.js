// let num = 10
// while ( num >= 1) {
//   console.log(num)
//   num -= 1
// }

// for (let num = 10; num >= 1; num -= 1) {
//   console.log(num)
// }

//2.

// let num = 10
// while (num >= 0) {
//   if (num%2 === 0) {
//     num += 1
//     console.log(num + ' is an even number ');
//
//   } else if (num%2 === 1) {
//     console.log(num + ' is an odd number ');
//   }
//
// }

// for (let num = 10; num >= 0; num++) {
//   if (num % 2 === 0) {
//
//      console.log(num + ' is an even number ');
//
//   } else {
//      console.log(num + ' is an odd number ');
//   }
// }

//3.
// let num = 10;
// let i = 0;
// while(i < num) {
//   console.log(i + " * 9 = " + (i * 9));
//   i++
// }

// let num = 10;
//
// for(let i = 0; i < num; i++) {
//  console.log(i + " * 9 = " + (i * 9));
// }

//4.
// for (let i = 1; i <= 100; i++) {
//      if (i % 5 === 0){
//        console.log("Buzz");
//
//      } else if (i % 3 === 0) {
//       console.log("Fizz");
//
//       } else {
//
//         console.log(i);
//        }
//
//      }
//
//5.
// for (let i = 1; i <= 100; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//       console.log('Fizzbuzz');
//
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//
//     } else {
//
//       console.log(i);
//   }
// }



//2.2

//
// function assignGrade(score) {
//   if (score >= 90) {
//     return "A";
//   } else if (score >= 80) {
//     return "B";
//   } else if(score >= 70){
//     return "C";
//   } else if (score >= 60) {
//
//      return "D";
//
// } else {
//   return "F";
// }
//   }
//
//   console.log(assignGrade(75));

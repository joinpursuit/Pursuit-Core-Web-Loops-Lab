// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);
// console.log(11);
// console.log(12);
// console.log(13);
// console.log(14);

// --
// let num = 1;
// while (num <= 100) {
//   console.log(num);
// //num += 1
//   num += 1;
// }


// let num = 2;
// while (num <= 10) {
//   console.log(num);
//   num += 2;
// }

// let num = 5;
// while (num <= 50) {
//   console.log(num);
//   num += 5;
// }

// let x = 0;
// while (x <= 10 && x % 2 === 0) {
//   console.log(x);
//   x += 2;
// }
// console.log('keep going')


// let x = 0;
// console.log(’we\‘ve inistialized x. x is now ’ + x);
// while (x <= 10 && x % 2 === 0) { // condition not met
//  console.log(x);
//  x += 1;
//
//  console.log(’we\‘ve now changed x to ’ + x);
// }
// console.log("we\‘ve now ended the loop because the condition was false. x is now " + x);


// let x = 99
// while ( x <= 99 && x > 0) {
//   console.log(x)
//   x -= 2
// }

// let x = 99
// while ( x >= 0) {
//   console.log(x)
//   x -= 1
// }

// num = 99;
// //while (num <= 99 && num > 0)
// while (num <= 99 && num > 0) {
//  if (num % 2 != 0) {
//   console.log(num)
//  }
//  //num--
//  //num = num -1
//  num -= 1;
// }


// let x = 1;
// while (x <= 100) {
//   if (x % 2 === 0) {
//     console.log(x + " is even");
//   } else {
//     console.log(x + " is odd");
//   }
//   x += 1
// }

//
// let num = 20;
// while (num > 0) {
//   if (num % 2 !== 0) {
//     console.log(num + " is odd")
//   } else {
//     console.log(num + " is even")
//   }
//   num -= 1
// }
//
// console.log('-----------------')
// // initialization // conditional // Increment or decrement
// for (let x = 20;     x > 0;          x -= 1) {
//   if (x % 2 !== 0) {
//     console.log(x + ' is odd')
//     } else {
//       console.log(x + ' is even')
//     }


// for (let x = 50; x >= 5; x -= 5) {
//   console.log(x)
// }

let string = ''
for (let num = 10; num > 0; num += 1) {
  if (num % 2 === 0) {
    string += '('
    console.log(string)
  } else {
    string += ')'
    console.log(string)
  }
}


// | num | num > 0 | num % 2 === 0 | str      |
// | 10  | true    |  true         | "("      |
// | 9   | true    | false         |  "()"    |
// | 8   | true    |  true         |  "()" "(" |


// let x = 100;
// while (x > 0) {
// x % 2 !== 0 ? console.log(x, "is odd") : console.log(x, 'is even');
// x -= 1;

// // 1. Write a `while` loop and a `for` loop that takes the variable
// // "num" and logs all the numbers, descending, between "num" and 1.
//
let num = 10
while (num >= 0){
  console.log(num)
  num --
};

for(let num1 = 20; num1 >= 10; num1 -- ) {
  console.log(num1)
};
//
// //------------------------------
// //2. Write a `while` loop and a `for` loop that takes the variable "max",
// //and iterates over all numbers from 0 to "max".
// //For each iteration, it will check if the current number is even or odd,
// //and log that to the screen (e.g. "2 is even")
//
let max = 35
while(max >= 30) {
  if (max % 2 === 0) {
    console.log('the number '+ max + ' is even.')
  } else {
    console.log('the number '+ max + ' is odd.')
  } max --
};

for (let max1 = 45; max1 >=40; max1 --) {
  if(max1 % 2 === 0) {
    console.log('the number ' + max1 + ' is even')
  } else {
    console.log('the number ' + max1 + ' is odd')
  }
};
//
// //-------------------------------
// //3. Write a `while` loop and a `for` loop that takes the variable "x"
// //and iterates over all numbers from 0 to "x".
// // For each iteration of the loop, it will multiply the number of "x"
// //by 9 and log the result (e.g. "2 * 9 = 18").
//
let x = 0
while(x <= 10) {
  console.log(x + ' * 9 = ' + (x * 9))
  x ++
};

for (let x1 = 10; x1 <= 20; x1 ++) {
  console.log(x1 + ' * 9 = ' + (x1 * 9))
};
//
// //---------------------------------
// //4. Write code that prints/logs
// //all the numbers that end in a 5 from 1 to 100,
let y = 1
while(y <= 100) {
  if(y % 5 === 0 && y % 10 !== 0) {
    console.log(y)
  } y ++
};

for (let y1 =1; y1 <= 100; y1 ++) {
  if(y1 % 5 ===0 && y1 % 10 !== 0) {
    console.log(y1)
  }
};
//
// //----------------------------------
// //5. Without running/executing your code,
// //how many times will the loop below run? Explain why.
//
// // ```js
// // let i = 5;
// //
// // while (i > 3) {
// //     i += 1
// // }
// //
// //Your explanation here:
// //Infinite times, this while loop is saying that so long as the variable i is
// //greater than  3,the loop should run it again. Because it is incrementing by 1
// //everytime it runs and it already begins at 5, i will always be bigger than 3.
// // Since there is no console.log function, it will not print anything.
// // ```
//
// //-----------------------------------
// //6. Write a loop that uses console.log to log all the numbers from 1 to 100,
// // with two exceptions. For numbers divisible by 3, log "Fizz" instead of the
// // number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
let myNumber = 1
while(myNumber <=100){
  if(myNumber % 5 === 0 && myNumber % 3 !== 0) {
    console.log('Buzz ' + myNumber)
  } else if(myNumber % 3 === 0) {
    console.log('Fizz ' + myNumber)
  }else {
      console.log(myNumber)
    } myNumber ++
  }

for(let myNumber1 = 1; myNumber1 <=100; myNumber1 ++) {
  if(myNumber1 % 5 === 0 && myNumber1 % 3 !== 0) {
    console.log('Buzz ' + myNumber1)
  } else if(myNumber1 % 3 === 0) {
    console.log('Fizz ' + myNumber1)
  } else {
    console.log(myNumber1)
  }
};
// //
// // //-------------------------------------
// // //7. Modify your program to log "FizzBuzz", for numbers that are divisible
// // //by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by
// // //only one of those).
// //
let myNumber2 = 1
while(myNumber2 <= 100){
  if (myNumber2 % 3 === 0 && myNumber2 % 5 ===0){
    console.log('FizzBuzz ' + myNumber2)
  } else if(myNumber2 % 5 === 0 && myNumber2 % 3 !== 0) {
    console.log('Buzz ' + myNumber2)
  } else if(myNumber2 % 3 === 0) {
    console.log('Fizz ' + myNumber2 )
  } else {
    console.log(myNumber2)
  }
    myNumber2 ++
};

for(let myNumber3 = 1; myNumber3 <= 100; myNumber3 ++) {
  if(myNumber3 % 3 === 0 && myNumber3 % 5 === 0) {
    console.log('FizzBuzz ' + myNumber3)
  } else if (myNumber3 % 5 === 0 && myNumber3 % 3 !== 0){
    console.log('Buzz ' + myNumber3)
  } else if (myNumber3 % 3 === 0) {
    console.log('Fizz ' + myNumber3)
  } else {
    console.log(myNumber3)
  }
};
// //----------------
// // Bonus #1:
let beer = 99
while (beer > 0) {
  if (beer > 2) {
  console.log(beer + ' bottles of beer on the wall, '+ beer + ' bottles of beer. Take one down, pass it around, ' + (beer -1) + ' bottles of beer on the wall.' )
} else if (beer === 2) {
  console.log(beer + ' bottles of beer on the wall, ' + beer + ' bottles of beer. Take one down, pass it around, ' + (beer -1) + ' bottle of beer on the wall.' )
} else if (beer === 1) {
  console.log(beer + ' bottle of beer on the wall, ' + beer + ' bottle of beer. Take one down, pass it around, no more bottles of beer on the wall.')
}
  beer --
};
// ---------------
//Bonus # 2:

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
for(let grade = 100; grade >=60; grade --){
  console.log(grade + ' is a ' + (assignGrade(grade)))
};

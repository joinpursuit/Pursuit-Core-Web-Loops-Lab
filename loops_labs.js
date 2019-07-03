// JOSEPH P. PASAOA
//

console.log('1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.');
//
let num = 11; // USER INPUT HERE (for BOTH)
//
console.log("** WHILE loop **");
let whileNum = num;
while (whileNum >= 1) {
  console.log(whileNum);
  whileNum = whileNum - 1;
}
console.log("** FOR loop **");
for (let forNum = num; forNum >= 1; forNum -= 1) {
  console.log(forNum);
}
console.log("");



console.log('2. Write a `while` loop and a `for` loop that takes the variable "max", and iterates over all numbers from 0 to "max".');
console.log('For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")');
//
let max = 9; // USER INPUT HERE (for BOTH)
//
console.log("** WHILE loop **");
let whileMax = 0;
while (whileMax <= max) {
  whileMax % 2 === 0
    ? console.log(whileMax + " is even") // evals to EVEN
    : console.log(whileMax + " is odd") // evals to ODD
  whileMax ++;
}
console.log("** FOR loop **");
for (let forMax = 0; forMax <= max; forMax ++) {
  forMax % 2 === 0
    ? console.log(forMax + " is even") // evals to EVEN
    : console.log(forMax + " is odd") // evals to odd
}
//
console.log("");


console.log('3. Write a `while` loop and a `for` loop that takes the variable "x" and iterates over all numbers from 0 to "x".');
console.log('For each iteration of the loop, it will multiply the number of "x" by 9 and log the result (e.g. "2 * 9 = 18").');
//
let x = -4; // USER INPUT HERE (for BOTH)
//
if (x > 0) { // FOR POSITIVE INPUTS
  console.log("** WHILE loop **");
  let happyWhile = 0;
  while (happyWhile <= x) {
    console.log(happyWhile + " * 9 = " + (happyWhile * 9));
    happyWhile ++;
  }
  console.log("** FOR loop **");
  for (let happyFor = 0; happyFor <= x; happyFor = happyFor + 1) {
    console.log(happyFor + " * 9 = " + (happyFor * 9));
  }
} else { // FOR NEGATIVE INPUTS
  console.log("** WHILE loop **");
  let sadWhile = 0;
  while (sadWhile >= x) {
    console.log(sadWhile + " * 9 = " + (sadWhile * 9));
    sadWhile --;
  }
  console.log("** FOR loop **");
  for (let sadFor = 0; sadFor >= x; sadFor --) {
    console.log(sadFor + " * 9 = " + (sadFor * 9));
  }
}
// BONUS FOR #3
console.log("** #3 BONUS WHILE loop **");
let xByNine = x * 9;
if (x > 0) { // FOR POSITIVE INPUTS
  let whileBonus3 = 0;
  while (whileBonus3 <= xByNine) {
    console.log((whileBonus3 / 9) + " * 9 = " + whileBonus3);
    whileBonus3 += 9;
  }
  console.log("** #3 BONUS FOR loop **");
  for (forBonus3 = 0; forBonus3 <= xByNine; forBonus3 += 9) {
    console.log((forBonus3 / 9) + " * 9 = " + forBonus3);
  }
} else { // FOR NEGATIVE INPUTS
  let whileBonus3 = 0;
  while (whileBonus3 >= xByNine) {
    console.log((whileBonus3 / 9) + " * 9 = " + whileBonus3);
    whileBonus3 -= 9;
  }
  console.log("** #3 BONUS FOR loop **");
  for (forBonus3 = 0; forBonus3 >= xByNine; forBonus3 -= 9) {
    console.log((forBonus3 / 9) + " * 9 = " + forBonus3);
  }
}
console.log("");


console.log("4. Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.");
//
let counterFour = 1;
while (counterFour <= 100) {
  if (counterFour % 5 === 0 && counterFour % 10 !== 0) {
    console.log(counterFour);
  }
  counterFour = counterFour + 1;
}
//
console.log("");


console.log("5. Without running/executing your code, how many times will the loop below run? Explain why.");
//
// The loop will run for infinity or until the execution is manually halted because the declared increment "i += 1"
// makes no progress towards the declared conditional "i > 3" from the initialized declaration "i = 5."
console.log("");


console.log('6. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions.');
console.log('For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.');
//
let counterSix = 1;
while (counterSix <= 100) {
  if (counterSix % 3 === 0) {
    console.log("Fizz");
  } else if ((counterSix % 5 === 0) && (counterSix % 3 !== 0)) {
    console.log("Buzz");
  } else {
    console.log(counterSix);
  }
  counterSix ++;
}
console.log("");


console.log('7. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5');
console.log('still log "Fizz" or "Buzz" for numbers divisible by only one of those).');
//
let counterSeven = 1;
while (counterSeven <= 100) {
  if ((counterSeven % 3 === 0) && (counterSeven % 5 === 0)) {
    console.log("FizzBuzz");
  } else if ((counterSeven % 3 === 0) && (counterSeven % 5 !== 0)) {
    console.log("Fizz");
  } else if ((counterSeven % 3 !== 0) && (counterSeven % 5 === 0)) {
    console.log("Buzz");
  } else {
    console.log(counterSeven);
  }
  counterSeven ++;
}
console.log("");


console.log("BONUS 1. Write a program that would log the lyrics of the song 99 Bottles of Beer.");
//
let numBottles = 99;
while (numBottles >= 1) {
  if (numBottles === 1) {
    console.log("1 bottle of beer on the wall, 1 bottle of beer.");
    console.log("Take one down, pass it around, No more bottles of beer on the wall.");
  } else if (numBottles === 2) {
    console.log("2 bottles of beer on the wall, 2 bottles of beer.");
    console.log("Take one down, pass it around, 1 bottle of beer on the wall.");
  } else {
    console.log(numBottles + " bottles of beer on the wall, " + numBottles + " bottles of beer.");
    console.log("Take one down, pass it around, " + (numBottles - 1) + " bottles of beer on the wall.");
  }
  numBottles --;
}
//
console.log("");


console.log("2. Use the `assignGrade` function (given below). Write a function that logs each number from 60 - 100 along with its corresponding letter score.");
for (let numGrade = 60; numGrade <= 100; numGrade ++) {
  let letterGrade = assignGrade(numGrade);
  console.log(numGrade + " - " + letterGrade);
}
// let grade = assignGrade(80);
// console.log(grade);

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
//
console.log("");


console.log("3. Given an integer N draw a square of N x N asterisks. Look at the examples.");
//
let side = 9; // USER INPUT HERE
//
let starLine = "";
let vertCursor = 0;
while (vertCursor <= side) {
  starLine = "";
  for (let zontalCursor = 0; zontalCursor <= side; zontalCursor ++) {
    if (vertCursor === 0) {
      // empty intentionally
    } else if (zontalCursor === side) {
      console.log(starLine);
    } else {
      starLine += "*";
    }
  }
  vertCursor ++;
}

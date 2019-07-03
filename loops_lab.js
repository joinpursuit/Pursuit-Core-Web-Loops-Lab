//1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.

console.log('1.--------------');
console.log('While Loop');

let num = 15;
let startingNum = num;
while (num > 1 && num) {
  if (num === startingNum) {
    num--;
  }

  console.log(num);
  num--;
}

console.log('For Loop');

for (num = 8; num > 1; --num) {
  if (num === 8) {
    num--;
  }

  console.log(num);
}

//2. Write a `while` loop and a `for` loop that takes the variable "num", and iterates over all numbers from 0 to "num".
//For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

console.log('2.--------------');
console.log('While Loop');

let num2 = 0;
while (num2 <= 20) {
  if (num2 % 2 === 0) {
    console.log(num2 + ' is even');

  } else {
    console.log(num2 + ' is odd');
  }

  num2++;
}

console.log('For Loop');

for (num = 0; num <= 10; num++) {
  if (num % 2 === 0) {
    console.log(num + ' is even');

  } else {
    console.log(num + ' is odd');
  }
}

//3. Write a `while` loop and a `for` loop that takes the variable "num" and iterates over all numbers from 0 to "num".
//For each iteration of the loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

console.log('3.--------------');
console.log('While Loop');

let num3 = 0;

while (num3 <= 5) {
  console.log(num3 + ' * 9 = ' + num3 * 9);
  num3++;
}

console.log('For Loop');

for (num = 0; num <= 7; num++) {
  console.log(num + ' * 9 = ' + num * 9);
}

console.log('Bonus Multiples of 9');

for (num = 0; num <= 110; num++) {
  if (num % 9 === 0) {
    console.log(num / 9 + ' * 9 = ' + num);
  }
}

//4. Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.
console.log('Newly added Question 4.--------------');
for (num = 1; num < 100; num++) {
  if (num % 5 === 0 && num % 10 !== 0) {
    console.log(num);
  }
}

//5. Without running/executing your code, how many times will the loop below run? Explain why.
console.log('Newly added Question 5.--------------');

/*
let i = 5;

while (i > 3) {
    i += 1
}
*/
console.log('This code will run an infinite amount of time because ' +
'the variable i will always be greater then 3 since it starts ' +
'at 5 and goes up 1 everytime the loop runs. The loop will ' +
'always be true and never become false.');

//6. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
console.log('6.--------------');

for (num = 1; num <= 100; num++) {
  if (num % 3 === 0) {
    console.log('Fizz');
  } else if (num % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(num);
  }
}

//7. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).
console.log('7.--------------');

for (num = 1; num <= 100; num++) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('FizzBuzz');
  } else if (num % 3 === 0) {
    console.log('Fizz');
  } else if (num % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(num);
  }
}

//1. Write a program that would log the [lyrics of the song 99 Bottles of Beer](http://www.99-bottles-of-beer.net/lyrics.html). This is the first verse of the song:
console.log('###BONUS 1.--------------');

for (num = 99; num > 0; num--) {
  if (num === 2) {
    console.log(num + ' bottles of beer on the wall, '
    + num + ' bottles of beer. Take one down, pass it around, '
    + (num - 1)  + ' bottle of beer on the wall.');
  } else if (num === 1) {
    console.log(num + ' bottle of beer on the wall, '
    + num + ' bottle of beer. Take one down, pass it around, No more bottle of beer on the wall.');
  } else {
    console.log(num + ' bottles of beer on the wall, '
    + num + ' bottles of beer. Take one down, pass it around, '
    + (num - 1) + ' bottles of beer on the wall.');
  }
}

//2. Use the `assignGrade` function (given below). Write a function that logs each number from 60 - 100 along with its corresponding letter score.
//Exp For each number from 81 to 90, log B, like so:
console.log('###BONUS 2.--------------');

function assignGrade(score) {
  if (score > 89) {
    return 'A';
  } else if (score > 79) {
    return 'B';
  } else if (score > 69) {
    return 'C';
  } else if (score > 64) {
    return 'D';
  } else {
    return 'F';
  };
};

console.log("Functions are a set block of code that run checks on the input its given. " +
"Once you enter some info into a function it will return data depending on " +
"how it's programed. So if I enter 80 into the assignGrade function I will " +
"get B because I declared in my function that any number entered " +
"thats over 79 and below 90 will return a B grade.");

for (num = 1; num <= 100; num++) {
  let grade = assignGrade(num);
  console.log('If you scored ' + num + ' you get ' + grade);
}

//3. Given an integer N draw a square of N x N asterisks. Look at the examples.
console.log('###BONUS 3.--------------');

let N = 4;
let asterisks = '*';
let numB3 = 1;

while (numB3 < N) {
  asterisks += '*';
  numB3++;
}

console.log(asterisks);

for (num = 1; num < N; num++) {
  console.log(asterisks);
}

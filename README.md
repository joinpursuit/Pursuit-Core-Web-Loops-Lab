# Loop Exercises

1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.

//while loop
let num = 20
while (num >= 2) {
  console.log(num)
  num -= 1
}


//for loop
for (let num = 20; num > 1; num -= 1) {
  console.log(num)
}

2. Write a `while` loop and a `for` loop that takes the variable "num", and iterates over all numbers from 0 to "num".
For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

//while loop
let num = 10;
while(num >= 0) {
 if(num % 2 === 0) {
   console.log(num+ ' is even number')
 } else {
   console.log(num + ' is odd number')
 }
 num--
}

//for loop
let num = 17
for (let i = 0; i <= num; i++){
  if (i % 2 === 0){
    console.log(i + ' is even')
  } else {
    console.log(i + ' is odd')
  }
}

3. Write a `while` loop and a `for` loop that takes the variable "num" and iterates over all numbers from 0 to "num".
For each iteration of the loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

let num = 10
while (num >= 0) {
  console.log(num+ ' * 9 = ' +num*9)
  num --
}

//_Bonus_ think of another way to solve it.
// newp.
//  <details>
//    <summary>
//      Hint
//    </summary>
//    Find the final number and increment the loop by 9.
//  

4. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers


for (let i=1; i < 101; i++){
    if (i % 5 == 0) console.log("Buzz");
    else if (i % 3 == 0) console.log("Fizz");
    else console.log(i);
}

5. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).

for (let i=1; i < 101; i++){
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

Bonus:
//no

1. Write a program that would log the lyrics of the song 99 Bottles of Beer. This is the first verse of the song:

99 bottles of beer on the wall,

99 bottles of beer.

Take one down, pass it around,

98 bottles of beer on the wall.

This verse is repeated, each time with one less bottle, until the number of bottles is 0. When the number of bottles is 2, the verse is:

2 bottles of beer on the wall,

2 bottles of beer.

Take one down, pass it around,

1 bottle of beer on the wall.

In the last line, the word bottles (plural), is  replaced with bottle (singular)

When the number of bottles is 1, the verse is:

1 bottle of beer on the wall,

1 bottle of beer.

Take one down, pass it around,

No more bottle of beer on the wall.



2. Use the assignGrade function (given below). Write a function that logs each number from 60 - 100 along with its corresponding letter score.
Exp For each number from 81 to 90, log B, like so:

```js
81 - B
82 - B
83 - B
...
```

```js
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
```

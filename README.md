# Loop Exercises

1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.

<!-- let num = 100;

while (num > 1) {
  console.log(num);
  num--;
}

for (let i = 100; i > 1; i--) {
  console.log(i);
} -->

2. Write a `while` loop and a `for` loop that takes the variable "num", and iterates over all numbers from 0 to "num".
For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

<!-- let num = 50;

while (num > 0) {
  if (num % 2 === 0){
    console.log(num + ' is an even number.')
  } else {
    console.log(num + ' is an odd number.')
  }
  num--;
}

for (let i = 0; i < 50; i++) {
  if (num % 2 === 0) {
    console.log(num + ' is an even number.')
  } else {
    console.log(num + ' is an odd number.')
  }
} -->

3. Write a `while` loop and a `for` loop that takes the variable "num" and iterates over all numbers from 0 to "num".
For each iteration of the loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

<!-- let num = 20;
let multipliedNine = num * 9;

while (num > 0) {
 console.log(multipliedNine);
 num--;  
}

for (let i = 0; i < 20; i++) {
  console.log(i * 9);
} -->

_Bonus_ think of another way to solve it.
  <details>
    <summary>
      Hint
    </summary>
    Find the final number and increment the loop by 9.
  </details>

<!-- let num = 180;

while (num > 0) {
  console.log(num);
  num = num - 9;
}

for (let i = 0; i <= 180; i + 9) {
  console.log(i);
} -->

4. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.

<!-- for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log('Buzz')
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
} -->


5. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).

<!-- for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log('FizzBuzz')
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
} -->


Bonus:

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


<!-- for (let beers = 99; beers > 0; beer--) {

  if (beers === 2) {
    console.log('2 bottles of beer on the wall,
    2 bottles of beer.
    Take one down, pass it around,
    1 bottle of beer on the wall.');
  } else if (beers === 1) {
    console.log('1 bottle of beer on the wall,
    1 bottle of beer.
    Take one down, pass it around,
    No more bottle of beer on the wall.');
  } else {
    console.log(beer + ' bottles of beer on the wall, '
    + beers + ' bottles of beer.
    Take one down, pass it around, '
     + (beers - 1) + ' bottles of beer on the wall.')
  }
} -->

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
<!-- for (let i = 60; i <= 100; i++) {
  console.log(i + assignGrade(i));
} -->

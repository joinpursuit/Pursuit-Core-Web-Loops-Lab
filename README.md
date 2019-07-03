# Loops Lab

To complete this lab, do the following:

1. Fork this repo
2. Clone **your** forked repo
3. Create a file called `loops_lab.js` inside your cloned repo
4. Copy the description of the exercise as a comment  
5. Underneath the commented description write your code.
6. Ensure your solutions work properly!
7. Open PR against this repo.

___

## Exercises

1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.

2. Write a `while` loop and a `for` loop that takes the variable "num", and iterates over all numbers from 0 to "num".
For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

3. Write a `while` loop and a `for` loop that takes the variable "num" and iterates over all numbers from 0 to "num".
For each iteration of the loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
  _Bonus_ think of another way to solve it.
    <details>
      <summary>
        Hint
      </summary>
      Find the final number and increment the loop by 9.
    </details>

4. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.

5. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).

### Bonus:

1. Write a program that would log the [lyrics of the song 99 Bottles of Beer](http://www.99-bottles-of-beer.net/lyrics.html). This is the first verse of the song:

  ```
  99 bottles of beer on the wall, 99 bottles of beer.
  Take one down, pass it around, 98 bottles of beer on the wall.
  ```

  This verse is repeated, each time with one less bottle, until the number of bottles is 0. When the number of bottles is 2, the verse is:

  ```
  2 bottles of beer on the wall, 2 bottles of beer.
  Take one down, pass it around, 1 bottle of beer on the wall.
  ```

  In the last line, the word bottles (plural), is  replaced with bottle (singular)

  When the number of bottles is 1, the verse is:

  ```
  1 bottle of beer on the wall, 1 bottle of beer.
  Take one down, pass it around, No more bottle of beer on the wall.
  ```

___

2. Use the `assignGrade` function (given below). Write a function that logs each number from 60 - 100 along with its corresponding letter score.
Exp For each number from 81 to 90, log B, like so:

```js
60 - F
...
81 - B
82 - B
83 - B
...
93 - A
94 - A
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
<details>
<summary>
  <b>Hint</b>
</summary>
  Explore this:

  ```js
  let grade = assignGrade(80)
  console.log(grade)
  ```
  What is happening here? Can you explain it?
</details>

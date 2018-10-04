# Loop Exercises

1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.
while

let num = 7

for(var i = num ;i > 2;i--){
  --num
  console.log(num);
}
while (num>2){
  --num
  console.log(num);
}

2. Write a `while` loop and a `for` loop that takes the variable "num", and iterates over all numbers from 0 to "num".
For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

let num =10;

for(var i = 0; i <= num; i++){
  if(i%2 === 1){
    console.log(i + " is odd");
  }else{
    console.log(i + " is even");
  }
}

let num = 25;
let start = 0;
while(start<num){
  ++start
  if(start%2 === 1){
    console.log(start + " is odd");
  }else{
    console.log(start + " is even");
  }
}

3. Write a `while` loop and a `for` loop that takes the variable "num" and iterates over all numbers from 0 to "num".
For each iteration of the loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

let num = 13
let counter= 0
let nined = 0

while(num>counter){
  nined = counter * 9

  console.log(counter +" * 9 = " + nined)
++counter
}


let num = 8
let nined = 0
 for(var i = 0; i <= num;++i){
   i * 9 = nined
   console.log(i + " * 9 = " + nined)
 }



_Bonus_ think of another way to solve it.
  <details>
    <summary>
      Hint
    </summary>
    Find the final number and increment the loop by 9.
  </details>

4. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.

for(var i = 1; i<=100;i++){
  if(i % 3 === 0){
    console.log("Fizz");
  }else if( i % 5 === 0){
    console.log("Buzz");
  }else{
    console.log(i);
  }
}

5. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).

for(var i = 1; i<=100;i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzFizz");
  }else if( i % 5 === 0){
    console.log("Buzz");
  }else if(i % 3 === 0){
    console.log("Fizz");
  }else{
    console.log(i);
  }
  }


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

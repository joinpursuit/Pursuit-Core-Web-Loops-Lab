// 1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.
let num = 10;
while(num > 2){
  num--;
  console.log(num);

}

for(num = 10 - 1;num > 1;num--){
  console.log(num);
}

/* 2. Write a `while` loop and a `for` loop that takes the variable "num", and iterates over all numbers from 0 to "num".
For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even") */
num = 10
let i = 0;
while(i <= num){

  if(i%2 === 0){
    console.log(i + "is even")
  }
  else{
    console.log(i + "is odd")
  }
i++
}

for(i = 0; i <= num;i++){
  if(i%2 === 0){
    console.log(i + "is even")
  }
  else{
    console.log(i + "is odd")
  }
}

/* 3. Write a `while` loop and a `for` loop that takes the variable "num" and iterates over all numbers from 0 to "num".
For each iteration of the loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

_Bonus_ think of another way to solve it.
  <details>
    <summary>
      Hint
    </summary>
    Find the final number and increment the loop by 9.
  </details> */

  num = 10
  i = 0;
  while(i <= num){

  console.log( i + " * 9 = " + i*9)
  i++
  }

  for(i = 0; i <= num;i++){
    console.log( i + " * 9 = " + i*9);
  }

//Write code that prints/logs all the numbers that end in a 5 from 1 to 100, exclusive.
for(i = 5; i <= 100;i+=10){
console.log(i)

}

/*Without running/executing your code, how many times will the loop below run? Explain why.

let i = 5;

while (i > 3) {
    i += 1
} */

// Your explanation here
// infinitly because i never becomes less than 3 the condition that will make the while loop stop

//  Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
for(i = 0; i <= 100;i++){
  if(i%3 === 0 && !i%5 === 0){
    console.log("Fizz")
  }
  else if(i%5 === 0 && !i%3 === 0 ){
    console.log("Buzz")
  }
  else if(i%5 === 0 && i%3 === 0 ){
    console.log("FizzBuzz")
  }
  else{
    console.log(i)
  }
}

/*
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

No more bottle of beer on the wall. */
i = 99
while( i > 0){
  if(i > 1 ){
  console.log(i + " bottles of beer on the wall," + i + " bottles of beer. Take one down, pass it around,")
  i--;
  console.log (i + " bottles of beer on the wall.")};
  if(i === 1){
    console.log("1 bottle of beer on the wall, 1 bottle of beer. Take one down, pass it around, No more bottle of beer on the wall.")
    i--
  }
}
/*
2. Use the assignGrade function (given below). Write a function that logs each number from 60 - 100 along with its corresponding letter score.
Exp For each number from 81 to 90, log B, like so:

```js
81 - B
82 - B
83 - B
...
```

```js
*/
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

for(i = 60; i <= 100; i++){
  console.log(i + " - " + assignGrade(i));
}
//Given an integer N draw a square of N x N asterisks. Look at the examples.

let n = 4;
let string = " "
for(i = 0; i < n; i++){


    string += "*"
}
for(j =0; j < n; j++){


  console.log(string)}


for(i = 1;i<=10;i++){
  for(j = 1; j <= 10;j++){
    console.log(i + " * " + j + " = " + (i * j))
  }
}

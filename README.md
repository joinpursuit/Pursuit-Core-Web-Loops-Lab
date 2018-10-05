# Loop Exercises

1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.

let num = 10
while (num > 1){
  console.log (num)
  num = num - 1
}

let a = 10
for (let num = a; num > 1; num--){
  console.log (num)
}


2. Write a `while` loop and a `for` loop that takes the variable "num", and iterates over all numbers from 0 to "num".
let num = 10
let a = 0
while ( a <= num ){
if (a%2 === 0 ) {
  console.log (a + " THIS IS A EVEN NUMBER")}
  else
  {
    console.log (a + "This is a ODD NUMBER")
  }
a++
}

for (num = 10; num >= 0; num--){
if (num%2 === 0){
  console.log (num + " this is a even number")}
  else
  {
    console.log (num + " this is a odd ")
  }
}




3. Write a `while` loop and a `for` loop that takes the variable "num" and iterates over all numbers from 0 to "num".
For each iteration of the loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

let num = 10
let a = 0
while ( a <= num ){
  console.log (a * 8)
a++
}

for (let num = 0; num <= 10; num++){
    console.log (num * 8)}

_Bonus_ think of another way to solve it.
  <details>
    <summary>
      Hint
    </summary>
    Find the final number and increment the loop by 9.
  </details>



4. Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.

for (let i = 0; i <=100; i = i + 1)
{
	if ( i % 3 === 0 ) {
		console.log("Fizz")
	}
	else ( i % 5 === 0 ){
		console.log ("Buzz")
}

5. Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).

for (let i = 0; i <=100; i = i + 1)
{
	if ( i % 3 ===0 && i % 5 === 0 ) {
		console.log("FizzBuzz")
	}
	else if ( i % 5 === 0 ){
		console.log ("Buzz")
	}
  else if ( i % 3 === 0 )
	{
		console.log ("Fizz")
	}
}


Bonus:

1. Write a program that would log the lyrics of the song 99 Bottles of Beer. This is the first verse of the song:

for (let b = 99; b >=0; b = b - 1)
{
if ( b >= 2) {
	console.log ( b + " bottles of beer on the wall")
	console.log ( b + " bottles of beer.")
	console.log ("Take one down, pass it around,")
}
if (b === 1){
console.log ( b + " bottle of beer on the wall")
console.log ( b + " bottle of beer.")
console.log ("Take one down, pass it around,")
}
if (b === 0){
console.log ( b + " bottle of beer on the wall")
console.log ( b + " bottle of beer.")
console.log ("No more bottle of beer on the wall.")
}
}



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

for (let g = 100; g >=60; g = g - 1)
{
if ( g >= 60) {
console.log ( g + " -  " + assignGrade(g))}}

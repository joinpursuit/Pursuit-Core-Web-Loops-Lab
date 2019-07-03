//Write a while loop and a for loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.
for (let num = 7; num > 0; num--) {
  console.log(num);
}

console.log('-------------------');
let numw = 7;
while (numw <= 7 && numw > 0) {
  //if (numw
  console.log(numw);

  numw-- ;
}

//Write a while loop and a for loop that takes the variable "max", and iterates over all numbers from 0 to "max". For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

let max = 4;
while (max <= 100 && max >= 1) {
  if(max % 2 != 0) {
    console.log(max + ' is odd');
}
  else  {
    console.log(max + ' is even');
}
  max --;
}

for (let max = 4; max > 0; max--) {
  if ( max % 2 !== 0){
    console.log(max + ' odd');
  }else {
    console.log(max + ' is even');
  }
}

//Write a while loop and a for loop that takes the variable "x" and iterates over all numbers from 0 to "x". For each iteration of the loop, it will multiply the number of "x" by 9 and log the result (e.g. "2 * 9 = 18"). Bonus think of another way to solve it.
for(let z = 10; z > 0; z-- ) {
  if(z != 0 ) {
    console.log(z + ' * 9 is ' + z * 9 );
  }
}

let z = 10
while(z != 0) {
  console.log(z + ' * 9 is ' + z * 9);
  z--;
}

//Write code that prints/logs all the numbers that end in a 5 from 1 to 100, exclusive.
for (let y = 0; y <=100; y += 5) {
    if (y % 5 === 0 && y % 10 !== 0) {
    console.log(y);
  }
}


//Without running/executing your code, how many times will the loop below run? Explain why.





//Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
for (let r = 1; r <=100; r++) {
  if (r % 3 === 0){
    console.log('fizz');
  }
  else if (r % 5 === 0) {
    console.log('Buzz');
  }
  else {
    console.log(r);
  }
 }

 //Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).

console.log('---------------------------------')

 for (let r = 1; r <=100; r++) {
   if (r % 3 === 0 && r % 5 !== 0){
     console.log('fizz');
   }
   else if (r % 5 === 0 && r % 3 !== 0) {
     console.log('buzz');
   }
   else if (r % 5 === 0 && r % 3 === 0){
     console.log('FizzBuzz');
   }
   else {
     console.log(r);
   }
  }

//Write a program that would log the lyrics of the song 99 Bottles of Beer. This is the first verse of the song:
for(s = 99; s >= 1; s-=1) {
  if(s > 1) {
  console.log(s + " bottles of beer on the wall," + s + "  bottles of beer.Take one down, pass it around," + (s-1) + " bottles of beer on the wall.");
}
else {
  console.log('1 bottle of beer on the wall, 1 bottle of beer.Take one down, pass it around, No more bottle of beer on the wall.')
}
}

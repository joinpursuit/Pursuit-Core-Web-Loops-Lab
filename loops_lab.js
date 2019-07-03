//Write a while loop and a for loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.

//while loop
let num = 10
while (num <= 10 && num >= 1){
  console.log(num);
  num --
}
//for loop
for (let num2 = 10; num2 <= 10 && num2 >= 1; num2 --){
  console.log(num2);
}

//Write a while loop and a for loop that takes the variable "max", and iterates over all numbers from 0 to "max". For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

//while loop
/* let max = 20
while (max <= 20 && max >= 0){
 if (max % 2 === 0){
   console.log(max + ' is even');
 }else{
   console.log(max + ' is odd');
 } max --
}
//for loop
for (let max2 = 20; max2 <= 20; max2 --){
  if (max2 === 0){
    break;
  } else if (max2 % 2 !== 0){
    console.log(max2 + 'is odd');
  }else { console.log(max2 + 'is even');
  }
}
//Write a while loop and a for loop that takes the variable "x" and iterates over all numbers from 0 to "x". For each iteration of the loop,it will multiply the number of "x" by 9 and log the result (e.g. "2 * 9 = 18").

//while loop
let x = 0
let y = 0
while(x <= 45){
  if (x === 0){
    console.log(x + ' * 9 is equal to ' + x * 9);
  }else{
    console.log(y + ' * 9 is equal to' + x );
  } x += 9
  y++
}
//for loop
for (let x2 = 0; x2 >= 0; x2 += 1){
  if (x2 === 6){
  break;
}else if(x2=== 0){
  console.log(x2 + ' * 9 is equal to' + x2);
}else{
  console.log(x2 + ' * 9 is equal to' + x2 * 9);
 }
}
//Write code that prints/logs all the numbers that end in a 5 from 1 to 100,
for (let x = 1; x <= 100; x += 1){
  if(x % 5 === 0 && x % 10 !== 0){
    console.log(x);
  }
}
//Without running/executing your code, how many times will the loop below run? Explain why.

let i = 5;

while (i > 3) {
    i += 1
}

// Your explanation here: This code would just run on forever
// because it would continue to add 1 to all numbers greater than 3

//Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.
for (let num3 = 1; num3 <= 100; num3 ++){
  if (num3 % 3 === 0){
    console.log('Fizz');
  }else if (num3 % 5 === 0 && num3 % 3 !== 0){
    console.log('Buzz');
  }else{
    console.log(num3);
  }
}
//Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).
/*for (let num3 = 1; num3 <= 100; num3 ++){
  if (num3 % 5 === 0 && num3 % 3 === 0){
    console.log('FizzBuzz');
  }else if(num3 % 3 === 0){
    console.log('Fizz');
  }else if(num3 % 5 === 0 && num3 % 3 !== 0){
    console.log('Buzz');
  }else {
    console.log(num3);
  }
}

//Write a program that would log the lyrics of the song 99 Bottles of Beer.

for (let beer = 100; beer <= 100 && beer >= 1; beer -= 1){
  if(beer >= 3){
    console.log(beer + ' bottles of beer on the wall, ' + beer + ' bottles of beer. Take one down, pass it around, '  + [beer - 1] + ' bottles of beer on the wall.');
  } else if (beer === 2){
    console.log(beer + ' bottles of beer on the wall, ' + beer + ' bottles of beer. ' +
    ' Take one down, pass it around, ' + [beer - 1] + ' bottle of beer on the wall. ');
  }else{
    console.log('1 bottle of beer on the wall, 1 bottle of beer.Take one down, pass it around, No more bottle of beer on the wall.');
  }
}

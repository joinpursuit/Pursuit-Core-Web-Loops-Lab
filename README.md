# Loop Exercises

// 1. Write a `while` loop and a `for` loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.

let num = 10;
while (num >= 1){
  console.log('The number is: ' + num)
  num -= 1
}

for (let i = 10; i >= 1; i-- ){
  console.log(i)
}

// 2. Write a `while` loop and a `for` loop that takes the variable "num", and iterates over all numbers from 0 to "num".
For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

let num = 0;
while (num <= 10){
  if(num % 2 === 0){
    console.log(num + ' is even')
  }else{
    console.log(num + ' is odd')
  }
  num++
}


for (let i = 0; i <=15; i++){
  if (i % 2 === 0){
    console.log(i + ' is even')
  }else {
    console.log(i + ' is odd')
  }
}




// 3. Write a `while` loop and a `for` loop that takes the variable "num" and iterates over all numbers from 0 to "num".
For each iteration of the loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").


let num = 7;
for ( i = 0; i <= num; i++)
console.log(i + '*' + '9' + '=' + i * 9)

let num = 0;
while (num <= 7){
  console.log(num + '*' + '9' + '=' + num * 9)
  num++
}

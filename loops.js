// ## Problem One 

// a. Write a `while` loop that takes the variable `num` and logs all the numbers, descending, between "num" and 1
let num = 77;
while (num >=1) {
    console.log(num);
    num -= 1;
}


// b. Write a `for` loop that takes the variable `num` and logs all the numbers, descending, between "num" and 1

for (num2 = 50; num2 >= 1; num2 -= 1){
    console.log(num2);
}

// ## problem two

// a. Write a `while` loop that takes the variable "max", and iterates over all numbers from 0 to "max". 
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")
let max = 50
while (max >= 0) {
    console.log(max);
    if (max % 2 === 0) {
        console.log("this is even")
    }
    else {
        console.log("this is odd")
    
    }
    max -= 1
}
// b. Use a `for` loop instead

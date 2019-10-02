//Problem Set 1
//a. Write a `while` loop that takes the variable `num` and
// logs all the numbers, descending, between "num" and 1
let num = 5;

while ( num >= 1) { 
    console.log("the number is: " + num)
    num -= 1
}

// b. Write a `for` loop that takes the variable `num`
// and logs all the numbers, descending, between "num" and 1


for (let num2 = 10; num2 >= 1; num2 -= 1){

    console.log ("The number is: "+num2);
};

// Problem Set 2
//a. Write a `while` loop that takes the variable "max", and iterates over all numbers from 0 to "max". 
//For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")
let max = 8

let counter = 0


while (counter <= max) {
    if (counter%2 === 0){
    console.log(counter + " is even")
    } else[
        console.log(counter + " is odd")
    ]
        counter += 1

}

// b. Use a `for` loop instead.

let max2 = 10

for (let counter2 = 0;counter2 <= max; counter2 += 1){

    if (counter2 % 2 === 0){
        console.log(counter2 + " is even")
        } else[
            console.log(counter2 + " is odd")
        ]
}

// Problem Set 3
//a. Write a `while` loop that takes the variable "x" and iterates over all numbers 
//from 0 to "x". For each iteration of the loop, it will multiply the number of "x" 
//by 9 and log the result 

let y = 0;
let x = 9;

while (y <= x) {

    console.log(y + " * 9 =" + y * 9)

    y += 1
}

//b. Use a `for` loop instead.

let y2 = 9

for(let x2 = 0; x2 >= y2; x2++ ){

    console.log(y + " * 9 =" + y * 9)

}

//Problem Set 4
//Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.

for (let numNum = 5; numNum <=100; numNum += 10 ){
        
    
        console.log(numNum)

    
}


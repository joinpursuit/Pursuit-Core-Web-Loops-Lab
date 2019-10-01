// ## Exercises

// ## Problem One 

// a. Write a `while` loop that takes the variable `num` and logs all the numbers, descending, between "num" and 1

// b. Write a `for` loop that takes the variable `num` and logs all the numbers, descending, between "num" and 1

// Example:

// ```js
// let num = 8

// **** A ****
let num = 50
while (num > 2){
    num--
    console.log(num)
}

// OR *** Unsure if we should include or exlcude num and 1 

let numB = 50
while (numB >= 1){
    console.log(numB)
    numB--
}
// **** B ****
for(let numC = 30; numC >= 1; numC--){
    console.log(numC)
}
// Problem One 

//a.
let num = 10
while (num >= 1) {
    console.log(num)
    num--
}

//b.
for (let i = 10; i >= 1; i--) {
    console.log(i)
}

// Problem Two

//a.
let max = 3
let number = 0
while (number <= max) {
    if (number % 2 === 0){
        console.log(number + ' is even')
    } else {
        console.log(number + ' is odd')
    }
    number++
}

//b.
for (let i = 0; i <= 3; i++) {
    if (i % 2 === 0){
        console.log(i + ' is even')
    } else {
        console.log(i + ' is odd')
    }
}

//Problem 3

//a.
let x = 5
let y = 0

while (y <= x) {
    y * 9
    console.log(y + " * 9 " + "= " + y * 9)
    y++
}

//b.
for (let i = 0; i <= 5; i++){
    console.log(i + " * 9 " + "= " + i * 9)
}
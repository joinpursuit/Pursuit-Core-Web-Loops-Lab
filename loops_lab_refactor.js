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
    if (number % 2 === 0) {
        console.log(number + ' is even')
    } else {
        console.log(number + ' is odd')
    }
    number++
}

//b.
for (let i = 0; i <= 3; i++) {
    if (i % 2 === 0) {
        console.log(i + ' is even')
    } else {
        console.log(i + ' is odd')
    }
}

//Problem Three

//a.
let x = 5
let y = 0

while (y <= x) {
    y * 9
    console.log(y + " * 9 " + "= " + y * 9)
    y++
}

//b.
for (let i = 0; i <= 5; i++) {
    console.log(i + " * 9 " + "= " + i * 9)
}

//Problem Four

for (let i = 1; i <= 100; i++) {
    if (i % 10 !== 0 && i % 5 === 0) {
        console.log(i)
    }
}

//Problem Five
 
//The loop will run infinitely because 5 (the initialization) is greater than 3. The initialized variable increases by 1, which makes the conditional statement always true.

//Problem Six

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}
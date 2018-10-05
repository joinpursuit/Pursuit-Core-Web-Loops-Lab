// Question 1
let num = 10;
while (num >= 1) {
  console.log(num);
  num--;
}

let num = 10;
for (let i = num; i >= 1; i--) {
  console.log(i);
}

//Question 2
let num = 10,
  count = 0;
while (count <= num) {
  if (count % 2 === 0) console.log(count + " is even");
  else console.log(count + " is odd");
  count++;
}

let num = 10;
for (let i = 0; i <= num; i++) {
  if (i % 2 === 0) console.log(i + " is even");
  else console.log(i + " is odd");
}

// Question 3
let num = 10,
  count = 0;
while (count <= num) {
  console.log(count + " * 9 = " + count * 9);
  count++;
}

let num = 10;
for (let i = 0; i <= num; i++) {
  console.log(i + " * 9 = " + i * 9);
}

// Question 4
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

// Question 5
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

// Bonus 1
let bottlesOfBeer = 99;
for (let i = 99; i > 0; i--) {
  if (i > 2) {
    console.log(i + " bottles of beer on the wall,");
    console.log(i + " bottles of beer.");
    console.log("Take one down, pass it around,");
    console.log(i - 1 + " bottles of beer on the wall.");
  } else if (i === 2) {
    console.log(i + " bottles of beer on the wall,");
    console.log(i + " bottles of beer.");
    console.log("Take one down, pass it around,");
    console.log(i - 1 + " bottle of beer on the wall.");
  } else if (i === 1) {
    console.log(i + " bottle of beer on the wall,");
    console.log(i + " bottle of beer.");
    console.log("Take one down, pass it around,");
    console.log("No more bottle of beer on the wall.");
  }
}

// Bonus 2
function logGrade() {
  for (let score = 60; score <= 100; score++) {
    if (score > 90) {
      console.log(score + " - " + "A");
    } else if (score > 80) {
      console.log(score + " - " + "B");
    } else if (score > 70) {
      console.log(score + " - " + "C");
    } else if (score >= 65) {
      console.log(score + " - " + "D");
    } else {
      console.log(score + " - " + "F");
    }
  }
}
logGrade();

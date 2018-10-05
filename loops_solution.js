//Question 1
/*
let num = 40;
while (num > 1) {
  console.log(num);
  num --;
}

for (let num = 40; num > 1; num --) {
  console.log(num);
}

//Question 2

let num = 0;
while (num < 50) {
  if(num % 2) {
    console.log(num + " is odd.")
  } else {
    console.log(num + " is even.")
  }
  num ++;
}

for (let num = 0; num < 50; num ++) {
  if(num % 2) {
    console.log(num + " is odd.")
  } else {
    console.log(num + " is even.")
  }
}

//Question 3

let num = 0;
while (num < 50) {
  console.log(num * 9);
  num ++;
}

for (let num = 0; num < 50; num ++) {
  console.log(num * 9);
}

//Question 4

for (let num = 1; num < 100; num ++ ){
  if (num % 3 === 0) {
    console.log("Fizz")
  } else if (num % 5 === 0) {
      console.log("Buzz")
  } else {
    console.log(num);
  }
}

//Question 5

for (let num = 1; num < 100; num ++) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz")
  } else if (num % 3 === 0){
    console.log("Fizz")
  } else if (num % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(num);
  }
}

// Bonus 1

for (let numBeer = 99; numBeer > 0; numBeer --) {
  if (numBeer === 2) {
    console.log(
      numBeer + " bottles of beer on the wall,\n" +
      numBeer + " bottles of beer.\n" +
      "Take one down, pass it around,\n" +
      (numBeer - 1) + " bottle of beer on the wall."
    )
  } else if (numBeer === 1) {
    console.log(
      numBeer + " bottle of beer on the wall,\n" +
      numBeer + " bottle of beer.\n" +
      "Take one down, pass it around,\n" +
      "No more bottle of beer on the wall."
    )
  } else {
    console.log(
      numBeer + " bottles of beer on the wall,\n" +
      numBeer + " bottles of beer.\n" +
      "Take one down, pass it around,\n" +
      (numBeer - 1) + " bottles of beer on the wall."
    )
  }
}

// Bonus 2

for (let score = 60; score <= 100; score ++) {
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
      }
  }
  console.log(score + "-" + assignGrade(score));
}
*/

// Question 1:

let num = 50;

while (num > 0) {
  console.log(num);
  num--;
}

//

let num2 = 25;

for (let i = num2; i > 0; i--) {
  console.log(i);
}


// Question 2:


let num3 = 12;

while (0 <= num3) {
  if (num3 % 2 === 0) {
    console.log(num3 + ' is even.');
  } else { console.log(num3 + ' is odd.');
  }
  num3--;
  }

//

let num4 = 0;

  for (let s = num4; s <= 15; s++) {
    if (s % 2 === 0) {
      console.log(s + ' is even.');
    } else {
      console.log(s + ' is odd.');
    }
    }


// Question 3:

let mult = 9;

for (let num5 = 0; num5 <= 18; num5++) {
  let multiple = mult * num5;
  console.log(multiple);
}


let num6 = 0;

while (num6 < 20) {
  let sum = num6*9;
  num6++;
  console.log(sum);

}

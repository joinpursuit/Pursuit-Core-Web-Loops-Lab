


//-------------------------------------
let num = 5;
while (num < 25) {
  console.log(num);
  num += 1;
}

for (let number = 0; number <= 10; number += 1) {
  if (number % 2 !== 0) {
    console.log(number + ' num is odd');
  } else {
    console.log(number + ' num is even');
  }
}

let bynine = 99;
while (bynine > 0) {
  if (bynine % 9 !== 0) {
    console.log(bynine  + ' is not divisible by 9');
  } else {
    console.log(bynine + 'is divisible by 9');
  } bynine -= 1;
}

for (let i = 5; i <= 100; i += 10) {
  console.log(i);
}

//5.It would run infinite

let str1 = '';
for (div = 0; div <= 33; div += 1) {
  if (div % 5) {
    str1 += 'FIZZ'; {
      console.log(str1);
    }
  } else {
    str1 += 'BUZZ'; {
      console.log(str1);
    }
  }
}

//
let str2 = '';
for (let beer = 99; beer > 1; beer -= 1) {
  if (beer % 2 === 0) {
    str2 += beer + 'bottle of beer on the wall ';
    console.log(str2);
  } else {
    str2 += beer + 'bottles of beer on the wall';
    console.log(str2);
  }
}

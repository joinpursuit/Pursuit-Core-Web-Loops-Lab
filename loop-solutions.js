// 1)

let num = 100;

while (num >= 1) {
  console.log(num);
  num--;
};

// 1.1)

for (let num = 100; num >= 1; num--) {
  console.log(num);
};

// 2)

let num = 0;

while (num <= 100) {
  if (num % 2 === 0) {
    console.log(num + ' is even');
  } else {
    console.log(num + ' is odd');
  };
  num++;
};

// 2.1)

for (let num = 0; num <= 100; num ++) {
  if (num % 2 === 0) {
    console.log(num + ' is even');
  } else {
    console.log(num + ' is odd');
  }
}

// 3)

let num = 20;
while (0 <= num) {
  console.log(num * 9);
  num--;
};

// 3.1)

for (let num = 20; 0 <= num; num--) {
  console.log(num * 9);
}

// 3.2 Bonus)

for (let num = 0; num <= 180; num+=9) {
  console.log(num);
}

// 4)

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz " + i);
  } else if (i % 5 === 0) {
    console.log("Buzz " + i);
  };
};

// 5)

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz' + i);
  } else if (i % 3 === 0) {
    console.log('Fizz ' + i);
  } else if (i % 5 === 0) {
    console.log('Buzz ' + i);
  }
};

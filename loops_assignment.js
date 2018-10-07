/*1)
let num = 10;
while(num > 0){
  console.log(num);
  num--;
}


for (let num = 10; num > 0; num--){
  console.log(num);
}

2.
let num = 0;
while(num < 11){
  console.log(num);
  num++;
}

for (let num = 0; num < 11; num++){
  console.log(num);
}

3.
let num = 0
while (num < 11){
  console.log(num *9);
  num++
}

for (num = 0; num <11; num++){
  console.log(num *9)
}

4.
for (let num = 1; num < 101; num++){
  if (num %3 === 0){
  console.log('Fizz')
  }else if (num %5 === 0){
  console.log('Buzz')
  }else{
  console.log(num)
  }
}
*/

5.
for (let num = 1; num < 101; num++){
  if (num %3 === 0 && num %5 === 0){
  console.log("FizzBuzz")
  }else if (num %3 === 0){
  console.log('Fizz')
  }else if (num %5 === 0){
  console.log('Buzz')
  }else{
  console.log(num)
  }
}

//Loops lab Assignment

//1.
// let nums = 30
// while (nums >= 0) {
//   console.log(nums)
//   nums -= 1
// }

// for (let nums = 30; nums >= 0; nums -= 1) {
//   console.log(nums)
// }


// //2.
// let max = 0;
// while (max <= 30) {
//   max % 2 !== 0
//   ? console.log(max + ' is odd')
//   : console.log(max + ' is even');
//   max += 1;
// }


// for (let pNum = 0; pNum <= 30; pNum++) {
//   if (pNum % 2 !== 0) {
//     console.log(pNum + ' is odd')
//     } else {console.log(pNum + ' is even')
//   }
// }


//3.
// let thisNum = 1
// let multNum = 9
//
// while(thisNum <= 9) {
//     let resNum = thisNum * multNum;
//     console.log(thisNum + ' * 9 = ' + resNum);
//     thisNum++;
// }

// for (let thisNum = 1; thisNum <= 9; thisNum++) {
//   for (let multNum = 9; multNum <= 9; multNum++) {
//     let resNum = thisNum * multNum;
//     console.log(thisNum + ' * 9 = ' + resNum);
//   }
// }
//DIFFERENT WAYS TO SOLVE QUESTION
// for (let num = 1; num <= 36; num +=1)
// if (num % 9 == 0){
//  let x = num / 9
// console.log(x + " " + "* 9 =" + " " + num)
// }

// for(let y = 1, z = 9; y <= 19; y++){
//  let res = y * z;
//  console.log(y + ' * 9 = ' + res);
// }


// //4.
// for (let ehh = 5; ehh <= 100; ehh+= 5) {
//   if (ehh % 2 === 0) {
//     }else {
//       console.log(ehh);
//   }
// }

////5.
//This code is not going to run because there was no established output due to there being no console.log().


////6.
// for (let nuNu = 1; nuNu < 100; nuNu++) {
//   if (nuNu % 3 === 0) console.log('Fizz');
//   else if (nuNu % 5 === 0) console.log('Buzz');
//   else console.log(nuNu);
// }


//// 7.
// for (let nuNuNu = 1; nuNuNu < 100; nuNuNu++) {
//   if (nuNuNu % 3 === 0 && nuNuNu % 5 === 0){
//     console.log('FizzBuzz')
//   } else if (nuNuNu % 3 === 0) {
//     console.log('Fizz');
//   } else if (nuNuNu % 5 === 0) {
//     console.log('Buzz')
//   }else console.log(nuNuNu);
// }



///#####BONUS######

//1.
// for (let dBotNum = 9; dBotNum >= 0; dBotNum--) {
//   for (let botNum = 10; botNum >= 1; botNum--){
//     console.log(botNum +  ' bottles of beer on the wall,' + botNum + ' bottles of beer.Take one down and pass it around, ' + dBotNum + ' bottles of beer on the wall.')
//   }
// }
// for(let botNum = 99, dBotNum = 98; botNum >= 1; botNum--, dBotNum-- ){
//  console.log(botNum +  ' bottles of beer on the wall,' + botNum + ' bottles of beer.Take one down and pass it around, ' + dBotNum + ' bottles of beer on the wall.');
// }


//######UNFINISHED CODE#########
// //2.
// function assignGrade(score) {
//     if (score >= 90) {
//         return 'A';
//     } else if (score >= 80) {
//         return 'B';
//     } else if (score >= 70) {
//         return 'C';
//     } else if (score >= 65) {
//         return 'D';
//     } else {
//         return 'F';
//     };
// };
// let grade = assignGrade(80)
// for (let assignGrade = 100; assignGrade <= 60; assignGrade--){
// console.log(grade)
// }

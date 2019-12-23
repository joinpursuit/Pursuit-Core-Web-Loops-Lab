
// // // //write a loop that sums all the numbers from 5 to 15 

// // // let sum = 0
// // // for (let i = 5; i <= 15; i += 1) {
// // //     sum += i
// // //     console.log(sum)
// // // }
 

// // // let sum = 0
// // //  let i = 5; //intialization outside the loop
// // // while(i <= 15){
// // //     sum += i
// // //     i += 1
// // // }

// // let product = 1
// // let i = 9
// // for (let i = 9; i >= 1; i--){
// //     product *= i
// // }
// // console.log(product)

// // let product = 1
// // let i = 9 
// // while (i >= 1){
// //     product *= i
// //     i =i -1
// // }
// // console.log (product)

// // for (let i = 1; i <= 20; i++) {
// //     console.log(i)
// //     if (i === 17) {
// //         break;
// //     }
// // }

// // let i = 1
// // while (i>=20{
// //     i+=1
// // })

// // for (i = 100; i>=0; i--){
// //     if (i % 3 === 0 && i % 5 === 0){
// //         console.log(i)
// //     }
// //     else if (i % 9 === 0){
// //     console.log(`crazy 9s ${i}`)
// //     }
// // }
// // // let i = 100;
// // // while (i>=0){
// // //     console.log(i);
// // //     i--;
// // // }

// // for(i=100; i>=0; i--) {
// //     if (i % 10 === 0){
// //         console.log(i)
// //     }
// // }

// // SUM OF TWO ARRAYS AND COMPARING IT

// //  Write a code block that examines the sum of two arrays and 
// //  logs the array with the bigger sum. 
// // const arr1 = [4, 5, 26, 34, 3, 6, 7];
// // const arr2 = [5, 12, 13, 13, 15, 4, 7, 8, 9];

// // let sum1 = 0
// // let sum2 = 0

// // for(let i = 0; i < arr1.length; i++) {
// //     sum =+ arr1[i]
// // }
// // for(let i = 0; i < arr2.length; i++) { //this problem is the sum of two arrays. at the bottom is the same but with fuction
// //     sum =+ arr2[i]
// // }
// // console.log(sum1 > sum2 ? arr1 : arr2)

// // DRY Don't repeat yourself

// // function sumArray(arr) {
// //  let sum = 0;
// // for(let i = 0; i < arr1.length; i++){
// //     sum += arr[i];
// //  }
// // console.log(sum); // here RETURN must be put in order to get the result. otherwise it will be undefined
// // }

// // // // let sum = 0;
// // // for(let i = 0; i < arr1.length; i++){ so he took al this conde and put it inside the function
// // //     sum += arr[i]
// // } console.log(sum)

// // write a fuinction that takes in a name and returns a greeting to that name

// // function greeting(name) {
    
// //     return "hello" + name
// // }console.log (greeting(" wil"))

// // write a function that takes in two arguments and returns the sum of them

// // function greeting(name,lastName) {
// //     return "hello" + name + lastName
// // }
// // console.log(greeting('wil ', ' santos'))
// // functions should only do one thing!
// // functions can call other function!


// // write a function called double square that returns a number thats been double and then 
// // squared. Then try to break it into more than one function

// // function doubleSquare(num) {
// //     let doubled = num * 2
// //     return doubled * doubled; // Math.pow(double,2) // doubled**2
// // } 
// // console.log(doubleSquare(4))

// // let count = 0;
// // function incrementCount() { // a function for its side effect
// //     count ++; // count already exists in the scope that the function was declared im 
// // }console.log(count)

// // function double(num) {
// //     return num * 2;
// // }
// // function square(num) {
// //     return num * num
// // }
// // function doubleSquare(num) {
// //     return square(double(num));
// // }
// // console.log(doubleSquare(4))

// // Warm up:

// function arrEven(arr){
//     let arrEven =[];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0 ) { // because you want to check if the numbers at index i are even
//             arrEven.push(arr[i]) } // because you want to push the even n umbers in the array
                
//     } 
//     return arrEven

// } 
// console.log(arrEven([1,6,7,99,65,66,80]))
// console.log(arrEven([80,64,33,41]))
// // once a function returns, that function is over
// function evenOrOdd(num){
//     if (num % 2 === 1){
//         return "number is odd"
//     } else {
//         return "number is even"
//     }
//     return "neither even nor odd";
// } console.log(evenOrOdd(14)) // here corey tried with the strin "cat", and it stayed the same // also once
// it hits the return its Over. meaning that it does not mattter if you put more returns, ater it meets the condition

// function sayHello(){
//     return "hello" // ES5
// }
// const sayHello = (name) => { // ES6
//     return "Hello" + name;
// } 
// console.log(sayHello("wil")) // this is ES6 way to do functions now, note the word function is not there

// const sayHello = (name) => "hello" + name ; // implicit rerturn

// console.log(sayHello('WIL')) // THIS IS IMPLICIT RETURN. COREY DOES NOT WANT IT

// const sum = (num1, num2) => { // done in es6 syntax. 
//     return num1 + num2
// }
// console.log (sum(5,6))

// const sum = (num1, num2) => { // done in es6 syntax. 
//     return num1 + num2
// }
//   console.log (sum(5,6))

  // rewrite double square problem on the top

// function double(num) {
//     return num * 2;
// }
// function square(num) {
//     return num * num
// }
// function doubleSquare(num) {
//     return square(double(num));
// }
// console.log(doubleSquare(4))

// const double = (num) => {
//     return num * 2
// } 
// const square = (num) => {
//     return num * num
// } 
// const doubleSquare = (num) => {
//     return square(doubleSquare(num))

// } 
// console.log (doubleSquare(4))

//write a function that takes in an array and returns the product of the array [1,2,3,4] // 6
//  const prod = (arr) => {
//      result = 1
//     for (let i = 0; i < arr.length; i++) {
//         result *= arr[i] // is the same as product = product * arr[i]
        

//     }
//     return result;
//  } 
//  console.log(prod([1,2,3,4]));

// 10/28/19

// Warm up: Write a function that takes in an array
// of words and returns a new array with only works of
// even length.

// const wordArr = (arr) => {
//     let newArr = [];
    
// }


// Write a function that takes in an array and returns
// the second largest element in the array

// const noVowels = (str) => {
//   let newStr = ""
//   for (lei i = 0; i < newStr.length; i++){
//     if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
//       newStr += str[i]
//     } 
//   }
//   return newStr
// }
//   console.log(noVowels("hello"))

//   // /revolver class
//   // create a revolver class intiate with six chambers
//   // be able to spin barrel
//   // cxreate a function called add a bullet

  const myForEach = (arr,cb) => {
    for( let i =0; i<arr.length; i++) {
      cb(arr[i])
    }
  }
  const product = (arr) => {
    let prod = 1
    myForEach(arr,(num) => prod *= num)
    return prod
  }
  console.log(prod([1,2,3,4,5]))
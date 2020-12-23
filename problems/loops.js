/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a while loop
 * @param {number}
 * @returns {number[]}
 */
function oneTillDoneWhileLoop(num) {
  let i = 1
  let newArr = []
  while(i <= num){
    newArr.push(i)
    i++
  }
  return newArr
}
oneTillDoneWhileLoop(3)
/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */
function oneTillDoneForLoop(num) {
  let newArr = []
  for(let i = 1; i <= num; i++){
    newArr.push(i)
  }
  return newArr
}
oneTillDoneForLoop(3)
/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be a while loop
 * @param {number}
 * @returns {number[]}
 */
function doneToZeroWhileLoop(num) {
  let newArr = []
  let i = 0
  while(i < num){
    newArr.push(num)
    num--
  }
  return newArr
}
doneToZeroWhileLoop(5)
/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */
function doneToZeroForLoop(num) {
  let newArr = []
  for(let i = 0; i < num; num--){
    newArr.push(num)
  }
  return newArr
}
doneToZeroForLoop(5)
/**
 * Takes in the variable "max", and iterates over all numbers from 0 to "max".
 *  For each iteration, it will check if the current number is even or odd and add the result to a new array
 *  (e.g. "2 is even")
 * Must be done using a while loop

 * @param {number} max number
 * @returns {string[]} ["0 is even", "1 is odd", "2 is even", "3 is odd"] if max was 3
 */
function evenAndOddWhileLoop(max) {
  let newArr = []
  let i = 0
  while(i <= max){
    if(i % 2 === 0){
      newArr.push(i + " is even")
    } else {
      newArr.push(i + " is odd")
    }
    i++
  }
  return newArr
}
evenAndOddWhileLoop(5)

/**
 * Takes in the variable "max", and iterates over all numbers from 0 to "max".
 *  For each iteration, it will check if the current number is even or odd and add the result to a new array
 *  (e.g. "2 is even")
 * Must be done using a for loop

 * @param {number} max number
 * @returns {string[]} ["0 is even", "1 is odd", "2 is even", "3 is odd"] if max was 3
 */
function evenAndOddForLoop(max) {
  let newArr = []
  for(let i = 0; i <= max; i++){
    if(i % 2 === 0){
      newArr.push(i + " is even")
    } else {
      newArr.push(i + " is odd")
    }
  }
  return newArr
}
evenAndOddForLoop(5)
/**
 * Takes in the variable "x", and iterates over all numbers from 0 to "x".
 *  For each iteration, it will multiply the current number by 9 and store the result in an array.
 * Must be done using a while loop

 * @param {number} x number
 * @returns {number[]} [0, 9, 18, 27, 36, 45] if x was 5.
* 0 * 9 = 0
* 1 * 9 = 9
* 2 * 9 = 18
* 3 * 9 = 27
* 4 * 9 = 36
* 5 * 9 = 45
 */
function tillXTimes9WhileLoop(x) {
  let newArr = []
  let i = 0
  while(i <= x){
    newArr.push(i * 9)
    i++
  }
  return newArr
}
tillXTimes9WhileLoop(5)
/**
 * Takes in the variable "x", and iterates over all numbers from 0 to "x".
 *  For each iteration, it will multiply the current number by 9 and store the result in an array.
 * Must be done using a for loop

 * @param {number} x number
 * @returns {number[]} [0, 9, 18, 27, 36, 45] if x was 5.
* 0 * 9 = 0
* 1 * 9 = 9
* 2 * 9 = 18
* 3 * 9 = 27
* 4 * 9 = 36
* 5 * 9 = 45
 */
function tillXTimes9ForLoop(x) {
  let newArr = []
  for(let i = 0; i <= x; i++){
    newArr.push(i * 9)
  }
  return newArr
}
tillXTimes9ForLoop(5)
/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a while loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */
function endsWithFiveWhileLoop() {
  let newArr = []
  let i = 0
  while(i < 100){
    if(i % 5 === 0 && i % 10 !== 0){
      newArr.push(i)
    }
    i++
  }
  return newArr
}
endsWithFiveWhileLoop()
/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a for loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */
function endsWithFiveForLoop() {
  let newArr =[]
  for(let i = 5; i < 100; i += 10){
    newArr.push(i)
  }
  return newArr
}
endsWithFiveForLoop()
// Try refactoring the code above to increment your i by 10 and starting at 5.



/**
 Without running/executing your code, how many times will the loop below run?
  Explain why.
 */
/*
let i = 5;

while (i > 3) {
    i += 1
}
*/

/**
 * // Write your explanation here!
 *
 */

 /**
 * Returns an array with all the numbers from all the numbers from 1 to 100.
 * For numbers divisible by 3, add "Fizz" instead of the number into the array.
 * For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.

 * @returns {Array} [1, 2, "Fizz", 4, "Buzz"... 98, "Fizz", "Buzz"]

 */
function fizzBuzzPart1() {
  let newArr = []
  for(let i = 1; i <= 100; i++){
    if(i % 3 === 0){
      newArr.push('Fizz')
    } else if(i % 5 === 0 && i % 3 !== 0){
      newArr.push('Buzz')
    } else {
      newArr.push(i)
    }
  }
  return newArr
}
fizzBuzzPart1()

 /**
 * Returns an array with all the numbers from all the numbers from 1 to 100.
 * For numbers divisible by 3, add "Fizz" instead of the number into the array.
 * For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.
 * For numbers that are divisible by both 3 and 5 add "FizzBuzz" into the array.

 * @returns {Array}

 */
function fizzBuzzPart2() {
  let newArr = []
  for(let i = 1; i <= 100; i++){
    if(i % 5 === 0 && i % 3 === 0){
      newArr.push('FizzBuzz')
    } else if(i % 5 === 0 && i % 3 !== 0){
      newArr.push('Buzz')
    } else if(i % 3 === 0){
      newArr.push('Fizz')
    } else {
      newArr.push(i)
    }
  }
  return newArr
}
fizzBuzzPart2()
/**
 * Takes in range (inclusive) and returns the sum of all numbers in that range.

 * @param {number} min number
 * @param {number} max number
 * @returns {number} sum all all numbers from min to max
 */
function rangeSum(min, max) {
  let sum = 0
  for(let i = min; i <= max; i++){
    sum += i
  }
  return sum
}
rangeSum()
/**
 * Takes in range (inclusive) and returns an array in decreasing order of all odd numbers
 * in that range

 * @param {number} min number
 * @param {number} max number
 * @returns {number[]} all odd numbers in range decreasing
 */
function rangeOdd(min, max) {
  let newArr = []
  for(let i = min; i <= max; max--){
    if(max % 2 !== 0){
      newArr.push(max)
    }
  }
  return newArr
}
rangeOdd(3,7)
/**
 * Takes in range (inclusive) and returns an array in increasing order of every other element.


 * @param {number} min number
 * @param {number} max number
 * @returns {number[]} includes every other element
 */
function rangeEveryOther(min, max) {
  let newArr = []
  for(let i = min; i <= max; i += 2){
    newArr.push(i)
  }
  return newArr
}
rangeEveryOther(2,4)
/**
 * Takes in an array and a target.
 * Determines whether or not that target exists in the array
 * Must be written with a while loop
 * Must NOT contain built in includes method.
 * @param {Array} elements
 * @param {number|string} target
 * @returns {boolean} true if the array contains our target, otherwise false
 */
function containsWhileLoop(elements, target) {
  let i = 0
  while(i < elements.length){
    if(elements[i] === target){
      return true
    }
    i++
  }
  return false
}
/**
 * Takes in an array and a target.
 * Determines whether or not that target exists in the array
 * Must be written with a for loop
 * Must NOT contain built in includes method.
 * @param {Array} elements
 * @param {number|string} target
 * @returns {boolean} true if the array contains our target, otherwise false
 */
function containsForLoop(elements, target) {
  for(let i = 0; i < elements.length; i++){
    if(elements[i] === target){
      return true
    }
  }
  return false
}
containsForLoop([1,2,3,4], 2)
/**
 * Takes in an array and a target.
 * Determines how many times the target exists in the array
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} number of occurances
 */
function targetCount(elements, target) {
  let count = 0
  for(let i = 0; i < elements.length; i++){
    if(elements[i] === target){
      count++
    }
  }
  return count
}
targetCount([1,2,3], 4)
/**
 * Takes in an array and a target.
 * Determines the first index that the target is found at.
 * If the target is not found it should return -1
 * NOT allowed to use built in method indexOf
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} first index found.
 */
function firstIndexFound(elements, target) {
  for(let i = 0; i <= elements.length; i++){
    if(elements[i] === target) {
      return i
    }
  }
  return -1
}
firstIndexFound([1,2,3], 5)
/**
 * Takes in an array and a target.
 * Determines the last index that the target is found at.
 * If the target is not found it should return -1
 * NOT allowed to use built in method lastIndexOf
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} last index found.
 */
function lastIndexFound(elements, target) {
  for(let i = elements.length; i >= 0; i--){
    if(elements[i] === target){
      return i
    }
  }
  return -1
}
/**
 * Takes in an array.
 * Returns a new array where each element has been multiplied by its index.
 * Exp: Input [2, 2, 2] Output: [0, 2, 4] because 0 * 2, 1 * 2, and 2 * 2
 * @param {number[]} elements
 * @returns {number[]}
 */
function timesIndex(elements) {
  let newArr = []
  for(let i = 0; i < elements.length; i++){
    newArr.push(elements[i] * i)
  }
  return newArr
}
timesIndex([1,2,3])

/**
 * Takes in an array.
 * Returns a new array where each element is the cumulative sum so far.
 * Exp: Input [5, 2, 9] Output: [5, 7, 16] . 5 is the first element so added to 0.
 *  7 because 5 + 2 is 7
 * 16 because 7 + 9 is 16
 * @param {number[]} elements
 * @returns {number[]}
 */
function cumulativeSum(elements) {
  for(let i = 1; i < elements.length; i++){
    elements[i] = elements[i - 1] + elements[i]
  }
  return elements
}
cumulativeSum([12,3,4])


module.exports = {
  oneTillDoneWhileLoop,
  oneTillDoneForLoop,
  doneToZeroWhileLoop,
  doneToZeroForLoop,
  evenAndOddWhileLoop,
  evenAndOddForLoop,
  tillXTimes9WhileLoop,
  tillXTimes9ForLoop,
  endsWithFiveWhileLoop,
  endsWithFiveForLoop,
  fizzBuzzPart1,
  fizzBuzzPart2,
  rangeSum,
  rangeOdd,
  rangeEveryOther,
  containsWhileLoop,
  containsForLoop,
  targetCount,
  firstIndexFound,
  lastIndexFound,
  timesIndex,
  cumulativeSum,
};

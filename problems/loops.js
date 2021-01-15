/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a while loop
 * @param {number}
 * @returns {number[]}
 */
function oneTillDoneWhileLoop(n) {
  let array = new Array();
  let i = 0
  while(i < n) {
    array[i] = i + 1
    i++
  }
  return array
}

/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */
function oneTillDoneForLoop(n) {
  let array = new Array();
  for(let i = 0; i < n; i++){
  array[i] = i + 1;
  }
return array
}

/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be a while loop
 * @param {number}
 * @returns {number[]}
 */
function doneToZeroWhileLoop(n) {
  let array = new Array();
  let i = n
  while(i > 0){
    array[n - i] = i
    i--
  } 
  return array
}
/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */
function doneToZeroForLoop(n) {
  let array = new Array();
  for(let i = n; i > 0; i--){
  array[n - i] = i
  }
  return array
}

/**
 * Takes in the variable "max", and iterates over all numbers from 0 to "max".
 *  For each iteration, it will check if the current number is even or odd and add the result to a new array
 *  (e.g. "2 is even")
 * Must be done using a while loop

 * @param {number} max number
 * @returns {string[]} ["0 is even", "1 is odd", "2 is even", "3 is odd"] if max was 3
 */
function evenAndOddWhileLoop(max) {
  let array = new Array();
  let i = 0
  while(i <= max){
    if( (i % 2) === 0) {
      array[i] = i + " is even"
      i++
    }
    else{
      array[i] = i + " is odd"
      i++
    }
  } 
  return array
}

/**
 * Takes in the variable "max", and iterates over all numbers from 0 to "max".
 *  For each iteration, it will check if the current number is even or odd and add the result to a new array
 *  (e.g. "2 is even")
 * Must be done using a for loop

 * @param {number} max number
 * @returns {string[]} ["0 is even", "1 is odd", "2 is even", "3 is odd"] if max was 3
 */
function evenAndOddForLoop(max) {
  let array = new Array();
  for (let i = 0; i <=max; i++) {
    if( (i % 2) === 0) {
      array[i] = i + " is even"
    }
    else{
      array[i] = i + " is odd"
    }
  }
  return array
}

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
  let array = new Array();
  let i = 0
  while(i <= x) {
    array[i] = i * 9
    i++
  }
  return array
}

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
  let array = new Array();
  for(let i = 0; i <= x; i++){
    array[i] = i * 9
  }
  return array
}


/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a while loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */
function endsWithFiveWhileLoop() {
  let array = new Array();
  let i = 0
  let arrayIndex = 0
  while(i < 100) {
    if((i % 10) === 5) {
      array[arrayIndex] = i
      i++
      arrayIndex++
    }
    else{
      i++
    }
  }
  return array
}



/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a for loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */
function endsWithFiveForLoop() {
  let array = new Array();
  let arrayIndex = 0
  for(let i = 0; i<100; i++){
    if((i % 10) === 5) {
      array[arrayIndex] = i
      arrayIndex++
    }
  }
  return array
}
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
 *It will run infinitely since i is established as 5, and it is already greater
 *than 3. It will add 1 to i, increasing it to 6, and repeat the while loop forever. 
 */

 /**
 * Returns an array with all the numbers from all the numbers from 1 to 100.
 * For numbers divisible by 3, add "Fizz" instead of the number into the array.
 * For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.

 * @returns {Array} [1, 2, "Fizz", 4, "Buzz"... 98, "Fizz", "Buzz"]

 */
function fizzBuzzPart1() {
  let array = new Array();
  let i = 1
  while(i <= 100) {
    if((i % 3) === 0) {
      array[i - 1] = "Fizz"
      i++
    }
    else if(((i % 5) === 0) && ((i % 3) !== 0)) {
      array[i - 1] = "Buzz"
      i++
    }
    else{
      array[i - 1] = i
      i++
    }
  }
  return array

}


 /**
 * Returns an array with all the numbers from all the numbers from 1 to 100.
 * For numbers divisible by 3, add "Fizz" instead of the number into the array.
 * For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.
 * For numbers that are divisible by both 3 and 5 add "FizzBuzz" into the array.

 * @returns {Array}

 */
function fizzBuzzPart2() {
  let array = new Array();
  let i = 1
  while(i <= 100) {
    if(((i % 5) === 0) && ((i % 3) == 0)) {
      array[i - 1] = "FizzBuzz"
      i++
    }
    else if((i % 3) === 0) {
      array[i - 1] = "Fizz"
      i++
    }
    else if(((i % 5) === 0) && ((i % 3) !== 0)) {
      array[i - 1] = "Buzz"
      i++
    }
    else{
      array[i - 1] = i
      i++
    }
  }
  return array
}

/**
 * Takes in range (inclusive) and returns the sum of all numbers in that range.

 * @param {number} min number
 * @param {number} max number
 * @returns {number} sum all all numbers from min to max
 */
function rangeSum(min, max) {
  sum = 0
  while(min <= max){
    sum = sum + min
    min++
  }
  return sum
}

/**
 * Takes in range (inclusive) and returns an array in decreasing order of all odd numbers
 * in that range

 * @param {number} min number
 * @param {number} max number
 * @returns {number[]} all odd numbers in range decreasing
 */
function rangeOdd(min, max) {
  let array = new Array();
  let arrayIndex = 0
  while(max >= min) {
    if((max % 2) === 1) {
      array[arrayIndex] = max
      max--
      arrayIndex++
    }
    else{
      max--
    }
  }
  return array
}

/**
 * Takes in range (inclusive) and returns an array in increasing order of every other element.


 * @param {number} min number
 * @param {number} max number
 * @returns {number[]} includes every other element
 */
function rangeEveryOther(min, max) {
  let array = new Array();
  let arrayIndex = 0
  while(min <= max){
    array[arrayIndex] = min
    min = min + 2
    arrayIndex++
  }
  return array
}

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
  while(i <= elements.length) {
    if(elements[i] !== target){
      i++
    }
    else{
      return true
    }
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
  
  for(let i = 0; i <= elements.length; i++) {
    if(elements[i] !== target){
    }
    else{
      return true
    }
  }
  return false
}
/**
 * Takes in an array and a target.
 * Determines how many times the target exists in the array
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} number of occurances
 */
function targetCount(elements, target) {
  let i = 0
  let targetAccurate = 0
  while(i <= elements.length) {
    if(elements[i] == target){
      targetAccurate++
      i++
    }
    else{
      i++
    }
  }
  return targetAccurate
}
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
  let i = 0
  while(i <= elements.length) {
    if(elements[i] == target){
      return i
    }
    else{
      i++
    }
  }
  return -1
}
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
  let i = elements.length
  while(i >= 0) {
    if(elements[i] == target){
      return i
    }
    else{
      i--
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
  let i = 0
  let array = new Array();
  while(i < elements.length) {
      array[i] = i * elements[i]
      i++
    }
    return array
  }


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
  let i = 0
  let array = new Array();
  while(i < elements.length) {
    if(i === 0){
      array[i] = elements[i]
    }
    else {
      array[i] = (array[i-1] + elements[i])
    }
    i++
  }
  return array
}



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

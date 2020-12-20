/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a while loop
 * @param {number}
 * @returns {number[]}
 */
const oneTillDoneWhileLoop = (num) => {
  let i = 1;
  let arr = [];
  while (i <= num) {
    arr.push(i);
    i++;
  }
  return arr;
};

/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */
const oneTillDoneForLoop = (num) => {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
};

/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be a while loop
 * @param {number}
 * @returns {number[]}
 */
const doneToZeroWhileLoop = (number) => {
  let i = number;
  let arr = [];
  while (i > 0) {
    arr.push(i);
    i--;
  }
  return arr;
};

/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */
const doneToZeroForLoop = (number) => {
  let arr = [];
  for (let i = number; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};

/**
 * Takes in the variable "max", and iterates over all numbers from 0 to "max".
 *  For each iteration, it will check if the current number is even or odd and add the result to a new array
 *  (e.g. "2 is even")
 * Must be done using a while loop

 * @param {number} max number
 * @returns {string[]} ["0 is even", "1 is odd", "2 is even", "3 is odd"] if max was 3
 */
const evenAndOddWhileLoop = (max) => {
  let i = 0;
  let arr = [];
  while (i <= max) {
    if (i % 2 === 0) {
      arr.push(i + " is even");
    } else {
      arr.push(i + " is odd");
    }
    i++;
  }
  return arr;
};

/**
 * Takes in the variable "max", and iterates over all numbers from 0 to "max".
 *  For each iteration, it will check if the current number is even or odd and add the result to a new array
 *  (e.g. "2 is even")
 * Must be done using a for loop

 * @param {number} max number
 * @returns {string[]} ["0 is even", "1 is odd", "2 is even", "3 is odd"] if max was 3
 */
const evenAndOddForLoop = (max) => {
  let arr = [];
  for (let i = 0; i <= max; i++) {
    if (i % 2 === 0) {
      arr.push(i + " is even");
    } else {
      arr.push(i + " is odd");
    }
  }
  return arr;
};

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
const tillXTimes9WhileLoop = (x) => {
  let i = 0;
  let arr = [];
  while (i <= x) {
    arr.push(i * 9);
    i++;
  }
  return arr;
};

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
  let arr = [];
  for (let i = 0; i <= x; i++) {
    arr.push(i * 9);
  }
  return arr;
}

/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a while loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */
const endsWithFiveWhileLoop = () => {
  let i = 5;
  let arr = [];
  while (i < 100) {
    arr.push(i);
    i += 10;
  }
  return arr;
};

/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a for loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */
const endsWithFiveForLoop = () => {
  let arr = [];
  for (let i = 5; i < 100; i += 10) {
    arr.push(i);
  }
  return arr;
};

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
 *  this leads to an infinite loop because i starts at 5 and will continue to increase, and will always be bigger than 3
 *
 *
 */

/**
* Returns an array with all the numbers from all the numbers from 1 to 100.
* For numbers divisible by 3, add "Fizz" instead of the number into the array.
* For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.

* @returns {Array} [1, 2, "Fizz", 4, "Buzz"... 98, "Fizz", "Buzz"]

*/
const fizzBuzzPart1 = () => {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
};

/**
* Returns an array with all the numbers from all the numbers from 1 to 100.
* For numbers divisible by 3, add "Fizz" instead of the number into the array.
* For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.
* For numbers that are divisible by both 3 and 5 add "FizzBuzz" into the array.

* @returns {Array}

*/
const fizzBuzzPart2 = () => {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
      arr.push("Buzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else {
      arr.push(i);
    }
  }
  return arr;
};

/**
 * Takes in range (inclusive) and returns the sum of all numbers in that range.

 * @param {number} min number
 * @param {number} max number
 * @returns {number} sum all all numbers from min to max
 */
const rangeSum = (min, max) => {
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

/**
 * Takes in range (inclusive) and returns an array in decreasing order of all odd numbers
 * in that range

 * @param {number} min number
 * @param {number} max number
 * @returns {number[]} all odd numbers in range decreasing
 */
const rangeOdd = (min, max) => {
  let arr = [];
  for (let i = max; i >= min; i--) {
    if (i % 2 === 1) {
      arr.push(i);
    }
  }
  return arr;
};

/**
 * Takes in range (inclusive) and returns an array in increasing order of every other element.


 * @param {number} min number
 * @param {number} max number
 * @returns {number[]} includes every other element
 */
const rangeEveryOther = (min, max) => {
  let arr = [];
  for (let i = min; i <= max; i += 2) {
    arr.push(i);
  }
  return arr;
};

/**
 * Takes in an array and a target.
 * Determines whether or not that target exists in the array
 * Must be written with a while loop
 * Must NOT contain built in includes method.
 * @param {Array} elements
 * @param {number|string} target
 * @returns {boolean} true if the array contains our target, otherwise false
 */
const containsWhileLoop = (elements, target) => {
  let i = 0;
  while (i < elements.length) {
    if (elements[i] === target) {
      return true;
    }
    i++;
  }
  return false;
};

/**
 * Takes in an array and a target.
 * Determines whether or not that target exists in the array
 * Must be written with a for loop
 * Must NOT contain built in includes method.
 * @param {Array} elements
 * @param {number|string} target
 * @returns {boolean} true if the array contains our target, otherwise false
 */
const containsForLoop = (elements, target) => {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] === target) {
      return true;
    }
  }
  return false;
};

/**
 * Takes in an array and a target.
 * Determines how many times the target exists in the array
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} number of occurances
 */
const targetCount = (elements, target) => {
  let matches = 0;
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] === target) {
      matches++;
    }
  }
  return matches;
};

/**
 * Takes in an array and a target.
 * Determines the first index that the target is found at.
 * If the target is not found it should return -1
 * NOT allowed to use built in method indexOf
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} first index found.
 */
const firstIndexFound = (elements, target) => {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] === target) {
      return i;
    }
  }
  return -1;
};

/**
 * Takes in an array and a target.
 * Determines the last index that the target is found at.
 * If the target is not found it should return -1
 * NOT allowed to use built in method lastIndexOf
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} last index found.
 */
const lastIndexFound = (elements, target) => {
  for (let i = elements.length - 1; i >= 0; i--) {
    if (elements[i] === target) {
      return i;
    }
  }
  return -1;
};

/**
 * Takes in an array.
 * Returns a new array where each element has been multiplied by its index.
 * Exp: Input [2, 2, 2] Output: [0, 2, 4] because 0 * 2, 1 * 2, and 2 * 2
 * @param {number[]} elements
 * @returns {number[]}
 */
const timesIndex = (elements) => {
  for (let i = 0; i < elements.length; i++) {
    elements[i] = elements[i] * i;
  }
  return elements;
};

/**
 * Takes in an array.
 * Returns a new array where each element is the cumulative sum so far.
 * Exp: Input [5, 2, 9] Output: [5, 7, 16] . 5 is the first element so added to 0.
 *  7 because 5 + 2 is 7
 * 16 because 7 + 9 is 16
 * @param {number[]} elements
 * @returns {number[]}
 */
const cumulativeSum = (elements) => {
  for (let i = 1; i < elements.length; i++) {
    elements[i] = elements[i] + elements[i - 1];
  }
  return elements;
};

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

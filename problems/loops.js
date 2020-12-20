/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a while loop
 * @param {number}
 * @returns {number[]}
 */
const oneTillDoneWhileLoop = (num) => {
  let filledArray = []
  let i = 1
  while (i <= num){
    filledArray.push(i)
    i += 1
  }
  return filledArray
}
  

/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */
// function oneTillDoneForLoop() {}
const oneTillDoneForLoop = (num) => {
  let anjusArray = []
  for(let i = 1; i <= num; i++){
      anjusArray.push(i)
  }
    return anjusArray
}

/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be a while loop
 * @param {number}
 * @returns {number[]}
 */
// function doneToZeroWhileLoop() {}
const doneToZeroWhileLoop = (num) => {
  let newArray = []
  let i = num
  while(i > 0){
    newArray.push(i)
    i--
  } return newArray
}
/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */
// function doneToZeroForLoop() {}
const doneToZeroForLoop = (num) => {
  let anjusNewArray = []
  for(let i = num; i > 0; i--){
    anjusNewArray.push(i)
  }
    return anjusNewArray
}

/**
 * Takes in the variable "max", and iterates over all numbers from 0 to "max".
 *  For each iteration, it will check if the current number is even or odd and add the result to a new array
 *  (e.g. "2 is even")
 * Must be done using a while loop

 * @param {number} max number
 * @returns {string[]} ["0 is even", "1 is odd", "2 is even", "3 is odd"] if max was 3
 */
// function evenAndOddWhileLoop() {}
const evenAndOddWhileLoop = (max) => {
  let evenOddArray = []
  let i = 0
  while(i <= max) {
    if(i%2===1){
      evenOddArray.push(`${i} is odd`)
    } else {
      evenOddArray.push(`${i} is even`)
    }
    i++
  }
  return evenOddArray
}

/**
 * Takes in the variable "max", and iterates over all numbers from 0 to "max".
 *  For each iteration, it will check if the current number is even or odd and add the result to a new array
 *  (e.g. "2 is even")
 * Must be done using a for loop

 * @param {number} max number
 * @returns {string[]} ["0 is even", "1 is odd", "2 is even", "3 is odd"] if max was 3
 */
// function evenAndOddForLoop() {}
const evenAndOddForLoop = (max) => {
  let maxArray = []
  for(let i=0; i<= max; i++){
    if(i%2===1){
      maxArray.push(`${i} is odd`)
    } else {
      maxArray.push(`${i} is even`)
    }
  }
  return  maxArray
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
// function tillXTimes9WhileLoop() {}
const tillXTimes9WhileLoop = (x) => {
  let nineArray = []
  let i = 0
  while (i <= x) {
    nineArray.push(i * 9)
    i++
  } return nineArray
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
// function tillXTimes9ForLoop() {}
const tillXTimes9ForLoop = (x) => {
  let nineTimesArray = []
  for (let i = 0; i <= x; i++) {
    nineTimesArray.push(i * 9)
  }
  return nineTimesArray
}

/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a while loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */
// function endsWithFiveWhileLoop() {}
const endsWithFiveWhileLoop = () => {
  let fiveArray = []
  let i = 1
  while (i <= 100) {
    if(i % 5 === 0 && i % 10 !== 0) {
    fiveArray.push(i)
  }
  i++
}
  return fiveArray
}


/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a for loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */
// function endsWithFiveForLoop() {}
//Try refactoring the code above to increment your i by 10 and starting at 5.
const endsWithFiveForLoop = () => {
  let endArray = []
  for (let i = 1; i <= 100; i += 1) {
    if(i % 5 === 0 && i % 10 !== 0) {
      endArray.push(i)
    }  
  } return endArray
} 


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
 * Infinite loop because condition is always true through infinity and beyond
 *
 */

 /**
 * Returns an array with all the numbers from all the numbers from 1 to 100.
 * For numbers divisible by 3, add "Fizz" instead of the number into the array.
 * For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.

 * @returns {Array} [1, 2, "Fizz", 4, "Buzz"... 98, "Fizz", "Buzz"]

 */
//function fizzBuzzPart1() {}  //I'm proud of myself. I wrote this on my own using what I've learned. Still feeling a lil' loss, but hopeful. :-)
const fizzBuzzPart1 = () => {
  let allSumArray = []
  let i = 1;
  while (i <= 100) {
    if(i % 3 === 0) {
      allSumArray.push("Fizz")
    } else if(i % 5 === 0 && i % 3 !== 0) {
      allSumArray.push("Buzz")
    } else {
      allSumArray.push(i)
    }
      i++
  }
    return allSumArray
  }


 /**
 * Returns an array with all the numbers from all the numbers from 1 to 100.
 * For numbers divisible by 3, add "Fizz" instead of the number into the array.
 * For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.
 * For numbers that are divisible by both 3 and 5 add "FizzBuzz" into the array.

 * @returns {Array}

 */
    // function fizzBuzzPart2() {}
const fizzBuzzPart2 = num => {
  let allSumArray2 = []
  let i = 1
  while (i <= 100) {
    if(i % 3 === 0 && i % 5 === 0) {
      allSumArray2.push("FizzBuzz")
    } else if(i % 5 === 0 && i % 3 !== 0) {
      allSumArray2.push("Buzz") 
    } else if(i % 3 === 0) {
      allSumArray2.push("Fizz")
    } else {
      allSumArray2.push(i)
    }
        i++
      }
      return allSumArray2
}

/**
 * Takes in range (inclusive) and returns the sum of all numbers in that range.

 * @param {number} min number
 * @param {number} max number
 * @returns {number} sum all all numbers from min to max
 */
//function rangeSum() {}
const rangeSum = (min, max) => {
  let sum = 0
  for (let i = min; i <= max; i++) {
    sum += i
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
// function rangeOdd() {}
const rangeOdd = (min, max) => {
  let oddArray = []
  for(let i = max; i >= min; i--) {
    if(i % 2 !== 0) {
      oddArray.push(i)
    }
  }
  return oddArray
}

/**
 * Takes in range (inclusive) and returns an array in increasing order of every other element.


 * @param {number} min number
 * @param {number} max number
 * @returns {number[]} includes every other element
 */
// function rangeEveryOther() {}
const rangeEveryOther = (min,max) => {
  let rangeArray = []
  for(let i = min; i <= max; i +=2) {
    rangeArray.push(i)
  }
    return rangeArray
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
// function containsWhileLoop() {}
const containsWhileLoop = (elements, target) => {
let i = 0
let boo = ""
while(i < elements.length) {
  if(elements[i] === target) {
    boo = !boo
    break;
  } else {
    boo = false
  }
  i++
}
return boo
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
// function containsForLoop() {}
const containsForLoop = (elements, target) => {
  let boo = ""
  for(let i = 0; i < elements.length; i++) {
  if(elements[i] === target) {
     boo = !boo
     break;
  } else {
    boo = false
  }
} return boo
}

/**
 * Takes in an array and a target.
 * Determines how many times the target exists in the array
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} number of occurances
 */
// function targetCount() {}
const targetCount = (elements, target) => {
  let numOccur = 0
  let i = 0
  while(i < elements.length) {
    if(elements[i] === target){
      numOccur = numOccur + 1
    }
    i++;
  } return numOccur
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
//function firstIndexFound() {}
const firstIndexFound = (elements, target) =>{
  let indexNum = -1
  for(let i = 0; i < elements.length; i++){
    if(elements[i] === target){
      indexNum = indexNum + i + 1
      break;
    }
  } return indexNum
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
function lastIndexFound(elements,target) {
  let lastIndex = -1
  let i = elements.length - 1;
  while(i >= 0){
    if(elements[i]===target){
      lastIndex = lastIndex + i + 1
      break;
    }
    i--
  } return lastIndex
}

/**
 * Takes in an array.
 * Returns a new array where each element has been multiplied by its index.
 * Exp: Input [2, 2, 2] Output: [0, 2, 4] because 0 * 2, 1 * 2, and 2 * 2
 * @param {number[]} elements
 * @returns {number[]}
 */
function timesIndex(elements) {
  let newArrayIndex = []
  for(let i=0; i<elements.length;i++){
    newArrayIndex.push(i*elements[i])
  } return newArrayIndex
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
  let cumulativeNum = 0
  let newArrayCumul = []
  for(let i=0;i<elements.length;i++){
    cumulativeNum = cumulativeNum + elements[i]
    newArrayCumul.push(cumulativeNum)
  } return newArrayCumul
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

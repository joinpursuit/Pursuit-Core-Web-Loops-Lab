/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a while loop
 * @param {number}
 * @returns {number[]}
 */
function oneTillDoneWhileLoop(number) {
  let n = 1
  let numberArray = []
  while (n <= number)
  {
    numberArray [n-1] = n
    n += 1
  } 
  return numberArray
  }
console.log(oneTillDoneWhileLoop(5))


/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */
function oneTillDoneForLoop(number) {
  let numberArray =[]
  for (let n = 1; n<= number; n+=1 ){
    numberArray [n-1] = n
  }
  return numberArray
}

/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be a while loop
 * @param {number}
 * @returns {number[]}
 */
function doneToZeroWhileLoop(number) {
  let numberArray = []
   while(number > 0){
    numberArray.push(number)
    number--
  } return numberArray

}


/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */
function doneToZeroForLoop(num) {
  let numberArray = []
  for (let n= num; n > 0; n--)
{numberArray.push(n)
} 
return numberArray
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
  let array = []
  num = 0
  while (num <= max) {
    if (num % 2 === 0) {
      array[num] = `${num} is even`
    } else {
      array[num] =`${num} is odd`
    } num++ 
  } return array
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
  let array = []
  for (i = 0; i <= max; i++){
    if (i%2 === 0){
      array[i]= `${i} is even`
    } else {
      array[i] = `${i} is odd`
    }
  } return array
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
  array = []
  i = 0
  while (i <= x) {
    array.push(i * 9)
    i++
  }return array
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
  array = []
  for (i = 0; i <= x; i++){
    array.push(i * 9)
  }
  return array
}


/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a while loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */
function endsWithFiveWhileLoop() {
  array = []
  i = 5
  while (i < 100) {
    array.push(i)
    i += 10
  }
  return array
}



/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a for loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */
function endsWithFiveForLoop() {
  array = []
  for (i = 5; i < 100; i +=10) {
    array.push(i)
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
 * It's infinite. It will continue to add 1 to i because its greater than 3.
 */

 /**
 * Returns an array with all the numbers from all the numbers from 1 to 100.
 * For numbers divisible by 3, add "Fizz" instead of the number into the array.
 * For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.

 * @returns {Array} [1, 2, "Fizz", 4, "Buzz"... 98, "Fizz", "Buzz"]

 */
function fizzBuzzPart1() {
  array = []
  for (i = 1; i <= 100; i++){
    if (i % 3 === 0){
      array.push('Fizz')
    }else if (i%5 === 0 && i%3 !== 0){
          array.push('Buzz')
    } else {
      array.push(i)
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
  array = []
  for (i = 1; i <= 100; i++){
    if (i%3 === 0 && i%5 !==0){
      array.push('Fizz')
    }else if (i%5 === 0 && i%3 !== 0){
          array.push('Buzz')     
    }else if (i%5 === 0 && i%3 === 0)  {
      array.push('FizzBuzz')
    } else {
      array.push(i)
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
function rangeSum(min,max) {
  sum = 0
  for (i = min; i <= max; i++){
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
function rangeOdd(min,max) {
  let array = []
  for (let i = max; i >= min; i -= 1){
    if ( i%2 !== 0){
      array.push(i)
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
function rangeEveryOther(min,max) {
  let array = []
  for (i = min; i <= max; i +=2){
    array.push(i)
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
  i = 0
  while (i < elements.length){
    if (target === elements[i]){
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
  for (i = 0; i < elements.length; i++){
    if (target === elements[i]){
      return true
    }
  }return false
  
}
/**
 * Takes in an array and a target.
 * Determines how many times the target exists in the array
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} number of occurances
 */
function targetCount(elements, target) {
  let count = 0
  for (let i = 0; i < elements.length; i++){
    if(target === elements[i]){
      count ++
    }
  }return count
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
function firstIndexFound(elements,target) {
  for (i = 0; i < elements.length; i++){
    if (target === elements[i]) {
      return i
    }
  }return -1
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
  for (i = (elements.length - 1); i > 0; i--)  {
    if (target === elements[i]) {
      return i
    }
  } return -1
}

/**
 * Takes in an array.
 * Returns a new array where each element has been multiplied by its index.
 * Exp: Input [2, 2, 2] Output: [0, 2, 4] because 0 * 2, 1 * 2, and 2 * 2
 * @param {number[]} elements
 * @returns {number[]}
 */
function timesIndex(elements) {
  let array = []
  for (i = 0; i < elements.length; i++){
    num = i * elements[i]
    array.push(num)
  }return array
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
  let array = []
  let sum = 0
  for (i = 0; i < elements.length; i++){
    sum += elements[i]
    array.push(sum)
  } return array
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

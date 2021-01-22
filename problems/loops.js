/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a while loop
 * @param {number}
 * @returns {number[]}
 */



//MY SOLUTION
function oneTillDoneWhileLoop(number) {
let array = new Array()
let start = 1
  while (start <= number) {
    array.push(start);
    start = start + 1;
  }
  return array;
}

//OTHER TEAMMATE'S SOLUTION

//function oneTillDoneWhileLoop(number) {
//while (n <= number) {
//  array[n - 1] = n; 
//  n = n + 1;
//}
//return array
//}


console.log("oneTillDoneWhileLoop " + oneTillDoneWhileLoop(6))


/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */


function oneTillDoneForLoop(number) {
  let array = []  
  for (let start = 1; start <= number; start += 1) {
    array.push(start)
  }
  return array
}

console.log("oneTillDoneForLoop " + oneTillDoneForLoop(5))

/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be a while loop
 * @param {number}
 * @returns {number[]}
 */


function doneToZeroWhileLoop(number) {
  let array = []
  let end = 0
  while (number > end) {
    array.push(number);
    number = number - 1;
  }
  return array;
}

console.log("doneToZeroWhileLoop " + doneToZeroWhileLoop(5))

/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */

function doneToZeroForLoop(number) {
  let array = []
  for (end = 0; number > end; number = number - 1) {
    array.push(number);
  }
  return array
}

console.log("doneToZeroForLoop " + doneToZeroForLoop(5))

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
  let i = 0
  while (i <= max) {
    
    if (i % 2 === 0){
    array.push(`${i} is even`)
    }
    else {
    array.push(`${i} is odd`)
  }
    i ++
  }
  return array
}

console.log(evenAndOddWhileLoop(5))

/**
 * Takes in the variable "max", and iterates over all numbers from 0 to "max".
 *  For each iteration, it will check if the current number is even or odd and add the result to a new array
 *  (e.g. "2 is even")
 * Must be done using a for loop

 * @param {number} max number
 * @returns {string[]} ["0 is even", "1 is odd", "2 is even", "3 is odd"] if max was 3
 */
function evenAndOddForLoop(max) {
  array = []
  for (let i = 0; i <= max; i ++) {
    if (i % 2 === 0) {
      array.push(`${i} is even`)
    }
    else {
      array.push(`${i} is odd`)
    }
  }
  return array
}

console.log(evenAndOddForLoop(5))


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
  let array = []
  let n = 0
  while (n <= x) {
    array.push(n * 9);
    n = n + 1;
  }
  return array
}

console.log(tillXTimes9WhileLoop(5))

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
  for (let n = 0; n <= x; n += 1) {
    array.push(n * 9);
  }
  return array
}

console.log(tillXTimes9ForLoop(5))

/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a while loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */
function endsWithFiveWhileLoop() {
  let array = []
  let n = 5
  while (n <= 100) {
    array.push(n);
    n = n + 10
  }
  return array
}

console.log(endsWithFiveWhileLoop())

/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a for loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */
function endsWithFiveForLoop() {
  let array = []
  for (let n = 5; n <= 100; n += 10) {
    array.push(n)
  }
  return array
}

// I felt so special when I finally solved this, but then noticed that i could have 
//just read the note Pursuit left below xD

console.log(endsWithFiveForLoop())

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
 *      //The code above will run forever because the initialization (i = 5) is
 *      //already larger than the condition (i > 3). The only way to end the loop 
 *      //is by decreasing the variable(i), whereas we do the opposite and increase
 *      //by one (i += 1  also written as  i = i + 1) for every iteration. This 
 *      //results in an infinite loop.
 */

 /**
 * Returns an array with all the numbers from all the numbers from 1 to 100.
 * For numbers divisible by 3, add "Fizz" instead of the number into the array.
 * For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.

 * @returns {Array} [1, 2, "Fizz", 4, "Buzz"... 98, "Fizz", "Buzz"]

 */

function fizzBuzzPart1() {
  let array = []
  let i = 0
  while (i <= 99) {
    i = i + 1;
    if (i % 3 === 0) {
      array.push("Fizz");
    }
    else if (i % 5 === 0) {
      array.push("Buzz");
    }
    else {
      array.push(i);
    }
  }
  return array
}

console.log(fizzBuzzPart1())


 /**
 * Returns an array with all the numbers from all the numbers from 1 to 100.
 * For numbers divisible by 3, add "Fizz" instead of the number into the array.
 * For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.
 * For numbers that are divisible by both 3 and 5 add "FizzBuzz" into the array.

 * @returns {Array}

 */
function fizzBuzzPart2() {
  let array = []
  let i = 0

  while (i <= 99) {
    i = i + 1
    if (i % 3 === 0 && i % 5 === 0) {
      array.push("FizzBuzz");
    }
    else if (i % 5 === 0) {
      array.push("Buzz");
    }
    else if (i % 3 === 0) {
      array.push("Fizz");
    }
    else {
      array.push(i)
    }
  }
  return array
}

console.log(fizzBuzzPart2())

/**
 * Takes in range (inclusive) and returns the sum of all numbers in that range.

 * @param {number} min number
 * @param {number} max number
 * @returns {number} sum all all numbers from min to max
 */
function rangeSum(min, max) {
  let sum = 0
  while (min <= max) {
    sum = sum + min;
    min = min + 1;
  }
  return sum
}

console.log("\n Rangesum = " + rangeSum(3,8) + "\n")

/**
 * Takes in range (inclusive) and returns an array in decreasing order of all odd numbers
 * in that range

 * @param {number} min number
 * @param {number} max number
 * @returns {number[]} all odd numbers in range decreasing
 */
function rangeOdd(min, max) {
  let array = []
  while (min <= max) {
    if (max % 2 === 1) {
      array.push(max);
      max = max - 1;
      }
    else {
      max = max - 1;
    }
  }
  return array
}

console.log("rangeOdd = " + rangeOdd(3,10))

/**
 * Takes in range (inclusive) and returns an array in increasing order of every other element.


 * @param {number} min number
 * @param {number} max number
 * @returns {number[]} includes every other element
 */
function rangeEveryOther(min, max) {
  let array = []
  
  for (let i = min; i <= max; i = i + 2) {
    array.push(i)
  }
  return array
}

console.log(rangeEveryOther(2, 10))

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
  while (i < elements.length) {
    if (target === elements[i]) {
      return true
    }
    else {
      i++
    }
  }
  return false
}

console.log(containsWhileLoop([12, 45, 6, 16], 6))
console.log(containsWhileLoop([12, 45, 6, 16], 3))
console.log(" ")

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
  for (let i = 0; i < elements.length; i++) {
    if (target === elements[i]) {
      return true
    } else {
    
    }
  }
  return false
}


console.log(containsForLoop(["cat", "dog", "goat", "turtle"], "goat"))
console.log(containsForLoop(["cat", "dog", "goat", "turtle"], "cow"))

/**
 * Takes in an array and a target.
 * Determines how many times the target exists in the array
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} number of occurances
 */
function targetCount(elements, target) {
  let x = 0

  for (let i = 0; i < elements.length; i = i + 1) {
    if (target === elements[i]) {
      x = x + 1;
    }
    else {

    }
  }
  return x
}

console.log("targetCount = " + targetCount([1, 2, 2, 4, 1, 3, 5, 2, 3, 6], 3))


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
  while (i < elements.length) {
    if (target === elements[i]) {
      return i;
    }
    else {
      i = i + 1;
    }
  }
  return -1
}

console.log(firstIndexFound([9, 16, 35, 8, 10], 16))
console.log(firstIndexFound([9, 16, 35, 8, 10], 7))

console.log(" ")

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

  for (let i = elements.length - 1; i > 0; i = i - 1) {
    if (target === elements[i]) {
      return i;
    }
  }
  return -1

}

console.log("LastIndexFound: " + lastIndexFound([5, 6, 7, 7, 9], 7))
console.log("LastIndexFound: " + lastIndexFound([5, 6, 7, 7, 9], 2))


/**
 * Takes in an array.
 * Returns a new array where each element has been multiplied by its index.
 * Exp: Input [2, 2, 2] Output: [0, 2, 4] because 0 * 2, 1 * 2, and 2 * 2
 * @param {number[]} elements
 * @returns {number[]}
 */
function timesIndex(elements) {
  let newArray = []
  let i = 0

  while (i < elements.length) {
    newArray.push(elements[i] * i)
    i = i + 1
  }

  return newArray
}

console.log(timesIndex([2, 2, 2, 2 ,2, 2]))
console.log(timesIndex([5, 6, 7, 8, 9]))

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
  newArray = []
  let i = 0
  sum = 0

  while (i < elements.length) {
    sum = elements[i] + sum;
    newArray.push(sum)
    i = i + 1;
  }
  return newArray
}

console.log(cumulativeSum([5, 6, 7, 8, 9]))


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

/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a while loop
 * @param {number}
 * @returns {number[]}
 */
function oneTillDoneWhileLoop(number) {
  let array = [];
  let i = 0;
  while (i < number) {
    array[i] = i + 1;
    i += 1;
  }
  return array;
}

/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */
function oneTillDoneForLoop(number) {
  let array = [];
  for (let i = 0; i < number; i += 1) {
    //reminder to use ; not ,
    array[i] = i + 1;
  }
  return array;
}

/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be a while loop
 * @param {number}
 * @returns {number[]}
 */
function doneToZeroWhileLoop(number) {
  let array = [];
  let i = number; //whatever number we input to count down from
  let t = 0; //can't use i more than once, so i have to use another number
  while (i > 0) {
    array[t] = i;
    i -= 1; //since we are counting doing we -
    t += 1;
  }
  return array;
}

/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */
function doneToZeroForLoop(number) {
  let array = [];
  let t = 0;
  for (let i = number; i > 0; i--) {
    array[t] = i;
    t++;
  }
}

/**
 * Takes in the variable "max", and iterates over all numbers from 0 to "max".
 *  For each iteration, it will check if the current number is even or odd and add the result to a new array
 *  (e.g. "2 is even")
 * Must be done using a while loop

 * @param {number} max number
 * @returns {string[]} ["0 is even", "1 is odd", "2 is even", "3 is odd"] if max was 3
 */
function evenAndOddWhileLoop(number) {
  numberArray = [];
  let i = 0;
  while (i < max) {
    if (i % 2 === 1) {
      array[i] = i + 1;
    } else if (i % 2 === 0) {
      array[i] = i + 1;
    }
  }

  return numberArray;
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
  let evnOddArray = [];
  let t = 0;
  for (let i = 0; i <= max; i += 1) {
    evnOddArray[t] = i % 2 === 0 ? `${i} is even` : `${i} is odd`;
    j = 1;
  }

  return evnOddArray;
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
  let array = [];
  for (let i = 0; i <= x; i += 1) {
    array[i] = 9 * i;
  }
  return array;
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
function tillXTimes9ForLoop(number) {
  let array = [];
  let i = 5;
  let j = 0;

  while (i <= 100) {
    array[j] = i;
    i += 10;
    j++;
  }

  return array;
}

/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a while loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */
function endsWithFiveWhileLoop() {
  let array = [];
  let i = 5;
  let t = 0;
  while (i <= 100) {
    array[t] = i;
    i += 10
  }

  return array;
}

/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a for loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */
function endsWithFiveForLoop() {
  let array = [];
  let t = 0;
  for (let i = 5; i <= 100; i += 10) {
    //Starts the loop at 5, counts up until 100, I can increase by 5 as increasing by 10 the numbers will end 5
    array[t] = i;
    t++;
  }

  return array;
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
 *
 */

/**
 * Returns an array with all the numbers from all the numbers from 1 to 100.
 * For numbers divisible by 3, add "Fizz" instead of the number into the array.
 * For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.

 * @returns {Array} [1, 2, "Fizz", 4, "Buzz"... 98, "Fizz", "Buzz"]

 */
function fizzBuzzPart1() {
  FBArray = [];
  let t = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      FBArray[t] = "Fizz";
    } else if (i % 5 === 0) {
      FBArray[t] = "Buzz";
    } else {
      FBArray[t] = i;
    }
  }
}

/**
 * Returns an array with all the numbers from all the numbers from 1 to 100.
 * For numbers divisible by 3, add "Fizz" instead of the number into the array.
 * For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.
 * For numbers that are divisible by both 3 and 5 add "FizzBuzz" into the array.

 * @returns {Array}

 */
function fizzBuzzPart2() {
  FBArray2 = [];
  let t = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      FBArray[t] = "Fizz";
    } else if (i % 5 === 0) {
      FBArray[t] = "Buzz";
    } else if (i % 3 === 0 && i % 5 === 0) {
      FBArray[t] = "FizzBuzz";
    }
  }
}

/**
 * Takes in range (inclusive) and returns the sum of all numbers in that range.

 * @param {number} min number
 * @param {number} max number
 * @returns {number} sum all all numbers from min to max
 */
function rangeSum(min, max) {

  let sumOf = 0;
  for (let i = min; i <= max; i++) {
    sumOf += i;
  }

  return sumOf;
}

/**
 * Takes in range (inclusive) and returns an array in decreasing order of all odd numbers
 * in that range

 * @param {number} min number
 * @param {number} max number
 * @returns {number[]} all odd numbers in range decreasing
 */
function rangeOdd(min, max) {
  let array = [];
  let i = max;
  let t = 0;
  while (i >= min) {
    //while max is greater than the min the loop will run
    if (i % 2 !== 0) {
      //if the max is not divisible by 2 (odd)
      array[t] = i; //the array index will equal the max numver
      t++; //increase the index
    }
    i--; //decreasing the num we are counting by
  }
}

/**
 * Takes in range (inclusive) and returns an array in increasing order of every other element.


 * @param {number} min number
 * @param {number} max number
 * @returns {number[]} includes every other element
 */
function rangeEveryOther(min, max) {
  let array = [];
  let i = min;
  let t = 0;
  while (i <= max) {
    array[t] = i;
    i += 2;
    t++;
  }
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
  let i = 0;
  while(i <= elements.length -1) {
    if (elements[i] === target) {
      return true;
    } else if (element[i] !== target) {
      return false
    }
  }  
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
  for(let i = 0; i <= elements.length-1; i++) {
    if (elements[i] === target) {
      return true;
    }
  }
  return false;
}
/**
 * Takes in an array and a target.
 * Determines how many times the target exists in the array
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} number of occurances
 */
function targetCount() {
  let i = 0;
  let counter = 0; //to determine the amount of times the target ecist
  while(i <= elements.length -1) {
    if(elements[i] === target){
    counter++;
  }
  i++;
}
return counter;
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
  let i = 0;
  let counter = 0;
  while (i <= elements.length - 1) {
    if (elemets[i] === target) {
    }
    count++;
  }
  i++;
  return counter;
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
function lastIndexFound(array, elments) {
  let i = 0;
  lastIndex = [];
  while(i <= elements.length-1){
    if(elements[i] === target){
      lastIndex = i;
    }
    i++;
    return i
  }

}


/**
 * Takes in an array.
 * Returns a new array where each element has been multiplied by its index.
 * Exp: Input [2, 2, 2] Output: [0, 2, 4] because 0 * 2, 1 * 2, and 2 * 2
 * @param {number[]} elements
 * @returns {number[]}
 */
function timesIndex(elements) {
  for(i = 0; i <= elements.length-1; i++) {
    elements[i] *= i;
  }

return elements
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
  let array  = [];
  let i = 0;
  while (i <= elements.length -1) {
    if (i === 0) {
      array.push(element[i]);
    } else {
      array.push(elements[i-1] + elements[i]);
    }
    i++;
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

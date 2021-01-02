/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a while loop
 * @param {number}
 * @returns {number[]}
 */
const oneTillDoneWhileLoop = (number) =>{
let newArray = []     
let i = 1 
while ( i <= number ){     
  newArray.push( i )     
  i++                    
}
return newArray
}


/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */
const oneTillDoneForLoop = (number) => {
let newArray = []
for( let i = 1; i <= number ; i++ ){
  newArray.push( i )     
}
return newArray
}

/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be a while loop
 * @param {number}
 * @returns {number[]}
 */
const doneToZeroWhileLoop = ( number) => {
  let newArray = []           
  let i = 0;                
  while( number > i){            
    newArray.push( number )  
    number--                
  }
  return newArray
}

/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */
const doneToZeroForLoop = (number) => {
  let newArray = []
  for (i = number; i > 0; i--){
    newArray.push(i)  
  }
  return newArray
}

/**
 * Takes in the variable "max", and iterates over all numbers from 0 to "max".
 *  For each iteration, it will check if the current number is even or odd and add the result to a new array
 *  (e.g. "2 is even")
 * Must be done using a while loop

 * @param {number} max number
 * @returns {string[]} ["0 is even", "1 is odd", "2 is even", "3 is odd"] if max was 3
 */
    const evenAndOddWhileLoop = (max) => {
        let newArray = []
        let i = 0
        while (i <= max){
          if (i % 2 === 0){
            newArray.push (i + " is even" ) 
          i++
          }else {
            newArray.push(i + " is odd") 
          i++
          }
          
        } 

          return newArray
    }   

/**
 * Takes in the variable "max", and iterates over all numbers from 0 to "max".
 *  For each iteration, it will check if the current number is even or odd and add the result to a new array
 *  (e.g. "2 is even")
 * Must be done using a for loop

 * @param {number} max number
 * @returns {string[]} ["0 is even", "1 is odd", "2 is even", "3 is odd"] if max was 3
 */
    const evenAndOddForLoop= (max) => {
      let newArray = []
      for ( let i = 0; i <= max; i++){
        if (i % 2 === 0){
          newArray.push(i + " is even")
        }else{
          newArray.push(i + " is odd")
        }
      }
      return newArray
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
 const tillXTimes9WhileLoop = (x) =>  {
   let newArray = []
   let i = 0
    while (i <= x){
     newArray.push(i * 9)
     i++
   } 
   return newArray
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
const tillXTimes9ForLoop = (x) => {
  let newArray = []
  for (let i = 0 ; i <= x ; i++) {
    newArray.push(i * 9)
  }
  return newArray
}


/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a while loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */
  const endsWithFiveWhileLoop = () => {
    let newArray = []
    let i = 5
    while (i <= 100){
     newArray.push(i)
      i+= 10
    }
    return newArray
  }



/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a for loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */
  const endsWithFiveForLoop = () => {
  let newArray = []
  for (i = 5; i <= 100 ; i+= 10){
    newArray.push(i)
  }
  return newArray
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
 * The loop is an infinite loop. 5 will keep being incremented by 1 and all the numbers will be greater than 3
 */

 /**
 * Returns an array with all the numbers from all the numbers from 1 to 100.
 * For numbers divisible by 3, add "Fizz" instead of the number into the array.
 * For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.

 * @returns {Array} [1, 2, "Fizz", 4, "Buzz"... 98, "Fizz", "Buzz"]

 */
  const fizzBuzzPart1 = () => {
    let newArray = []
    let i = 1
    while (i <= 100){
      if (i % 3 === 0){
      newArray.push("Fizz") 
      }else if (i % 5 === 0) {
        newArray.push("Buzz")
        }else{
          newArray.push(i)
        }
        i++
      }
    return newArray
  }


 /**
 * Returns an array with all the numbers from all the numbers from 1 to 100.
 * For numbers divisible by 3, add "Fizz" instead of the number into the array.
 * For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.
 * For numbers that are divisible by both 3 and 5 add "FizzBuzz" into the array.

 * @returns {Array}

 */
 const  fizzBuzzPart2 = () => {
   let newArray = []
   let i = 1
   while (i <= 100){
    if (i % 3 === 0 && i % 5 === 0){
      newArray.push("FizzBuzz")
      }else if (i % 3 === 0) {
        newArray.push("Fizz")
      }else if  ( i % 5 === 0) {
        newArray.push("Buzz")
      }else {
        newArray.push(i)
      }
      i++ 
   }
    return newArray
 }

/**
 * Takes in range (inclusive) and returns the sum of all numbers in that range.

 * @param {number} min number
 * @param {number} max number
 * @returns {number} sum all all numbers from min to max
 */
 const rangeSum = (min, max) => {
   let sum = 0;
   for (i = min; i <= max; i++) {
    sum +=i 
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
 const rangeOdd = (min, max) => {
    let newArray = []
    let i = max
    for (i = max; i >= min; i--)
    if (i % 2 === 1 ) {
      newArray.push(i)
    }  
    return newArray
 } 

/**
 * Takes in range (inclusive) and returns an array in increasing order of every other element.


 * @param {number} min number
 * @param {number} max number
 * @returns {number[]} includes every other element
 */
 const rangeEveryOther= (min, max) => {
  let newArray = []
  for  (let i =min; i <= max; i+=2 ){
  newArray.push(i) 
 }
 return newArray
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
 const containsWhileLoop = (elements, target) => {
  let i = 0
  while (i < elements.length) {
    if (elements[i] == target){ 
      return true
    }
    i++
    
  }
  return false;
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
 const containsForLoop = (elements, target) => {
  for ( i = 0; i < elements.length; i++){ 
    if (elements[i] === target){ 
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
  const targetCount = (elements, target) => {
    let num = 0 
    for (i = 0; i < elements.length; i++ ){
      if (elements[i] === target){
        num++ 
      }
      }
      return num   
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
 const firstIndexFound = (elements, target) => {
   let num = 0
   for (i = 0; i < elements.length; i++){
     if (elements[i] === target){
       return num = i
     }else {
       continue; 
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
 const lastIndexFound = (elements, target) => {
  let num = -1;
  for (i = 0; i < elements.length; i++){
    if (elements[i] === target){
      num = i 
    }
  }
  return num
 }

/**
 * Takes in an array.
 * Returns a new array where each element has been multiplied by its index.
 * Exp: Input [2, 2, 2] Output: [0, 2, 4] because 0 * 2, 1 * 2, and 2 * 2
 * @param {number[]} elements
 * @returns {number[]}
 */
 const timesIndex = (elements) => {
   let newArray = []
   for ( i =0; i < elements.length; i++){
     newArray.push(elements[i]*i)
   }
   return newArray
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
 const cumulativeSum = (elements) => {
  let newArray = []
  let sum = 0
  for (i =0; i < elements.length; i++){
       newArray.push(elements[i] + sum) 
       sum += elements[i] 
  }
  return newArray
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

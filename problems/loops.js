/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a while loop
 * @param {number}
 * @returns {number[]}
 */
function oneTillDoneWhileLoop(number) 
{
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
function oneTillDoneForLoop(number) 
{
  let numberArray = []
  
  for (let n = 1; n <= number ; n += 1 )
    {
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
function doneToZeroWhileLoop(number) 
{
  let n = number
  let numberArray = []

  while(n > 0)
    {
      numberArray[number-n] = n
      n -= 1
    }
  return numberArray
}

console.log(doneToZeroWhileLoop(5))


/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */
function doneToZeroForLoop(number) 
{
  let numberArray = []

  for (let n = number; n > 0; n -= 1 )
    {
        // console.log(`\nn = ${n}`)  ~ Testing n value
        numberArray[number-n] = n
    }
    return numberArray 
}

console.log(doneToZeroForLoop(5))



/**
 * Takes in the variable "max", and iterates over all numbers from 0 to "max".
 *  For each iteration, it will check if the current number is even or odd and add the result to a new array
 *  (e.g. "2 is even")
 * Must be done using a while loop

 * @param {number} max number
 * @returns {string[]} ["0 is even", "1 is odd", "2 is even", "3 is odd"] if max was 3
 */
function evenAndOddWhileLoop(max) 
{
    let number = 0
    let string = []

    while(number <= max )
      {
        
        if ((number % 2) === 0)
          {
          string [number] = `${number} is even`
          }else
          {
          string [number] = `${number} is odd`
          } 
        number += 1
      }
      return string
}

console.log(evenAndOddWhileLoop(3))



/**
 * Takes in the variable "max", and iterates over all numbers from 0 to "max".
 *  For each iteration, it will check if the current number is even or odd and add the result to a new array
 *  (e.g. "2 is even")
 * Must be done using a for loop

 * @param {number} max number
 * @returns {string[]} ["0 is even", "1 is odd", "2 is even", "3 is odd"] if max was 3
 */
function evenAndOddForLoop(max) 
{
  let string = []

  for(let number = 0; number <= max; number += 1)
    {
        if ((number % 2) === 0)
          {
            string [number] = `${number} is even`
          }else
          {
            string [number] = `${number} is odd`
          }
    }
    return string
}

console.log(evenAndOddWhileLoop(5))

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
function tillXTimes9WhileLoop(x) 
{
    let n = 0
    let number = []
    while(n <= x)
      {
        number.push(n*9)
        n += 1
      }
    return number
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
function tillXTimes9ForLoop(x) 
{
  let number = []
  for(let n = 0; n <= x; n += 1)
    {
      number.push(n*9)
    }
    return number
}

console.log(tillXTimes9ForLoop(4))


/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a while loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */
function endsWithFiveWhileLoop() 
{

    let n = 5
    let number = []

    while(n < 100 )
      {
        number.push(n)
        n += 10
      }
    return number  
}




/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a for loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */
function endsWithFiveForLoop() 
{
  let number = []

  for (let n = 5; n < 100;  n += 10)
    {
       number.push(n)
    }
    return number
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
 *  This while will run forever, its a infinite loop because (i) keeps incrementing each time.
 *  So 1st run **  i = 5
 *     2nd run * * i = 6
 *        ....     i = i+1 
 * 
 * Therefore While condition will always be true because i > 3 each time
 */


 /**
 * Returns an array with all the numbers from all the numbers from 1 to 100.
 * For numbers divisible by 3, add "Fizz" instead of the number into the array.
 * For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.

 * @returns {Array} [1, 2, "Fizz", 4, "Buzz"... 98, "Fizz", "Buzz"]

 */
function fizzBuzzPart1() 

{
    let array = []

    for(let n = 1; n <= 100; n += 1)
      {
          if ((n % 3) === 0)
            {
                array.push('Fizz')
            }else if ((n % 5) === 0)
              {
                array.push('Buzz')
              }else
              {
                array.push(n)
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
function fizzBuzzPart2() 
{
  let array = []

  for(let n = 1; n <= 100; n += 1)
    {
        if (((n % 3) === 0) && ((n % 5 !== 0)))
          {
              array.push('Fizz')
          }else if (((n % 5) === 0) && ((n % 3 !== 0)))
              {
                 array.push('Buzz')
              }else if ( n % 15 === 0)
                {
                  array.push('FizzBuzz')
                }else
                    {   
                      array.push(n)
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
function rangeSum(min, max) 
{
    let sum = 0
    for (let n = min; n <= max; n += 1)
      {
          sum += n 
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
function rangeOdd(min, max) 
{
    let number  = []

    for (let n = max; n >= min; n -= 1)
      {
        if (n % 2 !== 0)
          {
            number.push(n) 
          }
      }
    return number  
}



/**
 * Takes in range (inclusive) and returns an array in increasing order of every other element.


 * @param {number} min number
 * @param {number} max number
 * @returns {number[]} includes every other element
 */
function rangeEveryOther(min, max) 
{
  let number = []

  for (let n = min; n <= max; n += 2)
    {
      number.push(n)
    }
 return number
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
function containsWhileLoop(elements, target) 
{
    let n = 0
    let found  = 0

    while(n < elements.length)
      {
        if (target === elements[n])
          {
                return true
          }else
          {
            found = 0
          }
        n += 1
      }
     if (found === 0 ){ return false}
}
console.log(containsWhileLoop(['cat','dog','mouse'],'dog'))

/**
 * Takes in an array and a target.
 * Determines whether or not that target exists in the array
 * Must be written with a for loop
 * Must NOT contain built in includes method.
 * @param {Array} elements
 * @param {number|string} target
 * @returns {boolean} true if the array contains our target, otherwise false
 */
function containsForLoop(elements, target) 
{
    let found = 0

    for (let n = 0; n < elements.length; n += 1)
      {
        if (elements[n] === target)
          {
              return true
          }else
          {
            found  = 0
          }

      }
    if (found === 0){ return false}  
}

console.log(containsForLoop(['cat','dog','mouse'],'4'))


/**
 * Takes in an array and a target.
 * Determines how many times the target exists in the array
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} number of occurances
 */
function targetCount(elements, target) 
{
  let found = 0

  for (let n = 0; n < elements.length; n += 1)
    {
      if (elements[n] === target)
        {
            found += 1
        }else
        {
            found  = found
        }

    }
    return found
  
}

console.log(targetCount(['grape','apple','orange','apple','kiwi'], 'apple'))

/**
 * Takes in an array and a target.
 * Determines the first index that the target is found at.
 * If the target is not found it should return -1
 * NOT allowed to use built in method indexOf
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} first index found.
 */
function firstIndexFound(elements, target) 

{
  let found = -1

  for (let n = 0; n < elements.length; n += 1)
    {
      if (elements[n] === target)
        {
            found = 0
            return n
        }else
        {
            found  = -1
        }

    }
    if (found !== 0 ){ return found }
}

console.log(firstIndexFound(['cat','dog','mouse'],'doggy'))


/**
 * Takes in an array and a target.
 * Determines the last index that the target is found at.
 * If the target is not found it should return -1
 * NOT allowed to use built in method lastIndexOf
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} last index found.
 */
function lastIndexFound(elements, target) 
{
  let found     = -1
  let last      =  0 
  let condition =  0

  for (let n = 0; n < elements.length; n += 1)
    {
      if (elements[n] === target)
        {
            condition = 1
            last  = n 
        }else
        {
            found     = -1
            
        }

    }
    return (condition === 1 ) ? last : found 

}

console.log(lastIndexFound([2,3,6,7,3,1], 3))

/**
 * Takes in an array.
 * Returns a new array where each element has been multiplied by its index.
 * Exp: Input [2, 2, 2] Output: [0, 2, 4] because 0 * 2, 1 * 2, and 2 * 2
 * @param {number[]} elements
 * @returns {number[]}
 */
function timesIndex(elements) 
{
    let newArray = []

    for (let n = 0; n < elements.length; n += 1)
      {
          newArray [n] = elements[n] * n

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
function cumulativeSum(elements) 
{
    let newArray = []
    let sum      = 0

    for (let n = 0; n < elements.length; n += 1)

      {
          newArray[n] = elements[n] + sum
          sum += elements[n]   

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

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(array) {
  let newArr = []
  for (let i = 0; i < array.length; i++){
    newArr.push(array[i] + "!")
  }
  return newArr
}

// console.log(shoutForLoop(["I", "am", "a", "happy", "array"]))


/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(array) {
  let newArr = []
  let i = 0
  while(i < array.length){
    newArr.push(array[i] + "!")   
    i++
  }    
  return newArr
}

// console.log(shoutWhileLoop(["I", "am", "a", "happy", "array"]))


/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForOfLoop(array) {
  let newArr = []
  for (let i of array){
    newArr.push(i + "!")
  }
  return newArr
}

// console.log(shoutForOfLoop(["I", "am", "a", "happy", "array"]))


/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(nums) {
  let sum = 0
  for(let i = 0; i < nums.length; i ++){
    sum += nums[i]
  }
  return sum
}

// console.log(sumArray([1,2,3,4,5]))


/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

function oddArray(nums) {
  let arr = []
  for(let i = 0; i < nums.length; i ++){
    if(nums[i] % 2 !== 0){
      arr.push(nums[i])
    }
  }      
  return arr
}

// console.log(oddArray([0,1,2,3,4,5,6,7,8,9]))

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  let arr = []
  for(let i = 0; i < nums.length; i ++){
    if(nums[i] % 2 === 0){
      arr.push(nums[i])
    }
  }      
  return arr
}

// console.log(evenArray([0,1,2,3,4,5,6,7,8,9]))

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  let smallest = nums[0]
  for(let i = 0; i < nums.length; i ++){
    if(nums[i] < smallest){
      smallest = nums[i]
    }
  }
  return smallest
}


// console.log(findSmallest([2,3,4,5,6,7,8,9]))


/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest(nums) {
  let smallest = Infinity
  let secSmallest = Infinity
  for(let i = 0; i < nums.length; i ++){
    if(nums[i] < smallest){
      secSmallest = smallest            
      smallest = nums[i]
    }
    else if(nums[i] < secSmallest){
      secSmallest = nums[i]
    }
  }    
  return secSmallest
}


// console.log(findSecondSmallest([2,3,4,5,6,7,8,9]))


/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {
  let largest = -Infinity
  let secLargest = -Infinity
  for(let i = 0; i < nums.length; i ++){
    if(nums[i] > largest){
      secLargest = largest            
      largest = nums[i]
    }
    else if(nums[i] > secLargest){
      secLargest = nums[i]
    }
  }    
  return secLargest
}


// console.log(findSecondLargest([2,3,4,5,6,7,8,9]))


/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups(nums) {
  let arr = []
  for(let i = 0; i < nums.length; i ++) {
    if (!arr.includes(nums[i])){
      arr.push(nums[i])
    }
  }
return arr
}

// console.log(removeDups([2,2,2,2,2,2,2,3,4,5,5,5,5,5,5,6,7,8,9]))


module.exports = {
  shoutForLoop,
  shoutWhileLoop,
  shoutForOfLoop,
  sumArray,
  oddArray,
  evenArray,
  findSmallest,
  findSecondSmallest,
  findSecondLargest,
  removeDups,
};

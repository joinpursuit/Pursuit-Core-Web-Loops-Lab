/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(array) {
  for (i = 0; i < array.length; i ++) {
    array[i] += '!'
  }
  return array
}
/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(Array) {
 let i = 0
 while (i < Array.length) {
   Array[i] += '!'
   i += 1
 }
 return Array
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForOfLoop(Array) {
  let newArray = []
  for (let i of Array) {
    newArray.push(i += '!')
    i += 1
  }
  return newArray
}

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(nums) {
  let sum = 0
  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i]
  }
  return sum
}

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

function oddArray(nums) {
  let newArray = []
  let i = 0
  while (i < nums.length) {
    if (nums[i] % 2 === 1) {
      newArray.push(nums[i])
    }
    i += 1
  }
  return newArray
}

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
let newArray = []
let i = 0
  while (i < nums.length) {
    if (nums[i] % 2 === 0) {
      newArray.push(nums[i])
    }
    i += 1
  }
  return newArray
}

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  let min = nums[0]
  for (let i = 0; i < nums.length; i += 1) {
    if (min > nums[i]) {
      min = nums[i]
    }
  }
  return min
}

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest(nums) {
  let smallest = nums[0]
  let secondSmallest = Infinity
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] < smallest) {
      secondSmallest = smallest
      smallest = nums[i]
    }
    else if (nums[i] < secondSmallest && nums[i] > smallest) {
      secondSmallest = nums[i]
    }
  }
  return secondSmallest
}
//let test = [3, 435, 2, 35, 12]
// [2, 3, 12, 35, 435] --> 3
/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {
let largest = nums[0]
let secondLargest = -Infinity
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] > largest) {
      secondLargest = largest
      largest = nums[i]
    }
    else if (nums[i] > secondLargest && nums[i] < largest) {
      secondLargest = nums[i]
    }
  }
  return secondLargest
}

/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups(nums) {
  let newArray = []
  for (let remove of nums) {
    if (! newArray.includes(remove)) {
      newArray.push(remove)
    }
  }
  return newArray
}

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

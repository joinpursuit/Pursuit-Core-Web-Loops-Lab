/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(array) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + "!")
  }
  return newArray
}
/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(array) {
  let newArray = []
  let i = 0
  while (i < array.length) {
    newArray.push(array[i] + "!")
    i++
  }
  return newArray
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForOfLoop(array) {
  let newArray = []
  for (const element of array) {
    newArray.push(element + '!')
  }
  return newArray
}

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(nums) {
  value = 0
  for (let i = 0; i < nums.length; i++) {
    value = value + nums[i]
  }
  return value
}

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

function oddArray(nums) {
  let newArray = []
  for (const element of nums) {
    if (element % 2 === 1) {
      newArray.push(element)
    }
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
  for (const element of nums) {
    if (element % 2 === 0) {
      newArray.push(element)
    }
  }
  return newArray
}

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  let answer = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[(i - 1)]) {
      answer = nums[i]
    }
  }
  return answer
}

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest(nums) {
  let secondSmallest = nums[1]
  let smallestNumber = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < smallestNumber) {
      secondSmallest = smallestNumber
      smallestNumber = nums[i]
    }
    else if (nums[i] < secondSmallest) {
        secondSmallest = num[i]
    } 
  }
  return secondSmallest
}

/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {
  let largestNumber = nums[0]
  let secondLargest = nums [1]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largestNumber) {
      secondLargest = largestNumber
      largestNumber = nums[i]
    }
    else if (nums[i] > secondLargest) {
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
  let array = []
  for (let num of nums) {
    if (array.includes(num) === false) {
      array.push(num)
    }
  }
  return array
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

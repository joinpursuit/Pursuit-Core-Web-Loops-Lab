/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(arr) {
  let newArr = []
  for (let element of arr) {
    newArr.push(element + "!")
  }
  return newArr
}
/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(arr) {
  let i = 0
  let newArr = []
  while (i < arr.length) {
    newArr[i] = arr[i] + "!"
    i++
  }
  return newArr
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForOfLoop(arr) {
  let newArr = []
  for (let element of arr) {
    newArr.push(element + "!")
  }
  return newArr
}

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(nums) {
  let sum = 0
  for (let num of nums) {
    sum += num
  }
  return sum
}

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

function oddArray(nums) {
  let oddNums = []
  for (let num of nums) {
    if (num % 2 === 1) {
      oddNums.push(num)
    }
  }
  return oddNums
}

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  let evenNums = []
  for (let num of nums) {
    if (num % 2 === 0) {
      evenNums.push(num)
    }
  }
  return evenNums
}

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  let min = nums[0]
  for (let num of nums) {
    if (num < min) {
      min = num
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
  let min = nums[0] < nums[1] ? nums[0] : nums[1]
  let secondMin = nums[0] < nums[1] ? nums[1] : nums[0]
  for (let num of nums.slice(2)) {
    if (num < min) {
      secondMin = min
      min = num
    } else if (num < secondMin) {
      secondMin = num
    }
  }
  return secondMin
}

/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {
  let max = nums[0] > nums[1] ? nums[0] : nums[1]
  let secondMax = nums[0] > nums[1] ? nums[1] : nums[0]
  for (let num of nums.slice(2)) {
    if (num > max) {
      secondMax = max
      max = num
    } else if (num > secondMax) {
      secondMax = num
    }
  }
  return secondMax
}

/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups(nums) {
  let noDupes = []
  for (let num of nums) {
    if (!noDupes.includes(num)) {
      noDupes.push(num)
    }
  }
  return noDupes
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

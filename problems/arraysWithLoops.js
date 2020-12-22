/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(array) {

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + '!';
  }
  return array
}
//secondArr[0] = 'giraffe'
//console.log(shoutForLoop(["I", "am", "a", "happy", "array"]))
/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(array) {
  let sum = 0
  while (sum < array.length) {
    array[sum] = array[sum] + '!'
    sum += 1
  }
  return array
}
//console.log(shoutWhileLoop(["I", "am", "a", "happy", "array"]))
/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForOfLoop(array) {
  newArray = []
  for (let element of array) {
    const v = element + "!"
    newArray.push(v)
  }
  return newArray
}
//console.log(shoutForOfLoop(["I", "am", "a", "happy", "array"]))

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(nums) {
  var sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  return sum
}
//console.log(sumArray([1,2,3,4,5]))
/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

function oddArray(nums) {
  array = []
  n = 0
  for (i = 0; i < (nums.length); i++) {
    if (nums[i] % 2 === 1) {
      array[n] = nums[i]
      n++
    }
  }
  return array
}

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  array = []
  n = 0
  for (i = 0; i < (nums.length); i++) {
    if (nums[i] % 2 === 0) {
      array[n] = nums[i]
      n++
    }
  }
  return array
}
//console.log(evenArray([9, 8, 7, 3, 5, 4]))



/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  var smallestNum = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallestNum) {
      smallestNum = nums[i]


    }

  }
  return smallestNum
}

//console.log(findSmallest([2, 4, 3, 5, 4,1]))

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest(nums) {
  var min = Infinity
  var secondMin = Infinity
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      secondMin = min;
      min = nums[i]
    } else if (nums[i] < secondMin) {
      secondMin = nums[i]
    }
  }
  return secondMin
}

//console.log(findSecondSmallest([3,2,4,1,5]))

/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {
  var lgst = - Infinity
  var secondLgst = - Infinity
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > lgst) {
      secondLgst = lgst;
      lgst = nums[i]
    } else if (nums[i] > secondLgst) {
      secondLgst = nums[i]
    }
  }
  return secondLgst
}
console.log(findSecondLargest([3,2,4,1,5]))


/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups(arr) {
  let output = []
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]
    if (output.includes(num)) {
      continue
    } output.push(num)

  }
  return output
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

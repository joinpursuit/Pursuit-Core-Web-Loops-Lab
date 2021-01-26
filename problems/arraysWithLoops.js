/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */
//let happy = ["I", "am", "a", "happy", "array"]
function shoutForLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += '!'
  }
  return arr
};
 

//console.log(shoutForLoop(happy))*/

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(arr) {
  let i = 0
  while (i < arr.length) {
    arr[i] += '!'
    i += 1
  }
  return arr
};

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForOfLoop(arr) {
  let newArr = []
  for (let i of arr) {
    newArr.push(i += '!')
    i += 1
  }
   return newArr
};

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */
//let arr = []
function sumArray(nums) {
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
   return sum
};

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

function oddArray(nums) {
  let newArr = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) {
      newArr.push(nums[i])
    }
  }
   return newArr 
};


/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  let newArr = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      newArr.push(nums[i])
    } 
  }
  return newArr
};

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  let smallest = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (smallest > nums[i]) {
       smallest = nums[i]
    }
  }
   return smallest
};

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest(nums) {
  let smallest = Infinity
  let sndSmall = Infinity
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallest) {
      sndSmall = smallest
      smallest = nums[i]
  } else if (nums[i] < sndSmall) {
     sndSmall = nums[i]
  }
  }
  return sndSmall
};
// Thank you both for reviewing this in class ... 

/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {
 let largest = - Infinity
 let sndLargest = - Infinity
 for (let i = 0; i < nums.length; i++) {
   if (nums[i] > largest) {
     sndLargest = largest
     largest = nums[i]
   } else if (nums[i] > sndLargest) {
     sndLargest = nums[i]
   }
 }
 return sndLargest
};
// Thanks !

/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups(nums) {
  let newArr = []
  for (let i = 0; i < nums.length; i++) {
    if (! newArr.includes(nums[i])) {
      newArr.push(nums[i])
    }
  }
  return newArr
};

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

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(arr){
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    newArr.push(arr[i] + "!")
  }
  return newArr
}
shoutForLoop(["I", "am", "a", "happy", "array"])

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(arr) {
  let newArr = []
  let i = 0
  while (i < arr.length){
    newArr.push(arr[i] + "!")
    i++
  }
  return newArr
}
shoutWhileLoop(["I", "am", "a", "happy", "array"])
/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForOfLoop(arr) {
  let newArr = []
  for(let i of arr) {
   newArr.push(i + "!")
  }
  return newArr
}
shoutForOfLoop(["I", "am", "a", "happy", "array"])
/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(nums) {
  let sum = 0
  for(let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  return sum
}
sumArray([1,2,3])
/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

function oddArray(nums) {
  let newArr = []
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] % 2 !== 0) {
      newArr.push(nums[i])
    }
  }
  return newArr
}
oddArray([1,2,3,4,5])
/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  let newArr = []
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] % 2 === 0) {
      newArr.push(nums[i])
    }
  }
  return newArr
}
evenArray([1,2,3,4,5])

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  let smallest = Infinity
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] < smallest){
      smallest = nums[i]
    }
  }
  return smallest
}
findSmallest([1,2,3])
/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest() {}

/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest() {}

/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups() {}

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

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(array) {
let newArray = []
  for (let i = 0; i < array.length; i += 1) {
  newArray.push(array[i] + "!")
  }
return newArray
}
shoutForLoop([1,2,3,4])
/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(array) {
let newArray1 = []
let i = 0
  while (i < array.length) {
    newArray1.push(array[i] + "!")
    i += 1
   }
return newArray1
}
shoutWhileLoop([1,2,3,4])
/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForOfLoop(array) {
  let newArray2 = []
  
  for (let i of array) {
    newArray2.push(i+"!")
  }
  return newArray2
}
shoutForOfLoop([1,2,3,4])


/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(array) {
let total = 0
for (let i = 0; i < array.length; i += 1) {
  total += array[i]
}
  return total

}
console.log(sumArray([1,2,3,4]))
/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

function oddArray(nums) {
  let oddity = []
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] % 2) !== 0) {
    oddity.push(nums[i])
    }
  }
  return oddity
}
console.log(oddArray([1,2,3,4,5,6,7,8]))
/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  let even = []
  for (let i = 0; i < nums.length; i ++) {
    if ((nums[i] % 2) === 0) {
      even.push(nums[i])
    }
  } return even
}
console.log(evenArray([1,2,3,4,5,6,7,8]))
/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  for (let i = 0; i < nums.length; i ++) {
    return Math.min(...nums)
  }
}
console.log(findSmallest([1,2,3,4]))
/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest(nums) {
  for (let i = 0; i < nums.length; i ++) {
    return Math.min(...nums) + 1
  }
}
console.log(findSecondSmallest([1,2,3,4]))
/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {
  for (let i = 0; i < nums.length; i ++) {
    return Math.max(...nums) - 1
  }
}
console.log(findSecondLargest([1,2,3,4]))
/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups(nums) {
  
  for (let i = 0; i < nums.length; i ++) {
  let uniqueSet = [...new Set(nums)]
  return uniqueSet
  } 
} 
console.log(removeDups([1,2,2,3,4,5,5,6]))
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

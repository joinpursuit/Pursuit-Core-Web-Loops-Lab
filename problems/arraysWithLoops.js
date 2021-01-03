/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(array) {
  for (i = 0; i < array.length; i++){
    array[i] = array[i] + "!"
  } return array
}
/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(array) {
  i = 0 
  while (i < array.length){
    array[i] = array[i] + "!"
    i++
  } return array
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForOfLoop(array) {
  i = 0
  for (element of array) {
    i < array.length
    array[i] = array[i] + "!"
    i ++
  } return array
}

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(nums) {
  let sum = 0
  for (let i = 0; i < nums.length; i++){
    sum += nums[i]
  } return sum
}

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

function oddArray(nums) {
  let sum = []
  for (let i = 0; i <= nums.length - 1; i++)
  if (nums[i] % 2 === 1) 
  sum.push(nums[i])
  return sum
}

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  let sum = []
  for (let i = 0; i <= nums.length - 1; i++)
  if (nums[i] % 2 === 0) 
  sum.push(nums[i])
  return sum
}

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  let smallest = nums[0]
  for(let i = 0; i <= nums.length - 1; i++)
  if(nums[i] < smallest)
  smallest = nums[i]
  return smallest
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
  let array = []
  for ( let remove of nums) {
    if (! array.includes(remove)) {
      array.push(remove)
    }
  } return array
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

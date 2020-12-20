/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(array) {
  let array2 = [];
  for (let i = 0; i <= array.length - 1; i++) array2[i] = array[i] + "!"
  return array2;
}
  
/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(array) {
  let array2 = []
  let i = 0
  while(i <= array.length - 1) {
    array2.push(array[i] + "!")
    i++;
  }
  return array2;
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForOfLoop(array) {
  let array2 = []
  for(let element of array) array2.push(element + "!");
  return array2;
}

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(nums) {
  let sum = 0
  for(let i = 0; i <= nums.length - 1; i++) sum += nums[i];
  return sum;
}

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

function oddArray(nums) {
  let sum = []
  for(let i = 0; i <= nums.length - 1; i++)
  if (nums[i] % 2 === 1) sum.push(nums[i]);
  return sum;
}

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  let sum = []
  for(let i = 0; i <= nums.length - 1; i++)
  if(nums[i] % 2 === 0) sum.push(nums[i]);
  return sum;
}

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  let smallestNum = nums[2];    // why is this undefined?
  for(let i = 0; i <= nums.length - 1; i++)
  if(nums[i] < smallestNum) smallestNum = nums[i]
    return smallestNum;
  }

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest(nums) {
  let secondSmallest = nums [0]
  for(let i = 0; i <= nums.length - 1; i++)
  if(nums[i] < secondSmallest) secondSmallest = nums[i]
  return secondSmallest +1
}

/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {
  let secondLargest = nums [0]
  for(let i = 0; i <= nums.length - 1; i++)
  if(nums[i] > secondLargest) secondLargest = nums[i]
  return secondLargest -1
}

/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups(nums) {
  let Dups = [];

  for (let i = 0; i < nums.length; i++) {
    if(! Dups.includes(nums[i])) {
        Dups.push(nums[i])
      }
  }
    return Dups
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

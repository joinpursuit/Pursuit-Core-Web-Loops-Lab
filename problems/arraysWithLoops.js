/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(array) {
  let arrayCopy =[]
  for (let i =0; i <= array.length -1; i++) 
    arrayCopy[i] = array[i] + "!"
  return  arrayCopy
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(array) {
  let arrayCopy = []
  let i = 0
  while (i <= array.length -1) {
    arrayCopy.push(array[i] + "!")
    i++
  }
  return arrayCopy
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForOfLoop(array) {
  let arrayCopy = []
  for (let element of array)
  arrayCopy.push(element + "!")
  return arrayCopy
}

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(nums) {
  let sum = 0
  for (i =0; i<= nums.length -1; i++)
  sum += nums[i]
  return sum
}

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

function oddArray(nums) {
  let numsCopy = []
  for (let i =0; i<= nums.length-1; i++)
  if(nums[i] % 2 ===1)
  numsCopy.push(nums[i])
  return numsCopy
}

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  let numsCopy = []
  for (let i =0; i<= nums.length-1; i++)
  if(nums[i] % 2 === 0)
  numsCopy.push(nums[i])
  return numsCopy
}



/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  let smallest =nums[0]
  for( let i =0; i<= nums.length -1; i++)
  if (nums[i]< smallest)
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
  let smallSecond

  if(nums[1] < smallest){
    smallSecond = smallest
    smallest = nums[1]
  } else
      smallSecond = nums[1]

  for(let i = 2; i <= nums.length - 1; i++){
    if(nums[i] < smallest){
      smallSecond = smallest
      smallest = nums[i]
    } else if(nums[i] < smallSecond)
            smallSecond = nums[i]
  }
  return smallSecond
}



/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {
  let largest
  let largeSecond

  if(nums[0] > nums[1]){
    largest = nums[0]
    largeSecond = nums[1]
  } else {
    largest = nums[1]
    largeSecond = nums[0]
  }

  for(let i = 2; i <= nums.length - 1; i++){
    if(nums[i] > largest){
      largeSecond = largest
      largest = nums[i]
    } else if(nums[i] > largeSecond)
            largeSecond = nums[i]
  }
  return largeSecond
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
  if (nums.length>0)
  array.push(nums[0])
  else
  return nums
  for( let i =1; i <= nums.length -1; i++){
    if(array.includes(nums[i])){
    } else
    array.push(nums[i])
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

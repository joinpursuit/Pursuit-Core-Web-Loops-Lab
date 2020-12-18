/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(Array) {
  let arr =[]

  for (i = 0 ; i < Array.length ; i++){
    let newP = Array[i] + "!"
    arr.push(newP)
  } return arr   
}
/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(Array) {
  let arr = []
  let i = 0 

  while (i < Array.length){
    let newP = Array[i] + "!"
    arr.push(newP) 
    i++
  } return arr 
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForOfLoop(Array) {
  let arr =[]

  for (pieces of Array){
    let newP = pieces + "!"
    arr.push(newP)
  } return arr   
}

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(nums) {
  let sum = 0 
  for (let piece of nums ){
      sum += piece   
  }  return sum 
}

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

function oddArray(nums) {
  let arr =[]

  for (pieces of nums){
    if (pieces % 2 !== 0 ){
      arr.push(pieces)
    }
  } return arr 
}

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  let arr = []
  
  for (i = 0 ; i <= nums.length ; i++){
    if (nums[i] % 2 === 0){
      arr.push(nums[i])
    } 
  } return arr 
}
/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  let i = nums[0]
    for (let num of nums){
      if (num < i ){
      i = num  
    } 
      } return i  
    }

 



/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest(nums) {
  min1 = nums[0]
  min2 = nums[1]

  for (let i = 0 ; i < nums.length ; i++){
    if (nums[i] < min1){
      min2 = min1 
      min1 = nums[i]
    } else if (nums[i] < min2 && nums[i] > min1){
      min2 = nums[i]
    }
  } return min2 

 
}


/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {
  max1 = nums[0]
  max2 = nums[1]

  for (let i =0 ; i < nums.length ; i++){
    if (nums[i] > max1){
      max2 = max1 
      max1 = nums[i]
    } else if (nums[i] > max2 && nums[i] < max1){
      max2 = nums[i]
    } 
  } return max2 
}

/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups(nums) {
  let arr = []

  for (let piece of nums){
    if (!arr.includes(piece)){
      arr.push(piece)
    }
  } return arr 
   
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

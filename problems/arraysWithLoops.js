/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(arr) {
let nArr = []
  for ( i = 0 ; i < arr.length; i++){

      nArr.push(arr[i] + "!")

  }
  return nArr
}
/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(arr) {
  let nArr = []
  i = 0
  while(i < arr.length){
    nArr.push(arr[i]+"!")
    i++
  }
  return nArr
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */
//for (variable of iterable) {
  //statement      for (const element of array1) {
//}

function shoutForOfLoop(arr) {
nArr = []

for (const element of arr){
        nArr.push(element + "!")
}
return nArr
} 

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(nums) {
  let sum = 0
 for(i = 0 ; i < nums.length; i++){
      sum += nums[i]
 }

return sum
}

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

function oddArray(nums) { 
  nArr = [] 
  for(i = 0 ; i < nums.length; i++){
    if( nums[i] % 2 !== 0 ){ 
      nArr.push(nums[i])
    }
  }
  return nArr
}

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  nArr = [] 
  for(i = 0 ; i < nums.length; i++){
    if( nums[i] % 2 === 0 ){ 
      nArr.push(nums[i])
    }
  }
  return nArr
}

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums 
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  
  let smallest = nums[0]
  for(i = 0 ; i < nums.length; i++){
    if (nums[i] < smallest){
      smallest = nums[i]
    }
  }
  return smallest
}


/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value   [6,5,1,2,3,4]
 */
// find the smallest then slice it out of the array 
// then im going to go to the new array and find the smallest again

function findSecondSmallest(nums) {
  smallest = findSmallest(nums)
  index = nums.indexOf(smallest)

  nums.splice(index, 1)
  return findSmallest(nums)
}

/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */ // [3,5,1,2,6,4]

function findSecondLargest(nums) {
  largest = Math.max(...nums)  //6
  index = nums.indexOf(largest) // 4
  nums.splice(index, 1) // [3,5,1,2,4]
  return Math.max(...nums) //5
  
}

/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups(nums) {
newArr = []
for (i = 0 ; i < nums.length ; i++){
  if(!newArr.includes(nums[i])){ 
    newArr.push(nums[i])
  }
}
return newArr
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

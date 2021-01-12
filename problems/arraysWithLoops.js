/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(array) {
  let newArray = []
  for ( let element = 0; element < array.length;element++ ){
    newArray.push(array[element]+ '!')
  }
  return newArray
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

 
function shoutWhileLoop(array) {
  let newArray = []
  let element = 0
  while(element < array.length ){
    newArray.push(array[element]+ '!')
    element++;
  }
  return newArray
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForOfLoop(array) {
  let newArray = []
  for ( let element of array){
    newArray.push(element+ "!")
  }return newArray
}

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(nums) {
  let sum = 0
  for(let n =0; n < nums.length; n++){
    sum = sum +nums[n]
  }return sum
}

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

function oddArray(nums) {
  let newArray = []
  for (let n = 0; n <nums.length; n++ ){
    if(nums[n] %2 !==0){ 
      newArray.push(nums[n])
    }
    
  }return newArray
}


/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  let newArray = []
  for (let n =0; n < nums.length; n++){
    if(nums[n] %2 ===0){ 
      newArray.push(nums[n])
    }
  }return newArray
}


/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  let smallest = Infinity
  for( let n = 0; n < nums.length;n++){
    if(nums[n]<smallest){
      smallest = nums[n]
    }
  }return smallest
}

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest(nums) {
  let smallest = nums[0]
  let secondSmallest = nums[1]
  for( let n = 0; n < nums.length;n++){
    if(nums[n] < smallest){
      secondSmallest = smallest
      smallest = nums[n]
    }else if( nums[n] < secondSmallest && nums[n] > smallest){
      secondSmallest = nums[n]
    }
    
  }return secondSmallest

}

/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {
  let largest= nums[0]
  let secondlargest= nums[1]
  for( let n = 0; n < nums.length;n++){
    if(nums[n] > largest){
      secondlargest = largest
      largest = nums[n]
    }else if( nums[n] > secondlargest &&  nums[n] < largest){
      secondlargest = nums[n] 
    }
    
  }return secondlargest

}

/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups(nums) {
  let newArray = []
  for ( let n =0; n < nums.length;n++){
    if(!newArray.includes(nums[n])){
      newArray.push( nums[n])
    }
  }return newArray
  
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

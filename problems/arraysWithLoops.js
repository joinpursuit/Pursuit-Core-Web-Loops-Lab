/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

 
function shoutForLoop(array) {
  
  for(i = 0;i < array.length;i +=1){
    array[i]= array[i] + '!'  
  }
  return array
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(array) {
  let num = 0
  while(num < array.length){
    array[num]= array[num] + '!'
    num += 1
  }
  return array
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
  for(let element of array){
     const v = element + '!';
     newArray.push(v)
   
  }
  return newArray
}

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(nums) {
  let sum = 0
  for(i = 0;i < nums.length;i += 1){
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
  let newArray = []
  for(i = 0;i < nums.length;i += 1){
    if(nums[i] % 2 !== 0){
      newArray.push(nums[i])
    } 
    
  }
  return newArray
}

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  let newArray = []
  for(i = 0; i < nums.length;i += 1){
     if(nums[i] % 2 === 0){
      newArray.push(nums[i])
     }
    }
    return newArray
  }


/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  let small = 999999999
  for(i = 0;i < nums.length; i++){
    if(nums[i] <= small){
      small = nums[i]
    }
  }
 return small
}

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest(nums){
  let smallest = Number.MAX_SAFE_INTEGER + 1
    let secondSmallest = Number.MAX_SAFE_INTEGER + 2
  for(let i = 0;i < nums.length;i++){
    if(nums[i] <= smallest){
      smallest = nums[i]
    }
  }
    for(let j = 0;j< nums.length;j++){
      if(nums[j] <= secondSmallest && nums[j] > smallest){
        secondSmallest = nums[j]
      }
    }
    return  secondSmallest
  }
 
//[3, 8, 4, 9, 2]
/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {
  let largest = Number.MIN_SAFE_INTEGER + 2
  let secondLargest = Number.MIN_SAFE_INTEGER + 1
  for(let i = 0;i < nums.length;i++){
    if(nums[i] >= largest){
      largest = nums[i]
    }
  }
    for(let j = 0;j< nums.length;j++){
      if(nums[j] >= secondLargest && nums[j] < largest){
        secondLargest = nums[j]
      }
    }
    return  secondLargest
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
  let dupArray = []
  for(let i = 0;i < nums.length;i++){
    if(newArray.includes(nums[i])){
      dupArray.push(nums[i])

    }else{
      newArray.push(nums[i])
    }
  }
  return newArray
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

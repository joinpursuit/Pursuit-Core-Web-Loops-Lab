/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(Array) {
  for (let i = 0; i < Array.length; i++) {
    Array[i] = Array[i] + "!";
  }
  return Array;
}
/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(Array) {
  let i = 0;
  while (i < Array.length) {
    Array[i] = Array[i] + "!";
    i++;
  }
  return Array;
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForOfLoop(Array) {
  let array2 = [];
  for (let i of Array) {
    array2.push(i + "!");
  }
  return array2;
}

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(nums) {
  sum=0
  for (let i=0; i<nums.length; i++){
    sum = nums[i] +sum
  }
  return sum 
}

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

function oddArray(nums) {
 let arr=[]
  for(let i=0; i< nums.length; i++){
    if( nums[i] %2 !== 0){
      arr.push(nums[i])
    }
  }
  return arr
}

console.log(oddArray([2,3,5]))


 /**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  let arr =[]
  for(let i=0; i<nums.length ; i++){
    if( nums[i] %2 ===0){
      arr.push(nums[i])
    }
  }
  return arr
}

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  smallest = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallest) {
      smallest = nums[i];
    }
  }
  return smallest;
}

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest(nums) {
  let smallest = Infinity
  let secondSmallest = Infinity
  for (let i =0; i<nums.length; i++){
    const a = nums[i]
    if (a < smallest){
      secondSmallest = smallest
      smallest=a
    }else if (a < secondSmallest){
      secondSmallest=a
    }
  }
  return secondSmallest
}
console.log(findSecondSmallest([2,3,4,5]))


/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {
  let largest = -Infinity
  let secondLargest= -Infinity
  for (let i=0; i< nums.length; i++){
    const a = nums[i]
    if (a > largest){
      secondLargest = largest
      largest = a
    }else if(a > secondLargest)
      secondLargest=a
  }
  return secondLargest
}
console.log(findSecondLargest([3,4,10,5,9]))
/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups(nums) {
  let array= []
  for(let i=0; i<nums.length; i++){
    if(!array.includes(nums[i])){ //if the new array already doesnt have that number push it into the new array 
      array.push(nums[i])
    }
  }
  return array 
}
//console.log(removeDups([2,2,3,4,4]))

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
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(array) {
  exclaimArray = []
  for (let i=0; i<array.length; i++){
    exclaimArray.push(array[i]+"!")
  }
  return exclaimArray
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
  let i = 0;
  while (i < array.length) {
 newArray.push(array[i]+"!");
 i++;
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
  let forOfArray = []
  for (const el of array) {
    forOfArray.push(el + "!")
  }
  return forOfArray
}

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(nums) {
  let sum = 0
  for(let i = 0;i<nums.length;i++){
    sum = sum += nums[i]
  }
  return sum
}

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

function oddArray(nums) {
  let allOdds = []
  for (let i=0;i<nums.length;i++){
    if (nums[i] % 2 === 1){
      allOdds.push(nums[i])
    } 
  }
  return allOdds
}


/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  let allEvens = []
for (let i=0;i<nums.length;i++){
  if (nums[i] % 2 === 0){
    allEvens.push(nums[i])
  } 
}
return allEvens
}


/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  let smallest = nums[0]
  for (let i=1; i<nums.length;i++){
   if(smallest > nums[i]){
     smallest = nums[i]
   }else{
     smallest = smallest
   }
  }
return smallest 
}

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

const findSecondSmallest = nums => {
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] < smallest) {
      smallest = nums[i]
    }
  }
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] > smallest && nums[i] < secondSmallest) {
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

const findSecondLargest = nums => {
  let largest = -Infinity
  let secondLargest = -Infinity
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] > largest) {
      largest = nums[i]
    }
  }
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] < largest && nums[i] > secondLargest) {
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
const removeDups = nums => {
  let newArray = [];
  for(let i = 0; i < nums.length; i++) {
    if(!newArray.includes(nums[i])) {
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

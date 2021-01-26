/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + "!");
  }
  return newArray;
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(array) {
  let newArray = [];
  let i = 0;
  while (i < array.length) {
    newArray.push(array[i] + "!");
    i++;
  }
  return newArray;
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

const shoutForOfLoop = (array) => {
  let newArray = [];
  for (let odd of array) {
    newArray.push(odd + "!");
  }
  return newArray;
};

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

const sumArray = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i];
  }
  return sum;
};

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

function oddArray(nums) {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      newArray.push(nums[i]);
    }
  }
  return newArray;
}

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      newArray.push(nums[i]);
    }
  }
  return newArray;
}

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  let smallestNumber = nums[i];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallestNumber) {
      smallestNumber = nums[i];
    }
  }
  return smallestNumber;
}

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest(nums) {

  let smallest = Infinity;
  let second = Infinity;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num < smallest) {
      second = smallest;
      smallest = num;
    } else if (num < second) {
      second = num;
    }
  }
  return second;
}

/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {

  let largest = Infinity;
  let secondLargest = Infinity;

  for(let i = 0; i < nums.length; i++){
    const num = nums[i];
    if(num > largest){
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest){
      secondLargest = num;
    }
  }
  return secondLargest;
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
   nums.forEach((el) => {
    if(!newArray.includes(el)){
      newArray.push(el);
    }
    return newArray;
});
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

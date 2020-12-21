/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(arr) {
  let myArray = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    myArray.push(`${arr[i]}!`);
  }
  return myArray;
}
/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(arr) {
  let i = 0;
  let myArray = [];
  while (i < arr.length) {
    myArray.push(`${arr[i]}!`);
    i++;
  }
  return myArray;
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForOfLoop(arr) {
myArray = []
  for (let i of arr) {
    myArray.push(`${i}!`);
    
  }
  return myArray;
    
  }





/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(nums) {
  let sum = 0;

  for (i = 0; i < nums.length; i++) {
    console.log(sum);
    sum += nums[i];
  }
  return sum;
}

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

function oddArray(nums) {
  let newArray = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) {
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
  let smallNum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= smallNum) {
      smallNum = nums[i];
    }
  }
  return smallNum;
}

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest(nums) {
  let smallNum = Infinity;
  let secondSmall = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallNum) {
      smallNum = nums[i];
    }
    for (let i = 0; i < nums.length; i++)
      if (nums[i] > smallNum && nums[i] < secondSmall) secondSmall = nums[i];
  }
  return secondSmall;
}

/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {
  let larNum = -Infinity;
  let secondLar = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > larNum) {
      larNum = nums[i];
    }
    for (let i = 0; i < nums.length; i++)
      if (nums[i] < larNum && nums[i] > secondLar) 
      secondLar = nums[i];
  }
  return secondLar;
}

/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups(nums) {
 let myNewArray =[]
  for (i = 0; i < nums.length; i++) {
    if( !myNewArray.includes(nums[i]) ) {
   myNewArray.push(nums[i])
  }
} 
  return myNewArray
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

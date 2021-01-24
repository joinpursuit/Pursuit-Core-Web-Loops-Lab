/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

const shoutForLoop = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + "!");
  }
  return newArray;
};

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

const shoutWhileLoop = (array) => {
  let newArray1 = [];
  let i = 0;
  while (i < array.length) {
    newArray1.push(array[i] + "!");
    i++;
  }
  return newArray1;
};

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

const shoutForOfLoop = (array) => {
  let newArray = [];
  for (let element of array) {
    newArray.push(element + "!");
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
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

const oddArray = (nums) => {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) {
      newArray.push(nums[i]);
    }
  }
  return newArray;
};

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

const evenArray = (nums) => {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      newArray.push(nums[i]);
    }
  }
  return newArray;
};

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

const findSmallest = (nums) => {
  let smallestNum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallestNum) {
      smallestNum = nums[i];
    }
  }
  return smallestNum;
};
/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

const findSecondSmallest = (nums) => {
  let smallestNum = Infinity;
  let secondSmallestNum = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallestNum) {
      secondSmallestNum = smallestNum;
      smallestNum = nums[i];
    } else if (nums[i] < secondSmallestNum) {
      secondSmallestNum = nums[i];
    }
  }
  return secondSmallestNum;
};
//     }
// }
/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

const findSecondLargest = (nums) => {
  let largestNum = -Infinity;
  let secondLargestNum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > largestNum) {
      secondLargestNum = largestNum;
      largestNum = num;
    } else if (num > secondLargestNum) {
      secondLargestNum = num;
    }
  }
  return secondLargestNum;
};

/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
const removeDups = (nums) => {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (newArray.includes(num)) {
      continue;
    } else {
      newArray.push(num);
    }
  }
  return newArray;
};

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

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(array[i] + "!");
  }
  return arr;
}
// ["I", "am", "happy"]
/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(array) {
  let arr = [];
  let i = 0;
  while (i < array.length) {
    arr[i] = array[i] + "!";
    i++;
  }
  return arr;
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForOfLoop(array) {
  let arr = [];
  for (const el of array) {
    arr.push(el + "!");
  }
  return arr;
}

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
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
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      arr.push(nums[i]);
    }
  }
  return arr;
}

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  let arr = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      arr.push(nums[i]);
    }
  }
  return arr;
}

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  let min = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] < min) {
      min = nums[i];
    }
  }
  return min
}

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest(nums) {
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest) {
      secondSmallest = num;
    }
  }
  return secondSmallest;
}

// let smalles = Infinity;
// let secondSmallest = Infinity;

// for (let i = 0; i < arr.length; i++)
/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest) {
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
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (!arr.includes(nums[i])) {
      arr.push(nums[i]);
    }
  }
  return arr;
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

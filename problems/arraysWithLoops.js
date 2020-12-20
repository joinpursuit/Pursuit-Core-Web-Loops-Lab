/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

const shoutForLoop = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + "!";
  }
  return arr;
};
/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

const shoutWhileLoop = (arr) => {
  let i = 0;
  while (i < arr.length) {
    arr[i] = arr[i] + "!";
    i++;
  }
  return arr;
};

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

const shoutForOfLoop = (arr) => {
  let arr2 =[]
  for (let i of arr) {
    arr2.push(i+"!")
  }
  return arr2;
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
 * @returns {array} even
 */

const oddArray = (nums) => {
  let odds = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) {
      odds.push(nums[i])
    }
  }
  return odds
}

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

const evenArray = (nums) => {
  let even = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      even.push(nums[i])
    }
  }
  return even
}

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

const findSmallest = (nums) => {
  let smallest = nums[0];
  for (let i of nums) {
    if (nums[i] < smallest)
      smallest = nums[i]
  }
  return smallest;
}

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

const findSecondSmallest = nums => {

  let smallest = 1000;
  let secondSmallest = 1000;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallest)
      smallest = nums[i]
  }
  return smallest;
}

/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

const findSecondLargest = nums => {

  let largest = -1000;
  let secondLargest = -1000;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest)
      largest = nums[i]
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < largest && nums[i] > secondLargest)
      secondLargest = nums[i];
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
const removeDups = nums => {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    if (!arr.includes(nums[i])) {
      arr.push(nums[i]);
    }
  }
  console.log(arr + "  > "+nums)
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

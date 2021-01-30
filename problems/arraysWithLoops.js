/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(array) {
  let newArry = [];
  for (i = 0; i <= newArry.length - 1; i++) {
    //REMINDER use ; not ,
    newArray[i] = `${array[i]}!`;
  }
  return newArry;
}
/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(array) {
  let newArry = [];
  let i = 1;
  while (i <= array.length - 1) {
    newArry[i] = array[i] + "!";
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

function shoutForOfLoop(array) {
  let newArray = [];
  for (let word of array) {
    newArray.push(word + "!"); //push method adds to array
  }

  return newArray;
}

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(nums) {
  let sum = 0;
  for (i = 0; i < nums.length; i++) {
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
  let array = [];
  for (i = 0; i < nums.length; i++) {
    //if i is less than the lenght of the nums array loop runs
    if (nums[i] % 2 !== 0) {
      //if the indices of nums are not devisible by 2 (odd)
      array.push(nums[i]); //add them using the push method
    }
  }

  return array;
}

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  let array = [];
  for (i = 0; i < nums.length; i++) {
    //if i is less than the lenght of the nums array loop runs
    if (nums[i] % 2 === 0) {
      //if the indices of nums are not devisible by 2 (odd)
      array.push(nums[i]); //add them using the push method
    }
  }

  return array;
}

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {

  return Math.min(nums);


}

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest(nums) {

  for (let i= 0; i< nums.length; i++) {
    if (nums[i]< 0) {
      secondMin = 0;
      min = nums[i]; 
    } else if(nums[i]< secondMin) {
      secondMin = nums[i];
    } 
  }
  return secondMin;
}

/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {
}


/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups(nums) {
  let array = [];
  for (i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!array.includes(num)) {
      array.push(num);
    }
  }

  return array;
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

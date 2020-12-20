/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(array) {
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    // for each array[i] + '!'
    newArray[i] = array[i] + '!';
  }
  return newArray;
}

// shoutForLoop(["I", "am", "a", "happy", "array"]);
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
  while(i < array.length){
    newArray[i] = array[i]+'!';
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
  for(const i of array){
    newArray.push(i + '!')
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
  for(let i = 0; i < nums.length; i++){
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
  for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 !== 0){
      //add to new array
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
  for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 === 0){
      //add to new array
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
  let small = nums[0];
  for(let i = 0; i < nums.length; i++){
    if(nums[i] < small){
      small = nums[i];     
    }
  }
  return small;
}

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest(nums) {
  let smallMax = nums[0];
  let small2ndMax = nums[0];
  // calculates largest variable to assign for compare without 
  // knowing largest number in array
  for (let i = 0; i < nums.length; i++) {
      if (smallMax < nums[i] ) {
          smallMax = nums[i];
          small2ndMax = nums[i];
      }
  }
  // calculates the smallest and reassigns
  // the smallest to smallMax as new max to compare
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallMax)
      smallMax = nums[i]
  }
  // compare and calculate to new smallMax numbers
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > smallMax && nums[i] < small2ndMax)
      small2ndMax = nums[i];
  }
  return small2ndMax;
}

/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {
  let largestMin = nums[0];
  let largest2ndMin = nums[0];
  for(let i = 0; i < nums.length; i++){
    if(nums[i] < largestMin){
      largestMin = nums[i];  
      largest2ndMin = nums[i];   
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largestMin)
      largestMin = nums[i]
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < largestMin && nums[i] > largest2ndMin)
      largest2ndMin = nums[i];
  }
  return largest2ndMin;
}

/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups(nums) {
  let uniNums = [];
  nums.forEach((i) => {
    if (!uniNums.includes(i)) {
        uniNums.push(i);
    }
  });
  return uniNums;
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

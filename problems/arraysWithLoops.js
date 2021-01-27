/** DONE
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // Step toward making cond false
    newArr.push(arr[i] + "!");
  }
  return newArr;
}
// console.log(shoutForLoop(["I", "am", "a", "happy", "array"]))

/**DONE
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(arr) {
  let newArr = [];
  let i = 0;
  while (i < arr.length) {
    newArr.push(arr[i] + "!");
    i++;
  }
  return newArr;
}
// console.log(shoutWhileLoop(["I", "am", "a", "happy", "array"]))

/**DONE
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForOfLoop(arr) {
  let newArr = [];
  for (let el of arr) {
    newArr.push(el + "!");
  }
  return newArr;
}
console.log(shoutForOfLoop(["I", "am", "a", "happy", "array"]));

/**DONE
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

// let arr = [1,2,3,4,5,6]
function sumArray(nums) {
  let sum = 0; //index of zero and a place holder until incremented
  for (i = 0; i < nums.length; i++) {
    sum += nums[i]; //where the incrementation is changed
  }
  return sum;
}
// console.log(sumArray(arr))

/**DONE
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */
// let arr = [1,2,3,4,5,6,7,8,9]
function oddArray(nums) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) {
      newArr.push(nums[i]);
    }
  }
  return newArr;
}
// console.log(oddArray(arr))

/** DONE
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

// let arr = [1,2,3,4,5,6,7,8,9]
function evenArray(nums) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      newArr.push(nums[i]);
    }
  }
  return newArr;
}
// console.log(evenArray(arr))
/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */
//arr = [14, 3, .5, 1];
function findSmallest(nums) {
  let smallest = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (smallest > nums[i]) {
      smallest = nums[i];
    }
  }
  return smallest;
}
//console.log(findSmallest(arr));

/** DONE got this info from the https://stackoverflow.com/questions/47316492/possible-to-use-math-min-to-get-second-smallest-number-from-array
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest() {
  let min = Infinity
  secSmall = Infinity; 
for (let i= 0; i< arr.length; i++) {
    if (arr[i]< min) {
        secSmall  = min;
        min = arr[i]; 
    } else if (arr[i]< secSmall ) {
        secSmall  = arr[i]; 
    }
}
// console.log('Second smallest number: ' + secSmall );

/** NOT SURE HOW TO DO 
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest() {}

/**NOT SURE HOW TO DO 
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups() {}

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

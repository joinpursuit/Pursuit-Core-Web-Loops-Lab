/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(array) {
  const newArray = new Array();
    for(let i = 0; i <= array.length - 1; i++){
      newArray[i] = `${array[i]}!`
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
  const newArray = new Array();
  let i = 0;
  while(i <= array.length - 1){
    newArray[i] = array[i]+"!"
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
  const newArray = new Array();
  for(let word of array){
    newArray.push(word+"!");
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
  for(let i = 0; i <= nums.length-1; i++){
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
  let oddArr = new Array();
  let j = 0;
  for(let i =0; i <= nums.length-1; i++){
    if(nums[i] % 2 !== 0){
      oddArr[j] = nums[i];
      j++;
    }
  }
  return oddArr;
}

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  let evenArr = new Array();
  let j = 0;
  let i =0;
  while(i <= nums.length-1){
    if(nums[i] % 2 === 0){
      evenArr[j] = nums[i];
        j++;
    }
    i++
  }
  return evenArr;
}

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  let temp, size;
  size = nums.length;
 
  for(let i = 0; i<size; i++ ){
    for(let j = i+1; j<size; j++){
      if(nums[i]>nums[j]){
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
   return nums[0];
}


/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest(nums) {
  let min = Infinity, secondMin = Infinity; 
  for (let i= 0; i< nums.length; i++) {
    if (nums[i]< min) {
      secondMin = min;
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
  let temp, size;
  size = nums.length;

  for(let i = 0; i<size; i++ ){
    for(let j = i+1; j<size; j++){
      if(nums[i]<nums[j]){
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
   return nums[1];
}
/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups(nums) {
let uniqueArray = [];
nums.forEach((ch) => {
    if (!uniqueArray.includes(ch)) {
        uniqueArray.push(ch);
    }
  });
  return uniqueArray;
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




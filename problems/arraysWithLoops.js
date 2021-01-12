/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

//function shoutForLoop() {}
const shoutForLoop = (Array) => {
  let output = [];
  for (let i = 0; i < Array.length; i++) {
    output.push(Array[i] + "!");
  }
  return output;
};

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

// function shoutWhileLoop() {
const shoutWhileLoop = (arr) => {
  let i = 0;
  let output = []
  while (i < arr.length) {
    
    output.push(arr[i] + "!");
    i++;
  }
  return output
}


 

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

// function shoutForOfLoop() {}
const shoutForOfLoop = array => {
  let output = []
  for(let element of array) {
    output.push(element + "!")
  }
  return output
}

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

// function sumArray() {}
const sumArray = nums => {
  let sum = 0
  for(let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  return sum
}

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

// function oddArray() {}
const oddArray = nums => {
  let arr = []
    for(let i = 0; i < nums.length; i++) {
      if(nums[i] % 2 === 1)
      arr.push(nums[i])
    }
  return arr
}

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  let arr = []
  for(let i = 0; i <= nums.length; i++) {
    if(nums[i] % 2 === 0) {
        arr.push(nums[i])
    }
  }
    return arr
  }

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  let smallest = Infinity
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] < smallest) {
      smallest = nums[i];
    }
  }
  return smallest
}
// [2,3,5,7,8,9]
/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest(nums) {
  let firstSmallest = nums[0] < nums[1] ? nums[0] : nums[1] //= 1
  let secondSmallest = nums[0] > nums[1] ? nums [0] : nums[1] // =2
  //assigns a second smallest
  for(let i = 2; i < nums.length; i++ ) { // [0], [1], [2]
    if(nums[i] < firstSmallest) { // -3 < 1
      secondSmallest = firstSmallest //
      firstSmallest = nums[i]
    } else if(nums[i] < secondSmallest) {
      secondSmallest =nums[i]
    }
  }
  return secondSmallest
}
// console.log(findSecondSmallest((1,2,-3,4)))

/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {
  let firstLargest = nums[0] > nums[1] ? nums[0] : nums[1]; // [1]
  let secondLargest = nums[0] < nums[1] ? nums[0] : nums[1]; // 10
  for(let i = 2; i < nums.length; i++) {
    if(nums[i] > firstLargest) { // 8 < 12
      secondLargest = firstLargest //
      firstLargest = nums[i] //
    } else if(nums[i] > secondLargest) { 
      secondLargest = nums[i] //
    }
  }
  return secondLargest
}                            // [0],[1],[2],[3]
// console.log((findSecondLargest([10, 12, 14, 11])))


/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups(nums) {
  let newArr = [];
  for(let i = 0; i < nums.length; i++) {
    if(!newArr.includes(nums[i])) {
      newArr.push(nums[i])
    
    }
  
  } 
  return newArr
}                     //[0],[1],[2],
console.log((removeDups([4, 2, 6, 2, 2, 6, 4, 9, 2, 1])))

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

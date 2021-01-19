/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

const shoutForLoop = (arr) => {
  let newArray = []
  for(i = 0; i < arr.length; i++) {
    newArray.push(arr[i] + "!")
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

const shoutWhileLoop = (arr) => {
  let newArr =[];
  let i = 0;
  while (i < arr.length){
    newArr.push(arr[i] + "!")
    i++;
  }
  return newArr;
  }
  
/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

const shoutForOfLoop = (arr) => {
  let newArray = []
  for(let element of arr){
    newArray.push(element + "!");
  }
return newArray;
}
  

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

const sumArray = (nums) => {
  let sum = 0; 
        for(let i = 0; i < nums.length; i++ ) {
            sum += nums[i];
        }    
    return sum;
}

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

const oddArray = (nums) => {
  let odds = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0){
    odds.push(nums[i]);
  }
}
  return odds
}

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

const evenArray = (nums)=> {
  let evens = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0){
    evens.push(nums[i]);
  }
}
  return evens
}
/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

const findSmallest = (nums) => {
  let smallest = nums[0]
  for (let i = 0; i < nums.length; i++){
    if (nums[i]<smallest){
      smallest = nums[i];
    }
  }
  return smallest;
}



/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

const findSecondSmallest = (nums) => {
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i < nums.length; i++){
    if (smallest > nums[i]){
        secondSmallest = smallest
        smallest = nums[i];
      } else if (secondSmallest > nums[i]){
        secondSmallest = nums[i];
      }
  }
  return secondSmallest;
}
console.log(findSecondSmallest([5, 4, 3, 2, 1]))


/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

const findSecondLargest = (nums) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < nums.length; i++){
    if (nums[i] > largest){
      secondLargest = largest
      largest = nums[i];
    } else if(nums[i] > secondLargest){
      secondLargest = nums[i];
    }
  }
  return secondLargest;
}
// console.log(findSecondLargest([1, 5, 3]))

/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
const removeDups = (nums) => {
  let array = [... new Set(nums)];{
    return array;
  }



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

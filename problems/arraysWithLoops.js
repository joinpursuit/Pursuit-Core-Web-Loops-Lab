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
      newArray.push(array[i] + "!")
    }
    return newArray 
  }
/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

  const  shoutWhileLoop = array =>  {
    let newArray = [];
    let idx = 0 
    while (idx < array.length) {
      newArray.push(array[idx] + "!") 
      idx++
    }
    return newArray
 }

  

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */
    // const iterable = [10, 20, 30];

// for (let value of iterable) {
//   value += 1;
//   console.log(value);

  const shoutForOfLoop = (array) => {
    let newArray = []
      for (let i of array) {
        newArray.push(i + "!")  
      }
    return newArray 
  }  

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

 const sumArray = (nums) => {
   let sum = 0;
   for (let i = 0; i < nums.length ; i++) {
      sum += nums[i] 
   }
   return sum 
 }

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

// let numns = [ 1, 2, 3, 4, 5 ]

const oddArray = (nums) =>{
  let newArray = [] // newarray= [ 1,3  ] 
  let i = 0;
  while ( i < nums.length ){
    if (nums [ i ] % 2 === 1){
      newArray.push ( nums [ i ] )
    }
  i++                         
  }
  return newArray
}

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

const evenArray = (nums) => {
  let newArray = [];
  for(i = 0; i < nums.length; i++){
    if(nums [ i ] % 2 === 0  ){
      newArray.push ( nums [ i ] )  
    }
  }
  return newArray;
}

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

const findSmallest = (number) =>{
  let num = 0;
  for(i = 0; i < number.length; i++){
    if( number[i]   < number[i+1]   ){
      num = number[i];
      continue
    }else if( num > number[i]) {
      num = num
      }
  }
  return num; 
}

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

const findSecondSmallest = (numbs) =>{
  let number = 0;
  numbs.sort(function(a, b));

}

/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest() {
  points.sort(function(a, b){return b-a});
}

/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
const removeDups = (nums) => {
  let newArray = [];
   
  return newArray;
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

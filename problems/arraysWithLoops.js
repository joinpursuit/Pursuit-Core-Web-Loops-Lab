/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(Array) {
  let arr=[]
  for (i=0; i < Array.length ;i++){
    arr.push(Array[i]+"!")
  }
  return arr
}


/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(Array) {
  let arr=[]
  let i=0
  while (i<Array.length){
    arr.push(Array[i]+ "!")
    i+=1
  }
  return arr
}

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForOfLoop(Array) {
  let arr=[]
  for(let element of Array){
   arr.push(element + "!")
  }
  return arr 
}

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(nums) {
  let sum = 0
  for(i = 0; i < nums.length;i+= 1){
    sum = sum + nums[i]
    //sum+= nums[i]
  }
  return sum
}

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

function oddArray(nums) {
  let arr =[]
  for (let i=0; i<nums.length; i+=1){
    if ((nums[i] % 2) === 1)
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
  let arr= []
  for( let i=0; i < nums.length; i+=1){
    if ((nums[i] % 2)===0){
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
  let smallestValue = Infinity
  for(let i=0 ; i < nums.length; i+=1){
    if (nums[i] < smallestValue ){
      smallestValue=nums[i]
      //console.log("i="+i+" smallestValue="+smallestValue)
    }
    
  }
   return smallestValue
  }
  //console.log(findSmallest([2,4,6,3,1]))
  


/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

function findSecondSmallest(nums) {
  let smallestNum = Infinity
  let secondSmallest = Infinity
  for (let i = 0; i < nums.length; i+= 1){
    if (nums[i] < smallestNum ){
      secondSmallest = smallestNum
      smallestNum = nums[i]
      } else if (nums[i]< secondSmallest) {
        secondSmallest = nums[i]
      }
    } return secondSmallest 
}



/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {
  // let largestNum = -Infinity;
  //   let secondLargest =  -Infinity;
  
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] >= largestNum) {
  //       largestNum = nums[i];
  //       secondLargest = nums[i] - 1;
  //     }
  //   }
  //   return secondLargest;
  //  }
  let largestNum = -Infinity
  let secondLargest = -Infinity
  for (let i = 0; i < nums.length; i+= 1){
    if (nums[i] > largestNum){
      secondLargest = largestNum  // when reassigning the verbal that if first is the one that we are changing 
      largestNum = nums[i]
    }else if (nums[i] > secondLargest){
      secondLargest = nums[i]
    }
     }
    return secondLargest
  }


/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups(nums) {
let arr= []
for (let i = 0 ; i <nums.length ; i +=1){
if (!arr.includes(nums[i]))
arr.push(nums[i])
}
return arr
}
//console.log(removeDups([4,2,6,2,2,6,4,9,2,1]))
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

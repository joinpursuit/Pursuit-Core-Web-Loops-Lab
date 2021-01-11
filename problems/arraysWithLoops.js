/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForLoop(array) {
  let array2 = []
  for (let i = 0; i <= array.length - 1; i = i + 1) {
    //array2[i] = array[i] + "!"
    array2.push(array[i] + "!")
  }
  return array2
}

console.log(shoutForLoop(["I", "am", "a", "happy", "array", "and", "me"]))
console.log(" ")
/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutWhileLoop(array) {
  let newArray = []
  let i = 0
  while (i < array.length) {
    newArray[i] = array[i] + "!";
    i++;
  }
  
  return newArray
}

console.log(shoutWhileLoop(["I", "am", "a", "happy", "Ivan"]))
console.log(" ")

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

function shoutForOfLoop(array) {
  let newArray = []
  for (let i of array) {
    newArray.push(i + "!");
  }
  return newArray
}

console.log(shoutForOfLoop(["I", "am", "a", "happy", "array"]))

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

function sumArray(array) {
  let sum = 0

  for (let element = 0; element <= array.length - 1; element = element + 1) {
    sum = sum + array[element];
  }
  return sum
}

console.log(sumArray([1, 2, 3, 4, 5]))

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

function oddArray(nums) {
  let nums2 = []

  for (let element = 0; element <= nums.length - 1; element = element + 1) {
    if (nums[element] % 2 === 1) {
      nums2.push(nums[element])
    }
  }
  return nums2  
}

console.log("oddArray: " + oddArray([1,2,3,4,5]))

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

function evenArray(nums) {
  let newArray = []
  for (let i = 0; i < nums.length; i = i + 1) {
    if (nums[i] % 2 === 0) {
      newArray.push(nums[i])
    }
  }
  return newArray
}

console.log(evenArray([1, 2, 3, 4, 5, 6]))

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

function findSmallest(nums) {
  let i = 0
  let n = nums[i]

  while (i < nums.length) {
    if (nums[i] < n) {
      n = nums[i]
    }
    i = i + 1
  }
  return n
}

console.log(findSmallest([6,29,5,18,7,9]))

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */


function findSecondSmallest(nums) {
  let i = 0
  let smallest = nums[i]
  let secondSmallest = 2 / 0

  // Was trying to figure out how to write a function to loop through the array twice and remove
  // the smallest number, so that the next smallest number goes into secondSmallest the 
  // second time. Will finish later, need to figure out how to remove a number from the array
  // that isn't the first or last number.
  
  // function findTheSmallest(nums) {
  //   while (i < nums.length) {
  //     if (nums[i]) {
  //       smallest = nums[i]
  //     }
  //     i = i + 1;
  //   }
  // // }
  //   return smallest 
  // function findTheSmallest(nums) {
  //   while (i < nums.length) {
  //     if (smallest > nums[i]) {
  //       smallest = nums[i]
  //     }
  //     i = i + 1;
  //   }
  // }
  // return smallest
  while (i < nums.length) {
    if (nums[i] === 1) {
      smallest = nums[i];
    }
    else if (nums[i] < secondSmallest) {
      secondSmallest = nums[i];
      if (secondSmallest < smallest) {
        let temp = secondSmallest;
        secondSmallest = smallest;
        smallest = temp;
      }
    }//swap smallest and secondSmallest by storing in a temporary variable, then
    // make secondSmallest equal to smallest and temp equal to secondSmallest (which has the smaller number)
    i = i + 1
  }
  return secondSmallest
}

console.log("findSecondSmallest: " + findSecondSmallest([8, 10, 4, 13, 12, 6, 20]))
console.log("findSecondSmallest: " + findSecondSmallest([1, 2, 3, 4, 5, 6]))
console.log("findSecondSmallest: " + findSecondSmallest([5, 4, 3, 2]))
console.log("findSecondSmallest: " + findSecondSmallest([8, 10, 4, 13, 12, 6, 20]))
console.log("findSecondSmallest: " + findSecondSmallest([-1, -2, -3]))
console.log("findSecondSmallest: " + findSecondSmallest([10, 12, 8, 9]))


//THIS SOLUTION WAS NOT PASSING THE TESTS FOR SOME REASON
//   let i = 0
//   let smallest = nums[i]
//   let secondSmallest = nums[i]





/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

function findSecondLargest(nums) {
  let i = 0
  let largest = -2/0
  let secondLargest = -2/0
  
  while (i < nums.length) {
    if (nums[i] > secondLargest) {
      secondLargest = nums[i];
      if (secondLargest > largest) {
        let temp = largest;
        largest = secondLargest;
        secondLargest = temp; 
      }
    }
    i = i + 1
  }
  return secondLargest
}

console.log("findSecondLargest: " + findSecondLargest([5, 10, 6, 9, 4, 2]))
console.log("findSecondLargest: " + findSecondLargest([1, 2, 3, 4]))
console.log("findSecondLargest: " + findSecondLargest([5, 4, 3, 2]))
console.log("findSecondLargest: " + findSecondLargest([-1, -2, -3]))
console.log("findSecondLargest: " + findSecondLargest([10, 12, 8, 11]))

/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
function removeDups(nums) {
  let array = []
  let i = 0
  while (i < nums.length) {
    if (array.includes(nums[i])) {
      i++
    }
    else {
      array.push(nums[i])
      i++
    }
  }
  return array
}

console.log(removeDups([4, 2, 6, 2, 2, 6, 4, 9, 2, 1]))
console.log(removeDups([1, 1, 1]))


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

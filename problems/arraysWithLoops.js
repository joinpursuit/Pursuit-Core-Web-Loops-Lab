/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

const shoutForLoop = (array) => {
  let newArr = [];
  for (i = 0; i < array.length; i++) {
    newArr.push(array[i] + "!"); // array[i]
  }
  return newArr;
};

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */
//function shoutWhileLoop() {}
const shoutWhileLoop = (array) => {
  let newArr = [];
  let i = 0;
  while (i < array.length) {
    newArr.push(array[i] + "!");
    i++;
  }
  return newArr;
};

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */
// for (variable of iterable) {
//   statement
// }

//const array1 = ['a', 'b', 'c'];
// for (const element of array1) {
//   console.log(element);
// }
// expected output: "a"
// expected output: "b"
// expected output: "c"

//function shoutForOfLoop() {}
const shoutForOfLoop = (array) => {
  let newArr = [];
  for (const element of array) {
    newArr.push(element + "!");
  }
  return newArr;
};

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */
//function sumArray() {}
const sumArray = (nums) => {
  let sum = 0;
  for (const element of nums) {
    sum += element;
  }
  return sum;
};

/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */
//function oddArray() {}
const oddArray = (nums) => {
  let arrOfOdds = [];
  for (const element of nums) {
    if (element % 2 === 1) {
      arrOfOdds.push(element);
    }
  }
  return arrOfOdds;
};

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */
//function evenArray() {}
const evenArray = (nums) => {
  let arrOfEvens = [];
  for (const element of nums) {
    if (element % 2 === 0) {
      arrOfEvens.push(element);
    }
  }
  return arrOfEvens;
};

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */
//function findSmallest() {}
const findSmallest = (nums) => {
  let smallest = nums[0];
  for (const element of nums) {
    if (element <= smallest) {
      smallest = element;
    }
  }
  return smallest;
};

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */
//function findSecondSmallest() {}
const findSecondSmallest = (nums) => {
  let smallest = (nums[0] < nums[1]) ? nums[0] : nums[1];
  let secondSmallest = (nums[0] < nums[1]) ? nums[1] : nums[0];
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] < smallest) {
      secondSmallest = smallest;
      smallest = nums[i];
    } else if (nums[i] < secondSmallest) {
      secondSmallest = nums[i];
    }
  }
  return secondSmallest;
}
//   let smallest = -Infinity;
//   let secondSmallest = -Infinity;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < smallest) {
//       smallest = nums[i];
//     } else if (nums[i] < secondSmallest) {
//       secondSmallest = nums[i];
//     }
//   }
//   return secondSmallest;
// };
//   for (const element of nums){
//     if(element <= smallest) {
//       smallest = element;
//     }
//   }
//   for (const element of nums){
//     if (element <= secondSmallest){
//       secondSmallest = element;
//     }
//     if (secondSmallest < smallest) {
//       smallest  = secondSmallest;
//     }
//   }
//   return secondSmallest;
// }

/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

//function findSecondLargest(nums) {}
const findSecondLargest = (nums) => {
  let largest = (nums[0] > nums[1]) ? nums[0] : nums[1];
  let secondLargest = (nums[0] > nums[1]) ? nums[1] : nums[0];
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
    } else if (nums[i] > secondLargest) {
      secondLargest = nums[i];
    }
  }
  return secondLargest;
};
  // let largest = Infinity;
  // let secondLargest = Infinity;
  // for (let i = 0; i < nums.length; i++) {
  //   //const num = nums[i];
  //   if (nums[i] > largest) {
  //     secondLargest = largest;
  //     largest = nums[i];
  //   } else if (nums[i] > secondLargest) {
  //     secondLargest = nums[i];
  //   }
  // }
  // return secondLargest;
// };

/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
//function removeDups(nums) {}
const removeDups = (nums) => {
  let arrNoDupes = [];
  let num;
  for (i = 0; i <= nums.length - 1; i++) {
    num = nums[i];
    if (!arrNoDupes.includes(num)) {
      arrNoDupes.push(num);
    }
  }
  return arrNoDupes;
};

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

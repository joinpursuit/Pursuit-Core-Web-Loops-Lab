/**
 *
 * Write a program that would log the lyrics of the song 99 Bottles of Beer. This is the first verse of the song:

99 bottles of beer on the wall, 99 bottles of beer.
Take one down, pass it around, 98 bottles of beer on the wall.
This verse is repeated, each time with one less bottle, until the number of bottles is 0. When the number of bottles is 2, the verse is:

2 bottles of beer on the wall, 2 bottles of beer.
Take one down, pass it around, 1 bottle of beer on the wall.
In the last line, the word bottles (plural), is replaced with bottle (singular)

When the number of bottles is 1, the verse is:

1 bottle of beer on the wall, 1 bottle of beer.
Take one down, pass it around, No more bottle of beer on the wall.
 *
 * @return {string[]}
 */

function ninetyNineBottlesOfBeerOnTheWall() {
  // let bottles = 99;
  newArr = [];
  for (let bottles = 99; bottles > 0; bottles--) {
    let el = bottles - 1;
    if (bottles === 1) {
      newArr.push(
        bottles +
          " bottle of beer on the wall, " +
          bottles +
          " bottle of beer. Take one down, pass it around, No more bottle of beer on the wall."
      );
    } else if (bottles === 2) {
      newArr.push(
        bottles +
          " bottles of beer on the wall, " +
          bottles +
          " bottles of beer. Take one down, pass it around, " +
          el +
          " bottle of beer on the wall."
      );
    } else {
      newArr.push(
        bottles +
          " bottles of beer on the wall, " +
          bottles +
          " bottles of beer. Take one down, pass it around, " +
          el +
          " bottles of beer on the wall."
      );
    }
  }
  console.log(newArr);
  return newArr;
}

/**
  * Given an integer N draw a square of N x N asterisks. Look at the examples.
* @param {number} N
* @return {string[]}
Example 1: Input: let N = 2

Output:

[
    **,
    **
]
Example 2: Input: let N = 3

Output:
[
    ***,
    ***,
    ***
]
  */
function drawSquare(N) {
  let starArray = [];
  // let el = 6;
  let starString = "";
  let finalArray = [];

if (N === 0){
  return [];
}  
  for (let k = 0; k < N; k++) {
    starArray.push("*");
  }
  console.log("This is the star array: " + starArray.join(""))
  starString = starArray.join("");
  for (let i = 0; i < N; i++) {
    finalArray.push(starString);
  }
  // console.log(newArr);
  return finalArray;
}
/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5,
 *  we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 *  @returns {number}
 */

function multiplesOf3And5Sum() {
  sum = 0;
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

module.exports = {
  ninetyNineBottlesOfBeerOnTheWall,
  drawSquare,
  multiplesOf3And5Sum,
};

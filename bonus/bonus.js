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
  let beerArr = [];
  let beerCount = 99;
  while (beerCount > 0) {
    if (beerCount > 2) {
      beerArr.push(
        `${beerCount} bottles of beer on the wall, ${beerCount} bottles of beer. Take one down, pass it around, ${
          beerCount - 1
        } bottles of beer on the wall.`
      );
    } else if (beerCount === 2) {
      beerArr.push(
        `${beerCount} bottles of beer on the wall, ${beerCount} bottles of beer. Take one down, pass it around, ${
          beerCount - 1
        } bottle of beer on the wall.`
      );
    } else if (beerCount === 1) {
      beerArr.push(
        `${beerCount} bottle of beer on the wall, ${beerCount} bottle of beer. Take one down, pass it around, No more bottle of beer on the wall.`
      );
    }
    beerCount--;
  }
  return beerArr;
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
  let arr = [];
  let stars = ""
  for (let i = 1; i <= N; i++) {
    stars += "*"
  } for (let j = 1; j <= N; j++) {
    arr.push(stars)
  }
  return arr;
}
/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5,
 *  we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 *  @returns {number}
 */

function multiplesOf3And5Sum() {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum
}

module.exports = {
  ninetyNineBottlesOfBeerOnTheWall,
  drawSquare,
  multiplesOf3And5Sum,
};

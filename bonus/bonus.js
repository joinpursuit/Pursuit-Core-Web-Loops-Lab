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

const ninetyNineBottlesOfBeerOnTheWall = () => {
  let arr = []
  for (let i = 99; i > 0; i--) {
    if (i === 1) {
      arr.push("1 bottle of beer on the wall, 1 bottle of beer."
        + " Take one down, pass it around, No more bottle of beer on the wall.")
    } else if (i === 2) {
      arr.push("2 bottles of beer on the wall, 2 bottles of beer." +
        " Take one down, pass it around, 1 bottle of beer on the wall.")
    } else {
      arr.push(i + " bottles of beer on the wall, " + i + " bottles of beer." +
        " Take one down, pass it around, " + (i - 1) + " bottles of beer on the wall.")
    }
  }
  return arr
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
const drawSquare = (N) => {
  let arr = []
  let at = "*"
  for (let i = 0; i < N; i++) {
    arr.push(at.repeat(N))
  }
  return arr
}
/**
  * If we list all the natural numbers below 10 that are multiples of 3 or 5,
  *  we get 3, 5, 6 and 9. The sum of these multiples is 23.
  * Find the sum of all the multiples of 3 or 5 below 1000.
  *  @returns {number}
  */

const multiplesOf3And5Sum = () => {
  let n = 1000;
  let sum = 0;
  for (let i = 3; i < n; i++) {
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

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

function ninetyNineBottlesOfBeerOnTheWall() { //answer produces a loop
  // let numOfBottles = 100 
  // let newNum = numOfBottles - 1
  // let more = 'bottles'
  // let singular = 'bottle'
  // while(numOfBottles > 0){
  //   numOfBottles -= 1
  //   newNum = numOfBottles - 1
  //   if(numOfBottles > 2){
  //   console.log(
  //    `${numOfBottles} ${more} of beer on the wall, ${numOfBottles} ${more} of beer. Take one down, pass it around, ${newNum} ${more} of beer on the wall.`)
  // } else if(numOfBottles = 2){
  //   console.log(
  //   `${numOfBottles} ${more} of beer on the wall, ${more} of beer. Take one down, pass it around, ${newNum} ${singular} of beer on the wall.`)
  // }else {
  //   console.log(`${numOfBottles} ${singular} of beer on the wall, ${numOfBottles} ${singular} of beer. Take one down, pass it around, No more ${singular} of beer on the wall.`)
  // }
  // }
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
function drawSquare() {}
/**
  * If we list all the natural numbers below 10 that are multiples of 3 or 5,
  *  we get 3, 5, 6 and 9. The sum of these multiples is 23.
  * Find the sum of all the multiples of 3 or 5 below 1000.
  *  @returns {number}
  */

function multiplesOf3And5Sum() {
  let array = []
  let discard = []
  for(i=0; i < 1000; i++){
    if(i % 3 === 0){
      array.push(i)
    } else if(i % 5 === 0){
      array.push(i)
    } else {
      discard.push(i)
    }
  }
  array.reduce(reducer)
}

module.exports = {
  ninetyNineBottlesOfBeerOnTheWall,
  drawSquare,
  multiplesOf3And5Sum,
};

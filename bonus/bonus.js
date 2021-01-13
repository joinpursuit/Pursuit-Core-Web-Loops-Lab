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

//function ninetyNineBottlesOfBeerOnTheWall() {}
const ninetyNineBottlesOfBeerOnTheWall = () => {
	let bottles = 99;
	let lyrics = [];
	while (bottles > 2) {
		lyrics.push(
			`${bottles} bottles of beer on the wall, ${bottles} bottles of beer. Take one down, pass it around, ${
				bottles - 1
			} bottle of beer on the wall.`
		);
		bottles--;
	}

	if (bottles === 2) {
		lyrics.push(
			`2 bottles of beer on the wall, 2 bottles of beer. Take one down, pass it around, 1 bottle of beer on the wall.`
		);
		bottles--;
	}
	if (bottles === 1) {
		lyrics.push(
			`1 bottle of beer on the wall, 1 bottle of beer. Take one down, pass it around, No more bottle of beer on the wall.`
		);
		// bottles--;
	}
	return lyrics;
}; // not sure why the array is not passing

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
//function drawSquare() {}
const drawSquare = (n) => {
	let str = "";
	let arr = [];
	for (i = 0; i < n; i++) {
		str += "*";
	}
	for (i = 0; i < n; i++) {
		arr.push(str);
	}
	return arr;
}; //sum of 3 //sum of 5 // sum of 3 or 5 ==> are we excluding numbers that are multiples of 3 && 5?

/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5,
 *  we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 *  @returns {number}
 */

//function multiplesOf3And5Sum() {}

/* const multiplesOf3And5Sum = () => {
  let sum = 0;
  for (let i = 0; i < 1000; i += 3) {
    sum += i;
  }
  for (let i = 0; i < 1000; i += 5) {
    sum += i;
  }
  return sum;
}; */

/* Expected: 233168
   Received: 166833 */ /* Expected: 233168
    Received: 99500 */ /*  Expected: 233168
   Received: 266333  */ const multiplesOf3And5Sum = () => {
	let sum = 0;
	for (let i = 0; i < 1000; i += 3) {
		if (i % 5 === 0 && i % 3 === 0) {
			sum += i;
		}
	}
	return sum;
};

module.exports = {
	ninetyNineBottlesOfBeerOnTheWall,
	drawSquare,
	multiplesOf3And5Sum,
};

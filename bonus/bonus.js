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

function ninetyNineBottlesOfBeerOnTheWall() 
{

  let newArray = []

  for (var n = 99; n > 2;  n -= 1)
    {
        newArray.push(`${n} bottles of beer on the wall, ${n} bottles of beer. Take one down, pass it around, ${n-1} bottles of beer on the wall.`)

    }
    newArray.push(`${n} bottles of beer on the wall, ${n} bottles of beer. Take one down, pass it around, ${n-1} bottle of beer on the wall.`)
    n -= 1
    newArray.push(`${n} bottle of beer on the wall, ${n} bottle of beer. Take one down, pass it around, No more bottle of beer on the wall.`)

  return newArray  
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
function drawSquare(N)

{
  var column = []
  var newArray = ''

  for(var m = 0; m < N; m +=1)
  {
      for (var n = 0; n < N; n += 1)
        {
          newArray = newArray +'*' 
        }
      column[m] = newArray 
      newArray  = '' 
  }    
  return column
}

drawSquare(3)



/**
  * If we list all the natural numbers below 10 that are multiples of 3 or 5,
  *  we get 3, 5, 6 and 9. The sum of these multiples is 23.
  * Find the sum of all the multiples of 3 or 5 below 1000.
  *  @returns {number}
  */

function multiplesOf3And5Sum() 
{
    var sum = 0 
    for( var n = 999; n > 1 ; n -= 1)
      {
        if((n % 5) === 0)
        {
          sum = sum + n 
        }else if (n % 3 === 0)
         {
           sum = sum + n
         }

      }
    return sum  
}

module.exports = {
  ninetyNineBottlesOfBeerOnTheWall,
  drawSquare,
  multiplesOf3And5Sum,
};

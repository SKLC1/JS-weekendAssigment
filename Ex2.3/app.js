// You might know some pretty large perfect squares. But what about the NEXT one? 
 
// Complete the findNextSquare method that finds the next integral perfect square after the one 
// passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is 
// also an integer. 
 
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the 
// parameter is positive.

const findNextSquare = (int) => {
  let squareRoot = Math.sqrt(int) + 1;
  let res = squareRoot * squareRoot
  if(res % 1 === 0 ){
    return res
  } else {
   return 'invalid input'
  }
}
console.log(findNextSquare(121));
console.log(findNextSquare(623));
console.log(findNextSquare(625));
console.log(findNextSquare(-16));
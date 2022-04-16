// Write a program that finds the summation of every number from 1 to num. The number will 
// always be a positive integer greater than 0. 
 
// For example: 
// summation(2) -> 3 
// 1 + 2 
 
// summation(8) -> 36 
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

const sumAll = (start, target) => {
  let res = 0;
  for(let i = start; i < target+1; i++) {
    res = res + i;
  }
  return res
}
console.log(sumAll(2,10));
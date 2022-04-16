// Ex2.7 - Basic Math 
 
// Your task is to create a function that does four basic . 
// The function should take three arguments - operation(string/char), value1(number), 
// value2(number). 
// The function should return result of numbers after applying the chosen operation. 
// Examples 
// basicOp('+', 4, 7)         // Output: 11 
 
// basicOp('-', 15, 18)       // Output: -3 
// basicOp('*', 5, 5)         // Output: 25 
// basicOp('/', 49, 7)        // Output: 7

const applyOperator = (opp, num1, num2) => {
  let mathArr =  [num1, opp, num2];
  let res = eval(mathArr[0]+mathArr[1]+mathArr[2]);
  return res
}
console.log(applyOperator('+', 4, 7));
console.log(applyOperator('-', 15, 18));
console.log(applyOperator('*', 5, 5));
console.log(applyOperator('/', 49, 7));

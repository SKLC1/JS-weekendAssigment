// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function 
// that given a signature array/list, returns the first n elements - signature included of the so 
// seeded sequence. 
// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then 
// return an empty array (except in C return NULL) and be ready for anything else which is not 
// clearly specified ;) 

let fibArray = [1,1,1];
let num = 0;
const nForFib = (n) => {
  for(let i = 0; i < n; i++ ){
    num = fibArray[i] + fibArray[i+1] + fibArray[i+2]
    fibArray.push(num)
  }
  return fibArray
}
console.log(nForFib(10));


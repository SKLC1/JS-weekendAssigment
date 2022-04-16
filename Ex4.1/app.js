// Ex4.1 - Fibonacci -  
// “Write a function to return an n element in Fibonacci sequence” is one of the most common 
// questions you can hear during the coding challenge interview part. In this blogpost I’m going to 
// walk through the two of the most typical solutions for this problem and also cover a dreadful (for 
// most of novice developers) topic of time complexity


// create Fibonacci  seq
let fibArray = [1,1];
let num = 0;
const nForFib = (n) => {
  for(let i = 0; i < n; i++) {
    num = fibArray[i] + fibArray[i+1]
    fibArray.push(num)
  }
  return fibArray[n-1]
}
console.log(nForFib(5));


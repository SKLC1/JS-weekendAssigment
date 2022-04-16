// Create a function that returns the sum of the two lowest positive numbers given an array of 
// minimum 4 positive integers. No floats or non-positive integers will be passed. 
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7. 
// [10, 343445353, 3453445, 3453545353453] should return 3453455

const addLowest = (arr) => {
  let smallest = 0;
  let secondSmallest = 0;
  
  for(let i=0; i < arr.length; i++) {
    if(arr[i] < arr[i+1] && arr[i] > 0 ) {
       smallest = arr[i];
    }
  }
  for(let i=0; i < arr.length; i++) {
    if(arr[i] < arr[i+1] && arr[i] > smallest && arr[i] > 0 && arr[i] !== smallest) {
      secondSmallest = arr[i]
    }
  }
  let res = smallest + secondSmallest 
  return res
}
console.log(addLowest([19, 5, 42, 2, 77])); 
console.log(addLowest([10, 343445353, 3453445, 3453545353453]));

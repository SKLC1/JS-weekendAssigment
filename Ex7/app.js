// Ex7 Implement The Following JS Methods -
// Implement the following methods -
// - Filter
// - ForEach
// - Map
// Using only for(), array and objects (without other js methods)
let arr = [1, 4, 9, 16, 25];
// arr for ypcoming tests

//!implementing filter 
const myFilter =(array, callback)=> {
 let filterArr = [];
 for (let i = 0; i < array.length; i++) {
   const result = callback(array[i],i,array)
   if(result) {
    filterArr.push(array[i]);
   }
 }
 return filterArr
}
//? test
const test1 = myFilter(arr, num => num % 2 === 0);
console.log(test1); //prints [2, 4]

//! implementing map
const myMap = (array, callback) => {
let mapArr =[];
 for (let i = 0; i < array.length; i++) {
   const result = callback(array[i], i, array);
   mapArr.push(result);
 }
 return mapArr
}
//?test
const test2 = myMap(arr, num => num ** 2);
console.log(test2); 

//!implementing forEach
const myForEach = (array , callback)=> {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
//? test
const test3 = myForEach(arr, num => num ** 2);
console.log(test3); 

// Ex6.1 - Mumbling 
 
// This time no story, no theory. The examples below show you how to write function 
// accum​: 
// Examples: 
// accum("abcd") -> "A-Bb-Ccc-Dddd" 
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy" 
// accum("cwAt") -> "C-Ww-Aaa-Tttt" 
// The parameter of accum is a string which includes only letters from ​a..z​ and ​A..Z​.

const accum =(str)=> {
  let res = [];
  let word = str.split('');
 for (let i = 0; i < word.length; i++) {
  res.push(word[i].toUpperCase())
  for (let j = 0; j < i; j++) {
    res.push(word[i])
  }
  res.push('-')
 }
 res.pop()
 return res.join('')
}
console.log(accum('abcd'));
console.log(accum("RqaEzty"));
console.log(accum('cwAt'));
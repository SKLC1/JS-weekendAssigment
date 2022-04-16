// Ex6.3 - organize strings 
 
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the 
// longest possible, containing distinct letters, 
 
// each taken only once - coming from s1 or s2

const sortAtoZ =(s1,s2) => {
  let first = s1.split('')
  let second = s2.split('')
  let joinedArr = first.concat(second) 
  let sorted = joinedArr.sort()
  
  for (let i = 0; i < sorted.length; i++) {
    if(sorted[i] === sorted[i+1]) {
      sorted[i] = ''
    }
  }
  return sorted.join('')
}
console.log(sortAtoZ("xyaabbbccccdefww","xxxxyyyyabklmopq"));
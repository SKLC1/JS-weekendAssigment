// Ex5.5 - Abbreviate two words 
// Write a function to convert a name into initials. This kata strictly takes two words with one space 
// in between them. 
// The output should be two capital letters with a dot separating them. 
// It should look like this

const initials = (name) => {
  let nameStr = name.split(' ')
  let res = [];
  let splitted1 = nameStr[0].split("");
  res.push(splitted1[0].toUpperCase())
  res.push('.')
  let splitted2 = nameStr[1].split("");
  res.push(splitted2[0].toUpperCase())
  return res.join("")
}
console.log(initials('Shoham Dolev'));
console.log(initials('bar klen'));
console.log(initials('Dave johnson'));
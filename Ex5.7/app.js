// Ex5.7 - shortest words 
// Simple, given a string of words, return the length of the shortest word(s). 
// String will never be empty and you do not need to account for different data types


const getShortest = (str) => {
  let splitted = str.split(' ');
  let shortest = [];
  for (let i = 0; i < splitted.length; i++) {
    if(splitted[i].length > shortest){
      shortest = splitted[i]
    }
  }
  return shortest
}
console.log(getShortest("get me the shortest word"));
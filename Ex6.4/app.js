// Ex6.4 - isogram 
 
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement 
// a function that determines whether a string that contains only letters is an isogram. Assume the 
// empty string is an isogram. Ignore letter case. 
// isIsogram("Dermatoglyphics") == true 
// isIsogram("aba") == false 
// isIsogram("moOse") == false // -- ignore letter case 
 
const isIsogram = (word) => {
  return new Set(word.toLowerCase()).size === word.length
}
console.log(isIsogram('aba'));
console.log(isIsogram('Dermatoglyphics'));
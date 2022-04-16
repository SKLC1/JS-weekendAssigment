
// Ex5.3 - To Camel Case 
// Complete the method/function so that it converts dash/underscore delimited words into camel 
// casing. The first word within the output should be capitalized only if the original word was 
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).

const toCamelCase = (str) => {
  let stringArr = str.split('')
  const res = stringArr.map(letter => {
    if(letter === '-'|| letter === '_') {
      return letter = '';
    } else {
      return letter 
    }
  });
  return res.join('')
}
console.log(toCamelCase('this_Is_a_Sentence'));
console.log(toCamelCase('this-Is-a-Sentence'));
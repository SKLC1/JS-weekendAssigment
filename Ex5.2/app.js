
// Ex5.2 - String Repeat 
// Write a function called repeat_str which repeats the given string src exactly count times. 
// repeatStr(6, "I") // "IIIIII" 
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
let res = [];
const repeatStr = (num,str) => {
  for (let i = 0; i < num ; i++) {
    res.push(str)
  }
  return res.join('')
}
console.log(repeatStr(5, 'hi'));
// Usually when you buy something, you're asked whether your credit card number, phone number 
// or answer to your most secret question is still correct. However, since someone could look over 
// your shoulder, you don't want that shown on your screen. Instead, we mask it. 
// Your task is to write a function maskify, which changes all but the last four characters into '#'. 
// Examples 
// maskify("4556364607935616") == "############5616" 
// maskify(     "64607935616") ==      "#######5616" 
// maskify(               "1") ==                "1" 
// maskify(                "") ==                 "" 
 
// "What was the name of your first pet?" 
// maskify("Skippy")                                   == "##ippy" 
// maskify("Nananananananananananananananana Batman!") == 
// "####################################man!" 

const maskify = (password) => {
 let word = password.split('');
 let res = [];
  for (let i = 0; i < (word.length-4); i++) {
    res.push('#')
  }
  for (let i = 4; i > 0; i--) {
    res.push(word[word.length - i])
  }
  return res.join("")
}
console.log(maskify('example'));
console.log(maskify('pass word'));
console.log(maskify('exa1233 poe 5%6'));
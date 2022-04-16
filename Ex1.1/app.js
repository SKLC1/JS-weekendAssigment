// Ex1.1 - Yes or No 
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" 
// string for false.

const yesOrNo = (arg)=>{
  if(arg === true) {
    return 'Yes'
  } else if (arg === false){
    return 'No'
  } else {
    return 'not valid'
  }
}
console.log(yesOrNo(true))
console.log(yesOrNo(false))
console.log(yesOrNo('sas'))
console.log(yesOrNo('123'))

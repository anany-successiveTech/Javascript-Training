// 1. Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

const inputString = prompt("Enter the string: ")
let outputString = ''
const removeDuplicates = (inputString) => {
  const set = new Set();
   
  for (let i = 0; i < inputString.length; i++) {
    set.add(inputString[i]);
  }

  for (let item of set) {
      outputString += item
    
  }
   console.log(`The unique charactor String is: ${outputString}`);
};

removeDuplicates(inputString);
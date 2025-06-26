// 1. Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

const userInput = prompt("Enter the string: ");

const removeDuplicates = (inputString) => {
  let outputString = "";
  const set = new Set();

  for (let i = 0; i < inputString.length; i++) {
    set.add(inputString[i]);
  }

  for (let item of set) {
    outputString += item;
  }
  return outputString
};
const finalResutl = removeDuplicates(userInput);
console.log(`The unique charactor string is: ${finalResutl}`);


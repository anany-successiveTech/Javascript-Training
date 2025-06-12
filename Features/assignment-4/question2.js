// 2.Write a program to reverse a string ("Hello John" => "olleH nhoJ").

let userInput = prompt("Enter the string: ")
userInput = userInput.split(" ");
let currentString = ''

const  reverseWord = (word) => {
  for (let i = word.length - 1; i >= 0; i--) {
    currentString += word[i];
  }
  return currentString
}

for (let word of userInput) {
  reverseWord(word);
  currentString += " ";
}

console.log(`The reversed word in a string is: ${currentString}`);

// 3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

const userInput = prompt("Enter the string: ");

const frequencyMap = new Map();
const countFrequency = (inputString) => {
  let resultString = "";
  for (let char of inputString) {
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
  }

  for (let [key, value] of frequencyMap) {
    resultString += `${key}${value}`;
  }

  return resultString;
};
const frequencyString = countFrequency(userInput);
console.log(`The charactor count sequence is: ${frequencyString}`);

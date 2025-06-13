// 8. Write a program to remove dupliacte elements from an array

const inputString = prompt("Enter the element of array (comma-separated): ")
let array = [];
const findDuplicateIndex = (input) => {
  
  const set = new Set();
  let uniqueArray = [];

  array = input.split(",").map(item => Number(item.trim()))

  for (let i = 0; i < array.length; i++) {
    set.add(array[i]);
  }
  for (let element of set) {
    uniqueArray.push(element);
  }
  return uniqueArray;
};
const finalUniqueArray = findDuplicateIndex(inputString);
console.log(`The original array is: ${array}`);
console.log(`The unique array of element: ${finalUniqueArray}`);

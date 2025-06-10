// 9. Write a program to find the last duplicate index in an array

const inputString = prompt("Enter the element of array (comma-separated): ")

let countMap = new Map();
let lastIndexMap = new Map();
let array
const findLastDuplicateIndexes = (input) => {

 array = input.split(",").map(item => Number(item.trim()))

  // Track in forward direction.
  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    countMap.set(value, (countMap.get(value) || 0) + 1);

    lastIndexMap.set(value, i);
  }
};

findLastDuplicateIndexes(inputString);

console.log(`Original array: ${array}`);
console.log("Duplicates with last index:");
for (let [key, count] of countMap) {
  if (count > 1) {
    console.log(`${key} -> last at index ${lastIndexMap.get(key)}`);
  }
}

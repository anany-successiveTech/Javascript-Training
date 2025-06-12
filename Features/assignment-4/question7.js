// 7. Write a program to find index of duplicate elements in an array

// I am checking duplicates in the forward direction.
// Printing last repeated element's index.

const sizeOfArray = Number(prompt("Enter the size of array: "));
let array = [];
const findDuplicateIndex = (size) => {
  const set = new Set();
  let duplicates = [];

  for (let i = 0; i < sizeOfArray; i++) {
    const arrayElement = Number(prompt(`Enter the element ${i + 1}: `));
    array.push(arrayElement);
  }

  for (let i = 0; i < array.length; i++) {
    if (set.has(array[i])) {
      duplicates.push(`{index of ${array[i]}: ${i}}`);
    } else {
      set.add(array[i]);
    }
  }
  return duplicates;
};
const resultArray = findDuplicateIndex(sizeOfArray);
console.log(`The original array is: ${array}`);
console.log(`The duplicate array of element with index: \n${resultArray}`);

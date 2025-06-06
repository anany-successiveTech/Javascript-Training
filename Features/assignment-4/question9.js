// 9. Write a program to find the last duplicate index in an array

const sizeOfArray = Number(prompt("Enter the size of array: "));

const findLastDuplicateIndexes = (size) => {
  let array = [];
  let countMap = new Map();
  let lastIndexMap = new Map();

  for (let i = 0; i < size; i++) {
    const element = Number(prompt("Enter the element: "));
    array.push(element);
  }

  // Track in forward direction.
  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    
    countMap.set(value, (countMap.get(value) || 0) + 1);

    
    lastIndexMap.set(value, i);
  }

  console.log(`Original array: ${array}`);
  console.log("Duplicates with last index:");

  for (let [key, count] of countMap) {

    if (count > 1) {
      console.log(`${key} -> last at index ${lastIndexMap.get(key)}`);
    }
  }
};

findLastDuplicateIndexes(sizeOfArray);


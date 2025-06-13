// 6. Write a program to find sum of an array

const sizeOfArray = Number(prompt("Enter the size of array: "));
const arraySummation = (size) => {
  let array = [];

  for (let i = 0; i < size; i++) {
    const arrayElement = Number(prompt("Enter the element: "));
    array.push(arrayElement);
  }

  let sumOfArray = 0;

  for (let i = 0; i < array.length; i++) {
    sumOfArray += array[i];
  }
  return sumOfArray;
};
const totalSum = arraySummation(sizeOfArray);
console.log(`Sum of element of array: ${totalSum}`);

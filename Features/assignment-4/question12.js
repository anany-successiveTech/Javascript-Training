// 12. Write a program to display intersection of two array

const inputStringOne = prompt(
  "Enter the element of first array (comma-separated): "
);
const inputStringTwo = prompt(
  "Enter the element of first array (comma-separated): "
);

console.log(` `);

const arrayIntersection = (inputOne, inputTwo) => {
  let intersectionArray = [];

  const array1 = inputOne.split(",").map((item) => Number(item.trim()));
  const array2 = inputTwo.split(",").map((item) => Number(item.trim()));

  const mySet = new Set(array1);

  for (const element of array2) {
    if (mySet.has(element)) {
      intersectionArray.push(element);
      mySet.delete(element);
    }
  }
  return intersectionArray;
};

const commonElementArray = arrayIntersection(inputStringOne, inputStringTwo);
console.log(
  `Common elements from  first and second array is: ${commonElementArray}`
);

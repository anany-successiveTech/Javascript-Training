// 12. Write a program to display intersection of two array

const sizeOfArray1 = Number(prompt("Enter the size of first array: "));
const array1 = [];

for (let i = 0; i < sizeOfArray1; i++) {
  const element = Number(prompt(`Enter element ${i + 1} for first array:`));
  array1.push(element);
}

const sizeOfArray2 = Number(prompt("Enter the size of second array: "));
const array2 = [];

for (let i = 0; i < sizeOfArray2; i++) {
  const element = Number(prompt(`Enter element ${i + 1} for second array:`));
  array2.push(element);
}

const set1 = new Set(array1);
const intersection = [];

for (const elem of array2) {
  if (set1.has(elem)) {
    intersection.push(elem);
    set1.delete(elem);
  }
}

console.log("Intersection of the two arrays is:", intersection);

// 11. Write a program to sort an array (bubble sort)


const sizeOfArray = Number(prompt("Enter the size of array: "));
const array = [];

for (let i = 0; i < sizeOfArray; i++) {
  const element = Number(prompt(`Enter element ${i + 1}:`));
  array.push(element);
}

for (let i = 0; i < array.length - 1; i++) {
  for (let j = 0; j < array.length - i - 1; j++) {
    if (array[j] > array[j + 1]) {
      [array[j], array[j + 1]] = [array[j + 1], array[j]];  // Swap [a, b] = [b, a]
    }
  }
}

console.log("Sorted array:", array);

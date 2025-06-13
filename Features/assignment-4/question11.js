// 11. Write a program to sort an array (bubble sort)

const inputString = prompt("Enter the element of array (comma-separated): ")

const bubbleSortArray = (input) => {
 let array = [];
 array = input.split(",").map(item => Number(item.trim()))

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Swap [a, b] = [b, a]
      }
    }
  }
  return array;
};

const sortedArray = bubbleSortArray(inputString);
console.log(`Sorted array is : ${sortedArray}`);

// 14. Write a program to reverse an array

// 14. Write a program to reverse an array

const sizeOfArray = Number(prompt("Enter the size of array: "));

const reverseArray = (size) => {
  let arr = [];
  for (let i = 0; i < size; i++) {
    const element = prompt(`Enter element ${i + 1}: `);
    arr.push(element);
  }

  
  let reversed = [];
  for (let i = size - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  return reversed;
};

const reversedArr = reverseArray(sizeOfArray);
console.log("Reversed array:", reversedArr);
alert("Reversed array: " + reversedArr.join(", "));


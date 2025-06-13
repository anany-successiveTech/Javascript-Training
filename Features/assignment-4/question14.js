// 14. Write a program to reverse an array

const inputString = prompt("Enter the element of array (comma-separated): ");

const reverseArray = (input) => {
  let array = [];
  array = input.split(",").map((item) => Number(item.trim()));

  let reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }

  return reversed;
};

const reversedArr = reverseArray(inputString);
console.log("Reversed array:", reversedArr);
alert("Reversed array: " + reversedArr.join(", "));

// 13. Write a program to return inverse of an array

const userInput = prompt("Enter the element of array (comma-separated): ");

const inverseArray = (input) => {
  let invertedArray = [];

  const array = input.split(",").map((item) => Number(item.trim()));
  console.log(array);
  let string = "";
  for (let i = 0; i < array.length; i++) {
    if (string.indexOf(i) == -1) {
      invertedArray[array[i]] = i;
      string += i;
    }
  }
  return invertedArray;
};

const result = inverseArray(userInput);
console.log(`The inverted array is : ${result}`);
alert("Inverse array: " + result.join(", "));

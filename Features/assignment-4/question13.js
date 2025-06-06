// 13. Write a program to return inverse of an array



const sizeOfArray = Number(prompt("Enter the size of array: "));

const inverseArray = (size) => {
  let arr = [];


  for (let i = 0; i < size; i++) {
    const element = Number(prompt(`Enter element ${i + 1}: `));
    arr.push(element);
  }

  
  let inv = [];
  for (let i = 0; i < size; i++) {
    inv[arr[i]] = i;
  }
  return inv;
};

const result = inverseArray(sizeOfArray);
console.log("Inverse array:", result);
alert("Inverse array: " + result.join(", "));

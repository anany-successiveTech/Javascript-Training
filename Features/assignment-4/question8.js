// 8. Write a program to remove dupliacte elements from an array


const sizeOfArray = Number(prompt("Enter the size of array: "));
const findDuplicateIndex = (sizeOfArray) => {
  let array = [];
  const set = new Set();
  let uniqueArray = []

  for (let i = 0; i < sizeOfArray; i++) {
    const arrayElement = Number(prompt("Enter the element: "));
    array.push(arrayElement);
  }

  for(let i=0; i<array.length; i++){
     set.add(array[i])
  }
  for(let element of set){
      uniqueArray.push(element)
  }
  console.log(`The original array is: ${array}`);
  console.log(`The unique array of element: ${uniqueArray}`)
}
findDuplicateIndex(sizeOfArray)
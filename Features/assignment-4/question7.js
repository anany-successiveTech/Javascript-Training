// 7. Write a program to find index of duplicate elements in an array

// I am checking duplicates in the forward direction.

const sizeOfArray = Number(prompt("Enter the size of array: "));
const findDuplicateIndex = (sizeOfArray) => {
    
  let array = [];
  const set = new Set();
  let duplicates = []

  for (let i = 0; i < sizeOfArray; i++) {
    const arrayElement = Number(prompt("Enter the element: "));
    array.push(arrayElement);
  }

  for(let i=0; i<array.length; i++){
    if(set.has(array[i])){
      duplicates.push(`{index of ${array[i]}: ${i}}`)
    }
    else{
        set.add(array[i])
    }
  }
  console.log(`The original array is: ${array}`);
  console.log(`The duplicate array of element with index: ${duplicates}`)
}
findDuplicateIndex(sizeOfArray)
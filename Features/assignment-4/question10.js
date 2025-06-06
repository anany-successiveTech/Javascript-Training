// 10. Write a program to concatenate an input of array of arrays

const inputArray = [ [1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12] ];
const concatenatedArray = [];

const concatenateArray = () => {
    for(let i = 0; i < inputArray.length; i++){
        for(let j = 0; j < inputArray[i].length; j++){
            concatenatedArray.push(inputArray[i][j]);
        }
    }
    return concatenatedArray;
}

console.log(`The concatenated array is: ${concatenateArray()}`);

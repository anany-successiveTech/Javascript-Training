// 10. Write a program to concatenate an input of array of arrays

const inputArray = [ [1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12] ];


const concatenateArray = (array) => {
    const concatenatedArray = [];
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            concatenatedArray.push(array[i][j]);
        }
    }
    return concatenatedArray;
};

console.log(`The concatenated array is: ${concatenateArray(inputArray)}`);

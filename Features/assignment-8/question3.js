// Find Error in below questions and rectify them

// --->  Question - 3

console.log(`No mistake found code is runing fine: `);
let myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
   console.log('The value at index ' + i + ' is: ' + myArray[i]);
};

let total = 0;
myArray.forEach(function(element) { total += element; });
console.log('The total of all elements in the array is: ' + total);


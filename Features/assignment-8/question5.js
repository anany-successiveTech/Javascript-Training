// Find Error in below questions and rectify them

// --->  Question - 5

console.log(`No mistake found code is runing fine: `);
let myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
   console.log(myArray[i]);
};

let myNumber = myArray[5];
if (myNumber) {
   console.log('The number is: ' + myNumber);
} else {
   console.log('The number is undefined');
};
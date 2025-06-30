// Find Error in below questions and rectify them

// --->  Question - 4

console.log(`No mistake found code is runing fine: `);
let myString = 'hello world';
if (myString.length > 0) {
    console.log('The length of the string is: ' + myString.length);
} else {
    console.log('The string is empty.');
};

let myNumber = parseInt(myString);
if (myNumber) {
   console.log('The number is: ' + myNumber);
} else {
   console.log('The value is not a number.');
};

// But we can use "const" as we are not updating "myString", though it's not giving any errors.
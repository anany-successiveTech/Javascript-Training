// Find Error in below questions and rectify them

// --->  Question - 2

// console.log(`The incorrect code: `);
// let myObject = { name: 'John', age: 30 };
// for (property in myObject) {
//    console.log(property + ': ' + myObject.property);
// };

// Mistake Found -> console.log(property + ': ' + myObject.property);

console.log(`The corrected code: `);
let myObject = { name: 'John', age: 30 };
for (property in myObject) {
   console.log(property + ': ' + myObject[property]);
};

// Corrected line of code = console.log(property + ': ' + myObject[property]);
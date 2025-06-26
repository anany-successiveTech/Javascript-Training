// 2.Install the lodash package using npm install lodash. and use any of its function

// Example --> 1

import _ from "lodash";

const array = [1, 2, 3, 4, 5, 6, 7];
_.reverse(array);
console.log(`The reversed array is : ${array}`);

// Example --> 2

console.log();

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };

_.merge(obj1, obj2);

console.log("The merged object is: ", obj1);
console.log();



// Example --> 3

const array2 = [1, 2, 3, 3, 4, 2, 1, 5, 6, 4, 7, 7, 4, 5, 6, 3];
const result = _.uniq(array2);
console.log(`The array of unique element is : ${result}`);
console.log();


// Example --> 4

const array3 = [1, 2, [3, 4, [5, 6]], [7, 8], 9];
_.flatten(array3);
console.log(`The flattened array is : ${array3}`);



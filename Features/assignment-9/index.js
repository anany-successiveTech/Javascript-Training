// 3.create a new folder named 'math' and create a file math.js. In math.js, define two functions:
// a. add(a, b): takes two numbers as arguments and returns their sum.
// b. subtract(a, b): takes two numbers as arguments and returns their difference.
// create a new file index.js and just export those functions and then use those function in any of the file


import { addition, subtraction } from "./math/math.js";

const sum = addition(3, 5);
const difference = subtraction(5, 6);


console.log(`The sum of num1 and num2 is: ${sum}`);
console.log(`The difference of num1 and num2 is: ${difference}`);



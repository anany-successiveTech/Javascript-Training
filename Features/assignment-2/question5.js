// 5. Write a function expression that takes in two numbers and returns their sum.

const firstNumber = Number(prompt("Enter First Number: "));
const secondNumber = Number(prompt("Enter Second Number: "));

const sumFunction = (firstNumber, secondNumber) => (firstNumber + secondNumber)


const finalResult = sumFunction(firstNumber, secondNumber);
console.log(`The sum of 1st number and 2nd number is : ${finalResult}`);

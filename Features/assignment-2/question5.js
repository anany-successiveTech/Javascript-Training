// 5. Write a function expression that takes in two numbers and returns their sum.

const firstNumber = Number(prompt("Enter First Number: "));
const secondNumber = Number(prompt("Enter Second Number: "));

<<<<<<< HEAD
const sumFunction = (firstNumber, secondNumber) => {
  const sum = firstNumber + secondNumber;
  return sum;
};

const result = sumFunction(firstNumber, secondNumber);
console.log(`The sum of 1st number and 2nd number is : ${result}`);
=======
const sumFunction = (firstNumber, secondNumber) => (firstNumber + secondNumber)


const finalResult = sumFunction(firstNumber, secondNumber);
console.log(`The sum of 1st number and 2nd number is : ${finalResult}`);
>>>>>>> d002e5dbf445107f08aa88a8ed52a43c37f9138e

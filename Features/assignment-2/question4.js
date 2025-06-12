// 4. Write a function expression that takes in a number and returns its square.

const userInput = Number(prompt("Enter number: "));

const calculateSquare = (num) => (num*num)
const result = calculateSquare(userInput);
console.log(`Square of a given number is: ${result}`)

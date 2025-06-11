// 4. Write a function expression that takes in a number and returns its square.

const userInput = Number(prompt("Enter number: "));

<<<<<<< HEAD
const calculateSquare = (num) => {
  const squaredNumber = num * num;
  return squaredNumber;
};

const finalResult = calculateSquare(userInput);
console.log(`Square of a given number is: ${finalResult}`)
=======
const calculateSquare = (num) => (num*num)
const result = calculateSquare(userInput);
console.log(`Square of a given number is: ${result}`)
>>>>>>> d002e5dbf445107f08aa88a8ed52a43c37f9138e

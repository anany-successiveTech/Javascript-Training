// 4. Write a function expression that takes in a number and returns its square.

const userInput = Number(prompt("Enter number: "));

const calculateSquare = function (num) {
  const squaredNumber = num * num;
  return squaredNumber;
};

const finalResult = calculateSquare(userInput);
console.log(`Square of a given number is: ${finalResult}`)

// 4. Write a function expression that takes in a number and returns its square.

const number = Number(prompt("Enter number: "));

const squareOfNumber = function (number) {
  const squaredNumber = number * number;
  return squaredNumber;
};

const result = squareOfNumber(number);
console.log(`Square of a given number is: ${result}`)

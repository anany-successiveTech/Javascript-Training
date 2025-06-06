// 4. Write a function expression that takes in a number and returns its square.

const number = Number(prompt("Enter number: "));

const squareOfNumber = (number) => {
  const squaredNumber = number * number;
  alert(squaredNumber);
  return squareOfNumber;
};

squareOfNumber(number);

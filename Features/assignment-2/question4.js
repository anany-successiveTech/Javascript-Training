// 4. Write a function expression that takes in a number and returns its square.

const num = Number(prompt("Enter number: "));

const squareOfNumber = (num) => {
  const squaredNumber = num * num;
  return squaredNumber;
};

const result = squareOfNumber(number);
console.log(`Square of a given number is: ${result}`)
// 6. Write a function expression that takes in a number and returns true if it's even and false if it's odd.


const number = Number(prompt("Enter Number: "));

const checkFunction = (num) => {
  if (num % 2 == 0) {
    return true;
  }
  return false;
};

const result = checkFunction(number);
console.log(`The result is: ${result ? "Even" : "Odd"}`);

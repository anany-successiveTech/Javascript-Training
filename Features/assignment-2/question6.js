// 6. Write a function expression that takes in a number and returns true if it's even and false if it's odd.

const userInput = Number(prompt("Enter Number"));

const checkFunction = (num) => {
  if (num % 2 == 0) {
    return true;
  } 
    return false;
  
};

const result = checkFunction(userInput);
console.log(`The sum of first and second number: ${result}`);

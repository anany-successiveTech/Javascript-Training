// 6. Write a function expression that takes in a number and returns true if it's even and false if it's odd.

// 6. Write a function expression that takes in a number and returns true if it's even and false if it's odd.

const number = Number(prompt("Enter Number"));

const checkFunction = function (number) {
  if (number % 2 == 0) {
    return true;
  } 
    return false;
  
};

const result = checkFunction(number);
console.log(`The sum of first and second number: ${result}`);

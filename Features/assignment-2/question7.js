// 7. All of the above questions from 3-6 needs to be done with arrow functions also

// Question -> 3
// 3. Write a function expression that takes in another function as an argument

const main = (newCallBack) => {
  console.log(`hello this is main function`);
  newCallBack();
};

const callBack = () => {
  console.log(`hello this is callback`);
};

mainFunction(callBack);

// Question -> 4
// 4. Write a function expression that takes in a number and returns its square.

const num = Number(prompt("Enter number: "));

const squareOfNumber = (num) => {
  const squaredNumber = num * num;
  return squaredNumber;
};

const result = squareOfNumber();
console.log(`Square of a given number is: ${result}`)



//  Question -> 5
// 5. Write a function expression that takes in two numbers and returns their sum.

const firstNumber = Number(prompt("Enter First Number"));
const secondNumber = Number(prompt("Enter Second Number"));

const sumFunction = (firstNumber, secondNumber) => firstNumber + secondNumber;

const sumResult = sumFunction(firstNumber, secondNumber);
console.log(`The sum of first and second number: ${sumResult}`);


//  Question -> 6
// 6. Write a function expression that takes in a number and returns true if it's even and false if it's odd.

const checkNumber = Number(prompt("Enter Number"));

const checkFunction = (number) => {
    if (number % 2 == 0) {
    return true;
  } 
    return false;
  
};

const checkresult = checkFunction(number);
console.log(`The result is : ${checkresult}`);

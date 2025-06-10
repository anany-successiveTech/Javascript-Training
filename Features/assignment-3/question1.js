// 1. Write a program to perform functionality of a calculator (add,sub,multiply,divide)

const sum      = (number1, number2) => (number1 + number2);
const multiply = (number1, number2) => (number1 * number2);
const divide   = (number1, number2) => (number1 / number2);
const subtract = (number1, number2) => (number1 - number2);

const firstNumber  = Number(prompt("Enter first number: "));
const secondNumber = Number(prompt("Enter second number: "));
const operation    = prompt("Enter mathematical operation ('+', '-', '*', '/'): ");

switch (operation) {
    case "+":
        console.log(`The sum is : ${sum(firstNumber, secondNumber)}`);
        break;
    case "*":
        console.log(`The product of first and second n umber is: ${multiply(firstNumber, secondNumber)}`);
        break;
    case "-":
        console.log(`The difference is: ${subtract(firstNumber, secondNumber)}`);
        break;
    case "/":
        if(secondNumber == 0) {
            console.log(`The denominator can't be 0`);
            return
        }
        console.log(`The dividion is: ${divide(firstNumber, secondNumber)}`);
        break;
    
    default:
        console.log(`Random`);
        
};

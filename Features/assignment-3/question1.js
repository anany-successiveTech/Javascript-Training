// 1. Write a program to perform functionality of a calculator (add,sub,multiply,divide)

const sum      = (firstNumber, secondNumber) => (firstNumber + secondNumber)
const multiply = (firstNumber, secondNumber) => (firstNumber * secondNumber)
const divide   = (firstNumber, secondNumber) => (firstNumber / secondNumber)
const subtract = (firstNumber, secondNumber) => (firstNumber - secondNumber)

const firstNumber  = Number(prompt("Enter first number: "))
const secondNumber = Number(prompt("Enter second number: "))
const operation    = prompt("Enter mathematical operation: ")

switch (operation) {
    case "+":
        console.log(sum(firstNumber, secondNumber));
        break;
    case "*":
        console.log(multiply(firstNumber, secondNumber));
        break;
    case "-":
        console.log(subtract(firstNumber, secondNumber));
        break;
    case "/":
        console.log(divide(firstNumber, secondNumber));
        break;
    
    default:
        console.log(`Random`);
        
}
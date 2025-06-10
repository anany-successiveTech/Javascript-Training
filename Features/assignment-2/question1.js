// 1. Write a program to give a random output between 1 to 10 (AC: 2 simultaneous answers could not be same)

const printRandomNumber = () => Math.floor(Math.random() * 10) + 1

const randomNumberOne = printRandomNumber()
let randomNumberTwo = printRandomNumber()

while(randomNumberOne == randomNumberTwo){
  randomNumberTwo = printRandomNumber();
}

console.log(`First random number: ${randomNumberOne}`);
console.log(`Second random number: ${randomNumberTwo}`);


// 9. Write a program to print fibonaaci series

const userInput = Number(prompt("Enter the no. of terms: "));
const fibonacci = (term) => {

  if (term < 2) {
    return term;
  } else {
    return fibonacci(term - 1) + fibonacci(term - 2);
  };
};

const printFibonacci = (count) => {
  let fibonacciSequence = '';
  for (let i = 0; i < count; i++) {
    fibonacciSequence += `${fibonacci(i)} `;
  };
  return fibonacciSequence;
};

const finalSeries = printFibonacci(userInput);  
console.log(`The fibonacci series is ; ${finalSeries}`);


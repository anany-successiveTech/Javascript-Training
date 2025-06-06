// 9. Write a program to print fibonaaci series.

const limit = Number(prompt("Enter the limit: "))
const fibonacci = (limit) => {
  if (limit < 2) {
    return limit;
  } else {
    return fibonacci(limit - 1) + fibonacci(limit- 2);
  }
};

const printFibonacci = (count) => {
  for (let i = 0; i < count; i++) {
    console.log(`The fibonacci series is: ${fibonacci(i)}`);
  }
};

printFibonacci(limit); 

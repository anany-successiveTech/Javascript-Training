// 9. Write a program to print fibonaaci series

const fibonacci = (n) => {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

const printFibonacci = (count) => {
  for (let i = 0; i < count; i++) {
    console.log(`The fibonacci series : ${fibonacci(i)}`);
  }
};

printFibonacci(10);  // Prints first 10 Fibonacci numbers

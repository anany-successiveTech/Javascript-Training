// 6. Write a program to display prime numbers from 1 to 50

const printPrimeNumber = () => {
  for (let num = 2; num <= 50; num++) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(num);
    }
  }
};
printPrimeNumber()
// 5. Write a program to print all even number first and then all odd numbers using only one iteration

const limit = Number(prompt("Enter the limit: "));
const printEvenAndOdd = (loopLimit) => {
  let even = "";
  let odd = "";
  for (let i = 0; i <= loopLimit; i++) {
    if (i % 2 == 0) {
      even += `${i} `;
    } else {
      odd += `${i} `;
    }
  }
  return { even, odd };
};

const finalResult = printEvenAndOdd(limit);
console.log(`The results are: ${finalResult}`);

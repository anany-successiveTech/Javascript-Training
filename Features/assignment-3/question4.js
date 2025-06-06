// 4. Write a program to print all even number first and then all odd numbers

const printingLimit = Number(prompt("Enter the printing limit: "))
const printEvenAndOdd = () => {
    for(let i=0; i<printingLimit; i++){
        if(i % 2 == 0) {console.log(`The even numbers: ${i} `)}
    }
    for(let i=1; i<printingLimit; i++){
        if(i % 2 != 0) {console.log(`The odd numbers: ${i} `)}
    }
}

printEvenAndOdd(printingLimit)
// 5. Write a program to print all even number first and then all odd numbers using only one iteration

const limit = Number(prompt("Enter the limit: "));
const printEvenAndOdd = (limit) => {
    let even = ""
    let odd  = ""
    for(let i=0; i<= limit; i++){
        if(i % 2 == 0){
            even += `${i} `
        }else{
            odd += `${i} `
        }
    }
    console.log(`Even: ${even}`);
    console.log(`Odd: ${odd}`);
    
    
}

printEvenAndOdd(limit)
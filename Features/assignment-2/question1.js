// 1. Write a program to give a random output between 1 to 10 (AC: 2 simultaneous answers could not be same)

function printRandom(){
   const randomNumber = Math.floor(Math.random() * 10)
   return randomNumber
}

const randomNumberOne = printRandom()
const randomNumberTwo = printRandom()

if(randomNumberOne == randomNumberTwo){ // comparing both number generated from the function.
  console.log(`Both number is equal`)
}
else{
   console.log(randomNumberOne)
   console.log(randomNumberTwo)
}
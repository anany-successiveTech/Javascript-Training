// 4. Write a program to convert given string to upperCase OR lowerCase

const userInput = prompt("Enter the string: ")
const caseConvertor = (inputString) => {
    
    const upperCase = inputString.toUpperCase()
    const lowerCase = inputString.toLocaleLowerCase()
    console.log(`Upper case conversion: ${upperCase}`);
    console.log(`Lower case conversion: ${lowerCase}`);

}
caseConvertor(userInput)
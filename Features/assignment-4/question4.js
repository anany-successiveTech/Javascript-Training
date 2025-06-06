// 4. Write a program to convert given string to upperCase OR lowerCase

const inputString = prompt("Enter the string: ")
const caseConverting = (inputString) => {
    
    const upperCase = inputString.toUpperCase()
    const lowerCase = inputString.toLocaleLowerCase()
    console.log(`Upper case conversion: ${upperCase}`);
    console.log(`Lower case conversion: ${lowerCase}`);

}
caseConverting(inputString)
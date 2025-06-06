// 5. Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

let inputString = prompt("Enter the input string: ")
inputString = inputString.trim()


const camelCaseConvertor = (inputString) => {
    let resultString = ''
    for(let i=0; i<inputString.length; i++){

       if(i !== 0 && inputString[i-1] === ' '){
        
            resultString += inputString[i].toUpperCase()
       }
       else if(inputString[i] !== ' '){

            resultString += inputString[i].toLowerCase()
        
       }

    }  
    return resultString;
 
}

const result = camelCaseConvertor(inputString)
console.log(`The camel case notation is: ${result}`);
// 2.Write a program to reverse a string ("Hello John" => "olleH nhoJ")

const inputString = prompt("Enter the string")
const reverseString = (inputString) => {
    const resultString = ''
    for(let i = 0; i < inputString.length-3; i++){
       let tempString = ''

       if(inputString[i+1] == ' ' && inputString[i+2] != ' '){
         tempString += inputString[i]
       }
       else{
        let currentSring = ''
        for(let i=tempString.size; i>=0; i--){
            currentSring += tempString[i]
        }
        resultString = currentSring
       }
    }
    
    console.log(`Reversed String: ${resultString}`);
    
}
reverseString(inputString)
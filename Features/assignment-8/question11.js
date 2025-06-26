// Find Error in below questions and rectify them

// --->  Question - 11

// const promise = new Promise(function(resolve, reject) {
//    setTimeout(function() { resolve("Data received"); }, 1000);
// });
// promise.then(function(data) {
//    console.log(data);
// }, function(error) {
//    console.log(error);
// });

// Mistake Found : 
// promise.then(function(data) {
//    console.log(data);
// }, function(error) {
//    console.log(error);
// });
// The catch was not used properly;


// Corrected code:


const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Data received");
  }, 1000);
});
promise
.then((data)=>{console.log(`The received data is: ${data}`);})
.catch((error)=>{console.log(`Error has occured: ${error}`);})
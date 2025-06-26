// Find Error in below questions and rectify them

// --->  Question - 12

// Mistake found : 
// without using "Promise" we are applying .then

//    async function getData() {
//    setTimeout(function() { return [1, 2, 3, 4, 5]; }, 1000); }
// getData().then(function(data) {
//    console.log(`The data is: ${data}`);
// });


// Corrected code:


async function getData() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve([1, 2, 3, 4, 5]);
    }, 1000);
  });
};
getData().then(function (data) {
  console.log(`The data is: ${data}`);
});

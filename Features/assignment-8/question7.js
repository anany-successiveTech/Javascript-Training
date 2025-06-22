// Find Error in below questions and rectify them

// --->  Question - 7


// Mistake Found : 
// for (var i = 0; i < 10; i++)


// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// Corrected code : 

for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
};


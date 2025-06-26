// Find Error in below questions and rectify them

// --->  Question - 6


// var person = {
//   name: "John Doe",
//   age: 30,
//   getDetails: function () {
//     console.log(this.name + " is " + this.age + " years old");
//   },
// };
// var getPersonDetails = person.getDetails;
// getPersonDetails();


// Mistake Found :

//   getDetails: function () {
//     console.log(this.name + " is " + this.age + " years old");
//   },
// var getPersonDetails = person.getDetails;
// getPersonDetails();

// Corrected Version -->

var person = {
  name: "John Doe",
  age: 30,
  getDetails: function () {
    return this.name + " is " + this.age + " years old";
  },
};
console.log(`The output is: ${person.getDetails()}`);

// Corrected line of code :

//  getDetails: function () {
//     return this.name + " is " + this.age + " years old";
//   },
// console.log(`The output is: ${person.getDetails()}`);
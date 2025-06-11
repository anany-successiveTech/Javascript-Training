//  2. Write a function to take input(age, name, phone no.) from user and display it

<<<<<<< HEAD
const getUserDetails = () =>  {

=======
const getUserDetails = () => {
>>>>>>> d002e5dbf445107f08aa88a8ed52a43c37f9138e
  let nameOfUser = prompt("Enter Name: ");
  if (!nameOfUser || !/^[A-Za-z ]+$/.test(nameOfUser.trim())) {
    alert("Invalid name. Use letters and spaces only.");
    nameOfUser = prompt("Enter Name: ");
  }

<<<<<<< HEAD
 let ageOfUser = prompt("Enter your age: ");
if (isNaN(ageOfUser) || Number(ageOfUser) < 1 || Number(ageOfUser) > 100) {
  alert("Invalid age. Please enter a number between 1 and 100.");
  ageOfUser = prompt("Enter your age: ");
}
=======
  let ageOfUser = prompt("Enter your age: ");
  if (isNaN(ageOfUser) || Number(ageOfUser) < 1 || Number(ageOfUser) > 100) {
    alert("Invalid age. Please enter a number between 1 and 100.");
    ageOfUser = prompt("Enter your age: ");
  }
>>>>>>> d002e5dbf445107f08aa88a8ed52a43c37f9138e

  let contactOfUser = prompt("Enter your Phone Number: ");
  if (!contactOfUser) {
    alert("Phone number cannot be empty.");
    contactOfUser = prompt("Enter your Phone Number: ");
  }

  const userDetails = `Name: ${nameOfUser.trim()}\nAge: ${ageOfUser}\nPhone Number: ${contactOfUser.trim()}`;
  console.log(`Details of user is: \n\n${userDetails}`);
<<<<<<< HEAD
}

=======
};
>>>>>>> d002e5dbf445107f08aa88a8ed52a43c37f9138e

getUserDetails();
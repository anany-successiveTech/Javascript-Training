//  2. Write a function to take input(age, name, phone no.) from user and display it

const getUserDetails = () => {
  let nameOfUser = prompt("Enter Name: ");
  if (!nameOfUser || !/^[A-Za-z ]+$/.test(nameOfUser.trim())) {
    alert("Invalid name. Use letters and spaces only.");
    nameOfUser = prompt("Enter Name: ");
  }

  let ageOfUser = prompt("Enter your age: ");
  if (isNaN(ageOfUser) || Number(ageOfUser) < 1 || Number(ageOfUser) > 100) {
    alert("Invalid age. Please enter a number between 1 and 100.");
    ageOfUser = prompt("Enter your age: ");
  }

  let contactOfUser = prompt("Enter your Phone Number: ");
  if (!contactOfUser) {
    alert("Phone number cannot be empty.");
    contactOfUser = prompt("Enter your Phone Number: ");
  }

  const userDetails = `Name: ${nameOfUser.trim()}\nAge: ${ageOfUser}\nPhone Number: ${contactOfUser.trim()}`;
  console.log(`Details of user is: \n\n${userDetails}`);
};

getUserDetails();
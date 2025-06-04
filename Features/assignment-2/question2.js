//  2. Write a function to take input(age, name, phone no.) from user and display it

function getUserDetails() {

  let nameOfUser = prompt("Enter Name: ");
  while (!nameOfUser || !/^[A-Za-z ]+$/.test(nameOfUser.trim())) {
    alert("Invalid name. Use letters and spaces only.");
    nameOfUser = prompt("Enter Name: ");
  }

  
  let ageOfUser = prompt("Enter your age: ");
  while (!ageOfUser || !/^\d+$/.test(ageOfUser) || Number(ageOfUser) <= 0 || Number(ageOfUser) > 100) {
    alert("Invalid age. Please enter a number between 1 and 120.");
    ageOfUser = prompt("Enter your age: ");
  }

  
  let contactOfUser = prompt("Enter your Phone Number: ");
  while (!contactOfUser) {
    alert("Phone number cannot be empty.");
    contactOfUser = prompt("Enter your Phone Number: ");
  }

  
  const userDetails = `Name: ${nameOfUser.trim()}\nAge: ${ageOfUser}\nPhone Number: ${contactOfUser.trim()}`;

  
  alert(userDetails);
  console.log(userDetails);
}


getUserDetails();

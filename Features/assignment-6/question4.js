// 4. Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.
// Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  fullName(firstName, lastName) {
    return firstName + lastName;
  }

  averageAge(personsObject) {
   
    const totalAge = personsObject.reduce((sum, person) => {
      return sum + person.age;
    }, 0);

    return totalAge / personsObject.length;
  }
};

const personsArray = [
  new Person("Aryan", "Thapak", 22),
  new Person("Manoj", "Kumar", 27),
  new Person("Anva", "Raut", 20),
];

const person_1 = new Person("Aditi", "More", 19);
const printFullName = person_1.fullName('Anany', 'More');

const averageAgeResult = person_1.averageAge(personsArray);
console.log(`The average age of persons is: ${averageAgeResult}`);
console.log(`Full name of the person is: ${printFullName}`);


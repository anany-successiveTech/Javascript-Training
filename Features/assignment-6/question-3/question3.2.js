// 3.2 Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information
// about what the student is studying.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
};

class Student extends Person {
  constructor(name, age, studies) {
    super(name, age);
    this.studies = studies;
  }

  greeting() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and I study ${this.studies}.`;
  }
};

const student = new Student("Anany More", 23, "Mathematics and Computing");
const finalResult = student.greeting();
const person = new Person('Mahesh', 34)
const newOutput = person.greeting()
console.log(`The information about student: ${finalResult}`);
console.log(`The new person: ${newOutput}`)

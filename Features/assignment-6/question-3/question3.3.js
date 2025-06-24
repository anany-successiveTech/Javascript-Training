// 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include
// information about what the teacher teaches.

class Person {
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }

  farewell() {
    
    return `Goodbye ${this.name}`; 
  }
};

class Teacher extends Person {
  constructor(name, age, subjectTaught) {
    super(name, age);
    this.subjectTaught = subjectTaught;
  }
  farewell(){
   return `${super.farewell()} Thankyou, ${this.subjectTaught}`;
  }
};

const teacher = new Teacher("Mr. Yashwanth", 40, "Mathematics");
const finalInformation = teacher.farewell();
console.log(`Farewell to our best teacher: ${finalInformation}`);

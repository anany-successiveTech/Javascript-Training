// 3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person.
// Also add a method farewell() that returns a string saying goodbye to the person.

class Person {
  constructor(name, age, gender, interests) {
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.name = name;
  }

  greeting() {
    let greetingIntro = `Say hello to ${this.name}, a passionate and curious ${this.age}-year-old ${this.gender}. He finds joy in ${this.interests},
           and always looks for new experiences to grow and connect with the world.`;
    return greetingIntro;
  }

  farewell() {
    return `Goodbye ${this.name}`;
  }
}

const person_1 = new Person("Anany More", 23, "Male", "buliding DIY stuffs");
const introduction = person_1.greeting();
const farewellGoodby = person_1.farewell();
console.log(`My intro : ${introduction}`);
console.log(`Goodbye to : ${farewellGoodby}`);

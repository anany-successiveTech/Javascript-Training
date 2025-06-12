// 1. Write a program to iterate over object.

// Taking random sample object to iterate over it.

const userDetails = {
  name: "Anany More",
  age: 23,
  country: "India",
  email: "ananymore@example.com",
  phone: "9301400158",
  profession: "Trainee Engineer",
};

const objectIterator = (Object) => {
  for (let key in Object) {
    console.log(`The ${key} is : ${Object[key]}`);
  }
};

const objectItems = objectIterator(userDetails);
console.log(`The object items are: ${objectItems}`);
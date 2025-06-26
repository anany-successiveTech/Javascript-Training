// 4. Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

const userObject = {
  name: "Anany",
  age: 23,
  address: "Noida",
  isEmployee: true,
  continents: {
    continent_1: "Asia",
    continent_2: "Africa",
    continent_3: "North America",
    continent_4: "South America",
  },
  group: ["Anany", "John", "Aryan"],
};

const deepClone = (obj) => {
  const newObject = JSON.parse(JSON.stringify(obj));
  return newObject;
};

const deepClonedObject = deepClone(userObject);
console.log("The deep clone is: ", deepClonedObject);

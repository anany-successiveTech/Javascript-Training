// 3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

const users = [
  { name: "Anany", age: 27, id: 1 },
  { name: "Alice", age: 24, id: 2 },
  { name: "Bob", age: 30, id: 3 },
  { name: "John", age: 25, id: 4 },
];

const removeIdWithMap = (inputArray) => {
  const newArray = inputArray.map((user) => {
    return { name: user.name, age: user.age };
  });
  return newArray;
};

const userWithoutId = removeIdWithMap(users);
console.log("The user without id are: ", userWithoutId);

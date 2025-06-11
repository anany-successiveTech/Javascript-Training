// 2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})

const users = [
  { name: "Anany", age: 27, id: 1 },
  { name: "Alice", age: 24, id: 2 },
  { name: "Bob", age: 30, id: 3 },
  { name: "Manoj", age: 19, id: 4 },
  { name: "Devashri", age: 45, id: 5 },
];

users.sort((a, b) => a.age - b.age);

console.log("The sorted array of users based on age (ascending order):", users);



// 5. Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties.
// The function should handle nested objects and arrays.
// const obj = {
//    a: 1,
//    b: { c: 2, d: [3, 4] }
// };
// Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }

const object = {
  a: 1,
  b: { c: 2, d: {x:[3, 4], y:{z:10}} },
};

let newkey = "";
const resultObject = {};

const flattenObject = (obj, newkey, newObj) => {
  for (let key in obj) {
    let newkey_2 = newkey != "" ? `${newkey}.${key}` : key;

    if (typeof obj[key] == "object") {
      flattenObject(obj[key], newkey_2, newObj);
    } else {
      newObj[newkey_2] = obj[key];
    }
  }
};

const flattenObjectResult = flattenObject(object, newkey, resultObject);
console.log("The flatten object is: ", resultObject);

// 3. Write a function expression that takes in another function as an argument

const mainFunction = function (newcallBack) {
  console.log(`hello this is main function`);
  newcallBack();
};

const callBack = function () {
  console.log(`hello this is callback`);
};

mainFunction(callBack);

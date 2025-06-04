// 3. Write a function expression that takes in another function as an argument

const main = (newcallBack) => {
  console.log(`hello this is main function`);
  newcallBack();
};

const callBack = () => {
  console.log(`hello this is callback`);
};

main(callBack);

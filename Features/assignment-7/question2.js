// 2. Give an example of using multiple callback functions in a single function in JavaScript

// 1. Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)

const multipleCallbacks = (startCallback, successCallback, errorCallback) => {
  startCallback(); 

  fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => successCallback(data))
    .catch((error) => errorCallback(error));
};

multipleCallbacks(
  () => console.log("Starting the execution"), // callback one;
  (data) => console.log(`Data fetched successfully: ${data.fact}`), // callback two;
  (error) => console.log(`Error in getting data: ${error}`) // callback three;
);

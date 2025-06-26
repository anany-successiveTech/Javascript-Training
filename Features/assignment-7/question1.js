// 1. Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)

const asynchronousCallback = (responseCallback) => {
  const response = fetch("https://catfact.ninja/fact");
  response
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Something went wrong: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => responseCallback(null, data))
    .catch((error) => responseCallback(error, null));
};

const callback = (error, data) => {
  if (error) {
    console.log(`Failed to get the fact: ${error}`);
  }
  console.log(`The cat fact is: ${data.fact}`);
};

asynchronousCallback(callback);

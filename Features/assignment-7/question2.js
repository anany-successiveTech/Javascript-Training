// 2. Give an example of using multiple callback functions in a single function in JavaScript

// 1. Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)

const multiple = (onStart, onSuccess, onError) => {
  try {
    onStart();

    fetch("https://catfact.ninja/fact")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Something went wrong: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => onSuccess(data))
      .catch((error) => onError(error));
  } catch (error) {
    onError(error);
  }
};

multiple(
  () => console.log("Starting the execution"),
  (data) => console.log(`Data fetched successfully: ${data.fact}`),
  (error) => console.log(`${error}`)
);

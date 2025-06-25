// 6. Implement a function that returns a resolved Promise after a specified delay using async/await.

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function delayedResult() {
  await delay(2000); // waits for 2 seconds
  return "Resolved after 2 seconds";
};

delayedResult().then((result) => console.log(result));

// 6. Implement a function that returns a resolved Promise after a specified delay using async/await.

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delayedResult() {
  try {
    await delay(2000);
    return "Resolved after 2 seconds";
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
}

delayedResult().then((result) => console.log(result));

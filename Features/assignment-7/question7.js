// 7. Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.
// Simulate async tasks using setTimeout and Promises
const taskOne = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task One Complete"), 1000);
  });
};

const taskTwo = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task Two Complete"), 2000);
  });
};

const taskThree = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task Three Complete"), 3000);
  });
};

const runAllTasks = async () => {
  try {
    const results = await Promise.all([taskOne(), taskTwo(), taskThree()]);
    return results;
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
};

runAllTasks().then(([res1, res2, res3]) => {
  console.log(res1);
  console.log(res2);
  console.log(res3);
});

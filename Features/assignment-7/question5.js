// 5.  Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit.
// This question was 85% solved by 'Krishna'

function createTask(id) {
  return () =>
    new Promise((resolve) => {
      console.log("start", id);
      setTimeout(() => {
        console.log("end", id);
        resolve(id);
      }, 1000);
     
    });
}

const tasks = [
  { fn: createTask(1), priority: 3 },
  { fn: createTask(2), priority: 4 },
  { fn: createTask(3), priority: 1 },
  { fn: createTask(4), priority: 2 },
  { fn: createTask(5), priority: 5 },
  { fn: createTask(6), priority: 10 },
  { fn: createTask(7), priority: 6 },
  { fn: createTask(8), priority: 7 },
  { fn: createTask(9), priority: 8 },
];

function runPriorityTask(tasks, parallel) {
  // tasks->array of objects{ fn=> promise, priority}
  tasks.sort((a, b) => b.priority - a.priority); // sort according to the priority

  let result = [];

  async function runTasks() {
    for (let i = 0; i < tasks.length; i += parallel) {
      const batch = tasks.slice(i, i + parallel).map((task) => task.fn());
      const res = await Promise.all(batch);
      result.push(...res);
    }
    return result;
  }

  return runTasks();
}

runPriorityTask(tasks, 2).then((res) => console.log(`Done: ${res}`));


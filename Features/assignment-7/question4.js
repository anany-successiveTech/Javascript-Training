// 4. Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number

// This is the important problem for interview as well and real world senarios too.
// It was asked in krishna's interview; and this approach was told by krishna.

class RateLimiter {
  constructor(limit) {
    this.queue = [];
    this.limit = limit;
    this.activeCount = 0;
  }

  scheduler(promiseFunction) {
    return new Promise((resolve, reject) => {
      const run = async () => {
        this.activeCount++;
        const result = await promiseFunction;
        this.activeCount--;
        resolve(result);
      };

      if (this.queue.length < this.limit) {
        this.queue.push(run);
      }
      if (this.activeCount < this.limit) {
        const next = this.queue.shift();
        next();
      }
    });
  }
}

const promiseFunction = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(id);
    }, 1000);
  });
};

const rateLimiterResult = new RateLimiter(3);

for(let i=1; i<10; i++){
    rateLimiterResult.scheduler(promiseFunction(i)).then((data) => {
        console.log(`The data we get is ${data}`);
        
    });
};
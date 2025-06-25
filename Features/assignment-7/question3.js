// 3. Convert a callback-based API to a Promise-based API (function fetchData(callback) { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })

const fetchData = (callback) => {
  setTimeout(() => {
    callback(null, "Data fetched successfully");
  }, 1000);
};

const fetchDataPromise = () =>
  new Promise((resolve, reject) => {
    fetchData((err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });

fetchDataPromise()
  .then((data) => console.log("Success:", data))
  .catch((err) => console.log("Error:", err));

// 3. Convert a callback-based API to a Promise-based API (function fetchData(callback) { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })

function getCatFact() {
  return new Promise((resolve, reject) => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => resolve(data.fact))
      .catch(() => reject("Failed to fetch cat fact"));
  });
}

// Usage
getCatFact()
  .then((fact) => console.log("Cat Fact:", fact))
  .catch((err) => console.error("There is an error: ", err));

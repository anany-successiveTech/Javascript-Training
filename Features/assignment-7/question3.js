// 3. Convert a callback-based API to a Promise-based API (function fetchData(callback) { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })

const fetchData = (callback) => {
  setTimeout(() => {
    callback(null, "Data fetched successfully");
  }, 1000);
};

const handleFetch = () =>
  new Promise((resolve, reject) => {
    fetchData((err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });

const fetchResult = async () => {
  try{
    const data = await handleFetch();
    console.log(`Success: ${data}`);
  }
  catch(error){
    console.log(`Error: ${error}`);
    
  }
};

fetchResult();

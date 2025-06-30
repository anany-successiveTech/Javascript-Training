// 8. Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.

const urls = {
  post: "https://jsonplaceholder.typicode.com/posts/1",
  catFact: "https://catfact.ninja/fact",
  weather:
    "https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&hourly=temperature_2m",
};

const fetchDataParallel = async () => {
  try {
    const [postRes, catRes, weatherRes] = await Promise.all([
      fetch(urls.post),
      fetch(urls.catFact),
      fetch(urls.weather),
    ]);

    const post = await postRes.json();
    const catFact = await catRes.json();
    const weather = await weatherRes.json();

    const combinedData = {
      postTitle: post.postTitle,
      fact: catFact.fact,
      currenTemperature: weather.hourly.temperature_2m[0],
    };
    console.log("The combined data is: ", combinedData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchDataParallel();

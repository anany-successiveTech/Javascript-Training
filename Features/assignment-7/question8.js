// 8. Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.

async function fetchData() {
  const catFactUrl = 'https://catfact.ninja/fact';
  const activityUrl = 'https://www.boredapi.com/api/activity';
  const ageUrl = 'https://api.agify.io?name=alex';
  const genderUrl = 'https://api.genderize.io?name=alex';

  const res1 = await fetch(catFactUrl);
  const catFact = await res1.json();

  const res2 = await fetch(activityUrl);
  const activity = await res2.json();

  const res3 = await fetch(ageUrl);
  const age = await res3.json();

  const res4 = await fetch(genderUrl);
  const gender = await res4.json();

  console.log("Cat Fact:", catFact.fact);
  console.log("Activity:", activity.activity);
  console.log("Predicted Age:", age.age);
  console.log("Predicted Gender:", gender.gender);
}

fetchData();

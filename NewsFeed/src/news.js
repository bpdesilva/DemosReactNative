const url =
  "";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
  console.log(result);
}
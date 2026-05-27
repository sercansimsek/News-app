const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // TODO: Add a function call to display the news
    displayNews(data.articles);
  } catch (error) {
    console.error("There was an error!", error);
  }
}

function displayNews(articles) {
  const newsDiv = document.querySelector("#news");
  for (const article of articles) {
    const articleDiv = document.createElement("div");
    articleDiv.classList.add("news-container");

    //create and append a headline to the articleDiv
    const newsImage = document.createElement("img");
    newsImage.src = article.urlToImage;
    newsImage.classList.add("news-image");
    articleDiv.appendChild(newsImage);

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("news-content");

    const title = document.createElement("h4");
    title.textContent = article.title;
    title.classList.add("news-title");
    contentDiv.appendChild(title);

    // TODO: Use document.createElement and appendChild to create and append more elements
    const description = document.createElement("p");
    description.textContent = article.description;
    description.classList.add("news-description");
    contentDiv.appendChild(description);

    const author = document.createElement("p");
    author.textContent = article.author;
    author.classList.add("news-author");
    contentDiv.appendChild(author);

    articleDiv.appendChild(contentDiv);
    newsDiv.appendChild(articleDiv);
  }
}

fetchNews();

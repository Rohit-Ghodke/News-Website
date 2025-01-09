const apiKey = '711cb8c02a8c4f0ba84dbc47eddefb30'; // Replace with your News API key
const newsContainer = document.getElementById('news-container');

// Function to fetch news from News API
async function fetchNews() {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayNews(data.articles);
  } catch (error) {
    console.error('Error fetching news:', error);
    newsContainer.innerHTML = '<p>Failed to fetch news. Please try again later.</p>';
  }
}

// Function to display news on the webpage
function displayNews(articles) {
  newsContainer.innerHTML = ''; // Clear previous news
  articles.forEach(article => {
    const newsCard = document.createElement('div');
    newsCard.className = 'news-card';

    const title = document.createElement('h2');
    title.textContent = article.title;

    const description = document.createElement('p');
    description.textContent = article.description || 'No description available.';

    const link = document.createElement('a');
    link.href = article.url;
    link.textContent = 'Read more';
    link.target = '_blank';

    newsCard.appendChild(title);
    newsCard.appendChild(description);
    newsCard.appendChild(link);

    newsContainer.appendChild(newsCard);
  });
}

// Fetch news on page load
fetchNews();

const api_url = "https://api.quotable.io/quotes/random?tags=Philosophy|Leadership|Inspirational";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
  const response = await fetch(url);
  let data = await response.json();

  quote.innerHTML = data[0].content;
  author.innerHTML = data[0].author;
}

getQuote(api_url);

function tweet() {
  window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "-by " + author.innerHTML, "X Window", "width=600, height=300");
}
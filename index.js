const endpoint = "https://api.quotable.io/random";
const quoteText = document.getElementById("text");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const tweetQuoteBtn = document.getElementById("tweet-quote");

function getQuote() {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const quote = data.content;
      const author = data.author;
      quoteText.textContent = quote;
      authorText.textContent = `- ${author}`;
      tweetQuoteBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quote} -${author}`)}`;
    })
    .catch(() => {
      quoteText.textContent =
        "Oops, something went wrong while fetching the quote :(";
      authorText.textContent = "";
    });
}

newQuoteBtn.addEventListener("click", getQuote);

getQuote();

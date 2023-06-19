const url = "https://www.tronalddump.io";

const dagensQuote = document.getElementById("getQuote");
const randomQuote = document.getElementById("randomQuote");
const getNewQuoteButton = document.getElementById("getNewQuote");

async function get(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error: " + response.status);
  }
  return await response.json();
}

async function getTrumpQuote() {
  try {
    const data = await get(url + "/random/quote");
    dagensQuote.innerHTML = `<p>Value: ${data.value}</p><p>Tag: ${data.tags[0]}</p>`;
  } catch (error) {
    console.log(error);
    dagensQuote.innerHTML = "Der er sket en fejl";
  }
}

async function getRandomQuote() {
  try {
    const data = await get(url + "/random/quote");
    const quoteRow = document.createElement("tr");
    quoteRow.innerHTML = `<td>${data.value}</td><td>${data.tags[0]}</td>`;
    randomQuote.appendChild(quoteRow);
  } catch (error) {
    console.log(error);
    randomQuote.innerHTML = "Der er sket en fejl";
  }
}

async function getQuotesByTag(tag) {
  try {
    const data = await get(url + "/search/quote?query=" + tag);
    randomQuote.innerHTML = ""; // Tøm tidligere quotes
    data._embedded.quotes.forEach((quote) => {
      const quoteRow = document.createElement("tr");
      quoteRow.innerHTML = `<td>${quote.value}</td><td>${quote.tags[0]}</td>`;
      randomQuote.appendChild(quoteRow);
    });
  } catch (error) {
    console.log(error);
    randomQuote.innerHTML = "Der er sket en fejl";
  }
}

getTrumpQuote(); // Kaldes ved siden af DOMContentLoaded-eventet

getNewQuoteButton.addEventListener("click", () => {
  getTrumpQuote();
});

randomQuote.addEventListener("click", (event) => {
  const tag = event.target.textContent;
  getQuotesByTag(tag);
});

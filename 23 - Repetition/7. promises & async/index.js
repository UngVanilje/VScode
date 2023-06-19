const url = "https://www.tronalddump.io";

const quoteContainer = document.getElementById("quoteContainer");
const getNewQuotesButton = document.getElementById("getNewQuotes");

async function get(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error: " + response.status);
  }
  return await response.json();
}

async function getThreeRandomQuotes() {
  try {
    const promises = [];
    for (let i = 0; i < 3; i++) {
      promises.push(get(url + "/random/quote"));
    }
    const quotes = await Promise.all(promises);
    const quoteHtml = quotes
      .map((quote) => `<p>Value: ${quote.value}, Tag: ${quote.tags[0]}</p>`)
      .join("");
    quoteContainer.innerHTML = quoteHtml;
  } catch (error) {
    console.log(error);
    quoteContainer.innerHTML = "Der er sket en fejl";
  }
}

getThreeRandomQuotes();

getNewQuotesButton.addEventListener("click", () => {
  getThreeRandomQuotes();
});

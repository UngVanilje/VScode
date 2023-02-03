let chrQuotes = "A wanna suck a dick, bu dum dum dum";

let wordCount = {};
let words = chrQuotes.split(" "); 

for (let word of words) {
  if (wordCount[word]) {
    wordCount[word]++;
  } else {
    wordCount[word] = 1;
  }
}

for (let word in wordCount) {
  console.log(`${word}: ${wordCount[word]}`);
}

 





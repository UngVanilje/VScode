
const userUrl = 'https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new'

function randomPromise() {
    return new Promise((resolve, reject) => {
      fetch(userUrl)
        .then((response) => response.text())
        .then((text) => parseInt(text))
        .then((randomNum) => {
          if (randomNum < 4) {
            resolve(randomNum);
          } else if (randomNum > 4 && randomNum < 7) {
            reject(`The number ${randomNum} is too large`);
          } else {
            throw new Error(`The number ${randomNum} caused an exception`);
          }
        })
        .catch((error) => reject(error));
    });
  }


  const promises = [];
for (let i = 0; i < 5; i++) {
  promises.push(randomPromise());
}

Promise.all(promises)
  .then((values) => console.log(`Promise.all resolved with ${values}`))
  .catch((err) => console.log(`Promise.all rejected with ${err}`));

Promise.any(promises)
  .then((value) => console.log(`Promise.any resolved with ${value}`))
  .catch((err) => console.log(`Promise.any rejected with ${err}`));

Promise.allSettled(promises)
  .then((results) =>
    console.log(
      `Promise.allSettled resolved with ${results
        .map((result) => result.status)
        .join(", ")}`
    )
  );
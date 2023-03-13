
function randomPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 11);
        if (randomNum < 7) {
          resolve(randomNum);
        } else if (randomNum < 10) {
          reject(`The number ${randomNum} is too large`);
        } else {
          throw new Error(`The number ${randomNum} caused an exception`);
        }
      }, 1000);
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
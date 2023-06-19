function gaetTalSytten() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let tal = Math.floor(Math.random() * 2000);
      if (tal % 17 == 0) {
        resolve(tal);
      } else {
        reject(tal);
      }
    }, Math.floor(Math.random() * 2000) + 1000);
  });
}

gaetTalSytten()
  .then((tal) => {
    console.log("Tallet " + tal + " går op i 17");
  })
  .catch((tal) => {
    console.log("Tallet " + tal + " går ikke op i 17");
  });

function proevTreGange(number) {
  let promises = [];
  for (let i = 0; i < number; i++) {
    let promise = gaetTalSytten()
      .then((tal) => {
        console.log("Forsøg " + (i + 1) + ": Tallet " + tal + " går op i 17");
        return { success: true, tal: tal };
      })
      .catch((tal) => {
        console.log(
          "Forsøg " + (i + 1) + ": Tallet " + tal + " går ikke op i 17"
        );
        return { success: false, tal: tal };
      });
    promises.push(promise);
  }
  return Promise.all(promises);
}

proevTreGange(100);

// function proevTreGange(number) {
//   let promises = [];
//   for (let i = 0; i < 3; i++) {
//     let promise = gaetTalSytten()
//       .then((tal) => {
//         console.log("Forsøg " + (i + 1) + ": Tallet " + tal + " går op i 17");
//         return { success: true, tal: tal };
//       })
//       .catch((tal) => {
//         console.log(
//           "Forsøg " + (i + 1) + ": Tallet " + tal + " går ikke op i 17"
//         );
//         return { success: false, tal: tal };
//       });
//     promises.push(promise);
//   }
//   return Promise.all(promises);
// }

// opgave11.1.js
//const userUrl = 'https://jsonplaceholder.typicode.com/users';
// const userUrl = 'https://jsonplaceholder.typicode.com/users/11';
const userUrl = "https://jsonplaceholder.typicode.com/users";

async function get(userUrl) {
  const response = await fetch(userUrl);
  if (response.status !== 200) throw new Error(response.status);
  return await response.json();
}

async function print() {
  try {
    const data = await get(userUrl);
    data.forEach((user) => {
      console.log(user.name);
    });
  } catch (error) {
    console.log("Error: " + error.message);
  }
}

print();

//Uden Async

function get(userUrl) {
  return fetch(userUrl).then((response) => {
    if (response.status !== 200) throw new Error(response.status);
    return response.json();
  });
}

function print() {
  get(userUrl)
    .then((data) => {
      data.forEach((user) => {
        console.log(user.name);
      });
    })
    .catch((error) => console.log("Error: " + error.message));
}

print();

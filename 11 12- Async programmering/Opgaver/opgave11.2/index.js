const userUrl = "https://jsonplaceholder.typicode.com/users";
const postUrl = "https://jsonplaceholder.typicode.com/posts?userId=";

const userList = document.getElementById("user-list");
const postTableBody = document.getElementById("post-table-body");

async function get(url) {
  const respons = await fetch(url);
  if (respons.status !== 200)
    // OK
    throw new Error(respons.status);
  return await respons.json();
}

async function displayUsers() {
  try {
    const users = await get(userUrl);
    userList.innerHTML = users
      .map(
        (user) =>
          `<tr onclick="displayPosts(${user.id})"><td>${user.username}</td></tr>`
      )
      .join("");
  } catch (error) {
    console.log("Error: " + error.message);
  }
}

async function displayPosts(userId) {
  try {
    const posts = await get(postUrl + userId);
    postTableBody.innerHTML = posts
      .map(
        (post) =>
          `<tr><td>${post.id}</td><td>${post.title}</td><td>${post.body}</td></tr>`
      )
      .join("");
    const selectedRows = document.getElementsByClassName("selected");
    while (selectedRows.length > 0) {
      selectedRows[0].classList.remove("selected");
    }
    const selectedRow = document.querySelector(
      `[onclick="displayPosts(${userId})"]`
    );
    selectedRow.classList.add("selected");
  } catch (error) {
    console.log("Error: " + error.message);
  }
}

displayUsers();

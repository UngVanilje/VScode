// opgave11.2.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

const userList = document.getElementById('user-list');
const postTableBody = document.getElementById('post-table-body');

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}


async function displayUsers() {
    try {
        const users = await get(userUrl);
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.username;
            li.addEventListener('click', async () => {
                await displayPosts(user.id);
            });
            userList.appendChild(li);
        });
    } catch (error) {
        console.log("Error: " + error.message);
    }
}

displayUsers();

async function displayPosts(userId){
try {
    const posts = await get(postUrl + userId);
    postTableBody.innerHTML = '';
    posts.forEach(post => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
         td1.textContent = post.id;
         td2.textContent = post.title;
         td3.textContent = post.body;
         tr.appendChild(td1);         
         tr.appendChild(td2);
         tr.appendChild(td3);
        postTableBody.appendChild(tr);
    });
} catch (error) {
    console.log("Error: " + error.message);
    }
}


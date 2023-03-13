// opgave11.1.js
//const userUrl = 'https://jsonplaceholder.typicode.com/users';
// const userUrl = 'https://jsonplaceholder.typicode.com/users/11';
 const userUrl = 'httpz://jsonplaceholder.typicode.com/users';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}
 
async function print(){
     const data = await get(userUrl)
    .then (data => console.log(data))
    .catch (error => console.log("Error: " + error.message));
}
print();

//Uden Async

function getDat(url) {
    return fetch(url)
        .then(response => {
            if (response.status !== 200)
                throw new Error(response.status);
            return response.json();
        });
}

function printStuff(){
    const data = getDat(userUrl)
        .then (data => console.log(data))
        .catch (error => console.log("Error: " + error.message));
}
printStuff();

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    });
    if (respons.status !== 201) // Created
        throw new Error(respons.status);
    return await respons.text();
}

function changeNumber(tlfNumber) {
    let tlf = document.getElementById("tlf").value;
    let oldTlf = tlfNumber;
    let data = { Telefon : tlf , id : oldTlf};
    post("/changeNumber", data)
        .then(id => {
            let row = document.getElementById(id);
            row.cells[1].innerHTML = tlf;
        }
        )
        .catch(fejl => console.log(fejl));
}
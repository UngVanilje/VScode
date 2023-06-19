async function get(url) {
  const respons = await fetch(url);
  if (respons.status !== 200) throw new Error(respons.status);
  return await respons.json();
}

async function post(url, objekt) {
  const respons = await fetch(url, {
    method: "POST",
    body: JSON.stringify(objekt),
    headers: { "Content-Type": "application/json" },
  });
  if (respons.status !== 201) throw new Error(respons.status);
  return await respons.text();
}

function add() {
  let navn = document.getElementById("name").value;
  let adresse = document.getElementById("address").value;
  let person = { navn: navn, adresse: adresse };
  let personList = document.getElementById("people");
  post("/add", person)
    .then((id) => {
      let li = document.createElement("li");
      li.innerHTML = `${id}: ${navn} bor på ${adresse}`;
      personList.appendChild(li);
    })
    .catch((fejl) => console.log(fejl));
}

const earthquakeUrl = // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

async function get(url) {
  const respons = await fetch(url);
  if (respons.status !== 200)
    //OK
    throw new Error(respons.status);
  return await respons.json();
}

//Creates the table for the earthquakes
async function createTable() {
  const earthquakes = await get(earthquakeUrl);
  const table = document.createElement("table");
  const tr = document.createElement("tr");
  const th1 = document.createElement("th");
  const th2 = document.createElement("th");
  const th3 = document.createElement("th");
  th1.textContent = "Styrke";
  th2.textContent = "Sted";
  th3.textContent = "Tidspunkt";
  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  table.appendChild(tr);
  earthquakes.features.sort((a, b) => b.properties.mag - a.properties.mag);
  earthquakes.features.forEach((eq) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    if (eq.properties.mag >= 5) {
      td1.textContent = eq.properties.mag;
      td2.textContent = eq.properties.place;
      td3.textContent = new Date(eq.properties.time);

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      table.appendChild(tr);
    }
  });
  document.body.appendChild(table);
}

createTable();

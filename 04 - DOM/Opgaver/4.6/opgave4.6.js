const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

function createTable() {
  let table = document.createElement("table");
  let tableHead = document.createElement("thead");
  let tableBody = document.createElement("tbody");

  table.appendChild(tableHead);
  table.appendChild(tableBody);

  let tableRow = document.createElement("tr");
  tableHead.appendChild(tableRow);

  for (let key in MOUNTAINS[0]) {
    let tableHeadData = document.createElement("th");
    tableHeadData.textContent = key;
    tableRow.appendChild(tableHeadData);
  }

  for (let i = 0; i < MOUNTAINS.length; i++) {
    let tableRow = document.createElement("tr");
    tableBody.appendChild(tableRow);

    for (let key in MOUNTAINS[i]) {
      let tableData = document.createElement("td");
      tableData.textContent = MOUNTAINS[i][key];
      tableRow.appendChild(tableData);
    }
  }

  document.body.appendChild(table);
}

createTable();

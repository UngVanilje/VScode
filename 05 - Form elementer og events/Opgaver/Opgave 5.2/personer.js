let inputNavn = document.getElementById('navn');
let inputAlder = document.getElementById('alder');
let personer = document.getElementById('personer');
let buttonTilføje = document.getElementById('tilføj');

let personArray = [];

buttonTilføje.addEventListener('click', () => {
    let navn = inputNavn.value;
    let alder = parseInt(inputAlder.value, 10);
    personArray.push({navn, alder});
    updateTable();
    inputNavn.value = "";
    inputAlder.value = "";

});

function updateTable() {
    let table = "<table>";
    table += "<tr></tr>";
    for (let person of personArray) {
        table += "<tr><td>" + person.navn + "</td><td>" + person.alder + "</td></tr>";
    }
    table += "</table>";
    personer.innerHTML = table;
}






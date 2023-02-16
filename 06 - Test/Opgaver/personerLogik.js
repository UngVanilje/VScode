
let personArray = [];

export function addPerson(personArray, navn, alder) {
    personArray.push({navn, alder});
    return personArray;
}
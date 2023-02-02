let person = {Navn: "Giga nigger",  Mail: "giganigger@nigger.dk", Tlf: "53265001"};
let person2 = {Navn: "Mega nigger", Mail: "meganigger@nigger.dk", Tlf: "53265002"};
let person3 = {Navn: "Ultra nigger", Mail: "ultranigger@nigger.dk", Tlf: "53265003"};
let person4 = {Navn: "Omega nigger", Mail: "omeganigger@nigger.dk", Tlf: "53265004"};
let person5 = {Navn: "OG nigger", Mail: "ognigger@nigger.dk", Tlf: "53265005"};

let personArray = [person, person2, person3, person4, person5]



personArray[4] = {Navn: "Nignog the Nigger", Mail: "nignog@nigger.dk", Tlf: "53265005"}

console.log(personArray[4]);

delete personArray[3];

for(let i = 0; i <= personArray.length;i++){
    console.log(personArray[i])
}




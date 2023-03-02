let persons = [
    {
        firstName: 'Gewir Gokkedreng',
        age: 41,
        id: 1,
        mobilernummer: '0123456789'
    },
    {
        firstName: 'Krølle Pleasuretown',
        age: 22,
        id: 2,
        mobilernummer: '1234567890'
    },
    {
        firstName: 'Billybob Jimbob',
        age: 26,
        id: 3,
        mobilernummer: '2345678901'
    },
    {
        firstName: 'Gaylord Farquad',
        age: 20,
        id: 4,
        mobilernummer: '3456789012'
    }
];

//Finder person
let findTheBitch = persons.filter(function (person){
    return person.mobilernummer === '0123456789'
});
console.log(findTheBitch[0]);



//Finder yngste person
let buttomBitch = persons.sort((a, b) => a.age -b.age);
 console.log(buttomBitch[0]);

//Finder bitches
let sorterBitches = persons.sort((a, b) => a.firstName.localeCompare(b.firstName));
sorterBitches.forEach(function (person) {
    console.log(person.firstName + ", ");
  });

//Laver bitches
console.log("\n");
let createBitches = persons.filter((person) => person.age < 30);

createBitches.forEach(element => {
    console.log(element.firstName + " " + element.mobilernummer + " ");
    
});


//Array af biler
let biler = [];

let bil1 = {
  mærke: "Tesla",
  nummerplade: "AB12345",
  vægt: 1500,
  hjul: 4,
};

let bil2 = {
  mærke: "BMW",
  nummerplade: "CD12345",
  vægt: 1200,
  hjul: 4,
};

let bil3 = {
  mærke: "Audi",
  nummerplade: "EF12345",
  vægt: 1300,
  hjul: 4,
};

let bil4 = {
  mærke: "VW",
  nummerplade: "GH12345",
  vægt: 1400,
  hjul: 4,
};

let bil5 = {
  mærke: "Scania",
  nummerplade: "IJ12345",
  vægt: 2000,
  hjul: 8,
};

let bil6 = {
  mærke: "Volvo",
  nummerplade: "KL12345",
  vægt: 1800,
  hjul: 8,
};

let bil7 = {
  mærke: "Volkswagen",
  nummerplade: "MN12345",
  vægt: 2200,
  hjul: 10,
};

//tilføjer  til array
biler.push(bil1);
biler.push(bil2);
biler.push(bil3);
biler.push(bil4);
biler.push(bil5);
biler.push(bil6);
biler.push(bil7);

for (let i = 0; i < biler.length; i++) {
  console.log(biler[i]);
}

//Biler med 8 hjul
let bilerMed8Hjul = biler.filter((bil) => bil.hjul == 8);

bilerMed8Hjul.forEach((index) => {
  console.log(index);
});

//Nummerplader
let nummerplader = biler.map((bil) => bil.nummerplade);
console.log(nummerplader);

//Laveste vægt
let bilMedLavestVægt = biler.reduce((accumulator, bil) => {
  if (bil.vægt < accumulator.vægt) {
    accumulator = bil;
  }
  return accumulator;
}, biler[0]);
console.log(bilMedLavestVægt);

//Finder bil med flest hjul
let bilMedFlestHjul = biler.reduce((accumulator, bil) => {
  if (bil.hjul > accumulator.hjul) {
    accumulator = bil;
  }
  return accumulator;
}, biler[0]);
console.log(bilMedFlestHjul);

//Tæller antal biller med 4, 8 og 10 hjul
let antalBilerMed4Hjul = biler.filter((bil) => bil.hjul == 4).length;
let antalBilerMed8Hjul = biler.filter((bil) => bil.hjul == 8).length;
let antalBilerMed10Hjul = biler.filter((bil) => bil.hjul == 10).length;

console.log("Antal biler med 4 hjul: " + antalBilerMed4Hjul);
console.log("Antal biler med 8 hjul: " + antalBilerMed8Hjul);
console.log("Antal biler med 10 hjul: " + antalBilerMed10Hjul);

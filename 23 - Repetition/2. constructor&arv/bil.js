class Bil {
  bilmaerke;
  pris;
  static antal = 0;
  constructor(bilmaerke, pris) {
    if (
      bilmaerke == null ||
      pris == null ||
      typeof bilmaerke != "string" ||
      typeof pris != "number"
    ) {
      throw new Error("Forkert type");
    }
    this.bilmaerke = bilmaerke;
    this.pris = pris;
    Bil.antal++;
  }
  toString() {
    return `Bilmaerke: ${this.bilmaerke}, pris: ${this.pris}`;
  }
  static getAntal() {
    return Bil.antal;
  }
}
class Varevogn extends Bil {
  constructor(bilmaerke, pris, lasteevne) {
    if (lasteevne == null || typeof lasteevne != "number") {
      throw new Error("Forkert type");
    }
    super(bilmaerke, pris);
    this.lasteevne = lasteevne;
  }
  toString() {
    return `${super.toString()}, Bilmaerke: ${this.bilmaerke}, pris: ${
      this.pris
    }, lasteevne: ${this.lasteevne} kg`;
  }
}

let bil1 = new Bil("BMW", 100000);
let bil2 = new Bil("Audi", 200000);
let bil3 = new Bil("Mercedes", 300000);
let bil4 = new Bil("VW", 400000);

Bil.create("BMW", 100000);
Bil.varevogn.create("BMW", 100000, 1000);

let varevogn1 = new Varevogn("BMW", 100000, 1000);
let varevogn2 = new Varevogn("Audi", 200000, 2000);
let varevogn3 = new Varevogn("Mercedes", 300000, 3000);
let varevogn4 = new Varevogn("VW", 400000, 4000);

let biler = [
  bil1,
  bil2,
  bil3,
  bil4,
  varevogn1,
  varevogn2,
  varevogn3,
  varevogn4,
];

biler.forEach((bil) => {
  console.log(bil.toString());
});

console.log("Antal biler: " + Bil.getAntal());

let express = require("express");
let app = express();
let pug = require("pug");
let path = require("path");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

let values = [
  { navn: "Ole", alder: 10, højde: 180, nationalitet: "dk" },
  { navn: "Hans", alder: 20, højde: 170, nationalitet: "dk" },
  { navn: "Jens", alder: 30, højde: 160, nationalitet: "dk" },
  { navn: "Peter", alder: 40, højde: 150, nationalitet: "dk" },
  { navn: "Jørgen", alder: 50, højde: 140, nationalitet: "dk" },
  { navn: "Jesper", alder: 60, højde: 130, nationalitet: "dk" },
  { navn: "Jeppe", alder: 70, højde: 120, nationalitet: "dk" },
  { navn: "Jens Peter", alder: 80, højde: 110, nationalitet: "dk" },
  { navn: "Jens Ole", alder: 90, højde: 100, nationalitet: "dk" },
  { navn: "Jens Jørgen", alder: 100, højde: 90, nationalitet: "dk" },
];
//Test med 89 personer og 90 personer
for (let i = 0; i < 89; i++) {
  let random = Math.floor(Math.random() * values.length);
  values.push(values[random]);
}

let data = { values: values };

console.log(
  pug.renderFile(path.join(__dirname, "/views/opgave15.4.pug"), data)
);

app.get("/", (req, res) => res.render("opgave15.4.pug", data));
app.listen(8000, () => console.log("listening on port 8000"));

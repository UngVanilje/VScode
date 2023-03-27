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
];

let data = { values: values };

console.log(
  pug.renderFile(path.join(__dirname, "/views/opgave15.2.pug"), data)
);

app.get("/", (req, res) => res.render("opgave15.2.pug", data));
app.listen(8000, () => console.log("listening on port 8000"));

let express = require("express");
let app = express();
let pug = require("pug");
let path = require("path");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

let values = {
  navn: "Ole",
  alder: 10,
  venner: [
    { navn: "Ib", alder: 12 },
    { navn: "hans", alder: 11 },
  ],
};

console.log(
  pug.renderFile(path.join(__dirname, "/views/opgave15.1.pug"), values)
);

app.get("/", (req, res) => res.render("opgave15.1.pug", values));
app.listen(8000, () => console.log("listening on port 8000"));

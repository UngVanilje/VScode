let express = require("express");
let app = express();
let pug = require("pug");
let path = require("path");
let sessions = require("express-session");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

app.use(
  sessions({
    secret: "hemmelig",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 20 },
    resave: false,
  })
);
app.use(express.static(__dirname + "/filer"));
app.use(express.json());

let produkter = [
  { produktNavn: "Bad Dragon Drogo", pris: 1000, Id: 1 },
  { produktNavn: "Gewir kyskhedsbælte", pris: 2250, Id: 2 },
  { produktNavn: "Krølles krølle", pris: 399, Id: 3 },
  { produktNavn: "Allan", pris: 69420, Id: 4 },
  { produktNavn: "Ananas", pris: 50, Id: 5 },
  { produktNavn: "Gehjuice", pris: 977, Id: 6 },
  { produktNavn: "Blåbær", pris: 50, Id: 7 },
];

let data = { produkter: produkter };

app.post("/tilfoej", (request, response) => {
  const { id } = request.body;
  let kurv = request.session.kurv;
  if (kurv == undefined) {
    kurv = [];
  }
  kurv.push(id);
  request.session.kurv = kurv;
  response.status(201).send(["added"]);
});

app.get("/index", (request, response) => {
  let kurv = request.session.cart;
  if (kurv == undefined) {
    kurv = [];
  }
  let data = { produkter: produkter, kurv: kurv };
  response.render("index", data);
});

app.get("/index");
app.listen(8000, () => console.log("listening on port 8000"));

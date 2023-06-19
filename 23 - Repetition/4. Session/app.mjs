import express from "express";
import session from "express-session";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "templates"));

app.use(express.static(__dirname + "/filer"));
app.use(express.json());
app.use(session({ secret: "hemmelig", saveUninitialized: true, resave: true }));

app.get("/", function (request, response) {
  const { navn, adresse } = request.body;
  let data = { navn: navn, adresse: adresse };
  response.render("index", data);
});

app.post("/add", function (request, response) {
  const person = request.body;
  let people = [];
  if (request.session.people) {
    people = request.session.people;
  }
  people.push(person);
  request.session.people = people;
  response.status(201).send(`${people.length - 1}`);
});

app.get("/", function (request, response) {
  response.render("index", { title: "Personer", message: "Personer" });
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

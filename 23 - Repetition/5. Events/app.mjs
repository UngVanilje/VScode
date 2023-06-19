import express from 'express';
// import session from 'express-session';
import path from 'path';
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'templates'));

app.use(express.static(__dirname + "/filer"));
app.use(express.json());
// app.use(session({secret: 'hemmelig', saveUninitialized: true, cookie: { maxAge: 1000 * 60 * 20 }, resave: true}));

let people = [
    { Navn: "Ole", Telefon: 25351252 },
    { Navn: "Dole", Telefon: 25523412 },
    { Navn: "Doffen", Telefon: 25634213 },
    { Navn: "Donald", Telefon: 25674323},
    { Navn: "Dolly", Telefon: 25634234},
    { Navn: "Doffen d. 2", Telefon: 25631123 },
];

app.post('/changeNumber', function (request, response) {
    const tlf = request.body.Telefon;
    const id = request.body.id;
    for (let i = 0; i < people.length; i++) {
        if (people[i].Telefon == id) {
            people[i].Telefon = tlf;
            break;
        }
    }
    response.status(201).send(id);
});

app.get('/', function (request, response) {
  let data = { people: people };
    response.render('index', data);
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
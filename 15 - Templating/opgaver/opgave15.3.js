let express = require("express");
let app = express();
let pug = require("pug");
let path = require("path");
let url = "https://randomuser.me/api/?nat=dk&results=100 ";

async function main() {
  app.set("view engine", "pug");
  app.set("views", path.join(__dirname, "/views"));

  let data = await get(url);
  let values = { data: data };
  console.log(data);

  pug.renderFile(path.join(__dirname, "/views/opgave15.3.pug"), values);

  app.get("/", (req, res) => res.render("opgave15.3.pug", values));
  app.listen(8000, () => console.log("listening on port 8000"));
}

async function get(url) {
  const respons = await fetch(url);
  if (respons.status !== 200)
    //OK
    throw new Error(respons.status);
  return await respons.json();
}
main();

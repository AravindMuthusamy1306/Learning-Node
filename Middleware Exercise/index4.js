import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next){
  console.log(req.body);
  bandName = req.body.street + " " + req.body.pet;
  next();
}
app.use(bandNameGenerator);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is: ${bandName}</h1>
            <a href="/">Go back</a>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

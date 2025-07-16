import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("form.ejs");
});

app.post("/submit", (req, res) => {
  const now = new Date();
  const currentDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
  const currentTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  const data = {
    name1: req.body.author,
    name2: req.body.cricketer,
    name3: req.body.essay,
    date: currentDate,
    time: currentTime,
    year: now.getFullYear() 
  };

  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

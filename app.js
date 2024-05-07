var express = require("express");
var app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const Habilidades = require("./modelo.js");

const url = process.env.MONGODB_URL;

mongoose.connect('mongodb+srv://luisrocksousa1111:qnm17h34@cluster0.fhxd9cq.mongodb.net/minhashabilidades')

app.get("/", function (req, res) {
  res.send("oieeee");
});

app.get("/sobre", function (req, res) {
  res.send("sobre mim");
});

app.get("/sobre/:id", function (req, res) {
  res.send("oi " + req.params.id);
});

app.get("/sobre/:id/:conteudo", function (req, res) {
  res.send(req.params);
});

async function main() {
  try {
    await mongoose.connect(url);
    console.log("De boas");
  } catch (err) {
    console.log("Deu ruim", err.message);
  }

  const habilidades = await Habilidades.insertMany([
    {
      linguagem: "HTML e CSS",
      framework: "Bootstrap e Tailwind CSS",
      anosdeexperiencia: 2,
    },
    {
      linguagem: "JavaScript",
      framework: "React, React Native, Node",
      anosdeexperiencia: 2,
    },
    { linguagem: "SQL", anosdeexperiencia: 2 },
  ]);

  console.log(habilidades);

  await mongoose.disconnect();
}
main();

app.listen(8081, function (req, res) {
  console.log("servidor rodando na porta 8081");
});
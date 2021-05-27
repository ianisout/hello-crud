const express = require("express");
const app = express();
app.use(express.json());

const port = 3000;

const usuarioIan = {
  id: 1,
  nome: "ian",
  idade: 29,
};

const usuarios = [usuarioIan];

app.get("/usuarios", (req, res) => {
  //res.json(usuarios);
  res.send(JSON.stringify(usuarios));
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${3000}`);
});

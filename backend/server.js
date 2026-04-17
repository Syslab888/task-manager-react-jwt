require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const SECRET = process.env.JWT_SECRET;
const EMAIL = process.env.EMAIL;
const PASS = process.env.PASSWORD;

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === EMAIL && password === PASS) {
    const token = jwt.sign({ email }, SECRET, {
      expiresIn: "1h",
    });

    return res.json({ token });
  }

  return res.status(401).json({ error: "Credenciais inválidas" });
});

app.listen(3000, () => console.log("Servidor rodando"));

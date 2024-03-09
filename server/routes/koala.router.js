const express = require("express");
const koalaRouter = express.Router();

// DB CONNECTION
let koalas = [];

// GET
koalaRouter.get("/", (req, res) => {
  res.status(200).send(koalas);
});

// POST
koalaRouter.post("/", (req, res) => {
  const newKoala = req.body;
  koalas.push(newKoala);
  res.status(201).send(newKoala);
});

// PUT

// DELETE
koalaRouter.delete("/", (req, res) => {
  koalas.length = 0;
  res.sendStatus(200);
});

module.exports = koalaRouter;

const express = require("express");
const koalaRouter = express.Router();
const pg = require("pg");

const pool = new pg.Pool({
  database: "awesome_reads",
  host: "localhost",
  port: "5432",
});

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
koalaRouter.put("/:id", (req, res) => {

})

// DELETE
koalaRouter.delete("/:id", (req, res) => {
  
  res.sendStatus(200);
});

module.exports = koalaRouter;

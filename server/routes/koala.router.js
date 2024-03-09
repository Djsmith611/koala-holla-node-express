const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
let koalas = [];

// GET
koalaRouter.get('/', (req, res) => {
    res.status(200).send(koalas);
});

// POST
koalaRouter.post('/', (req, res) => {
    koalas.push(req.body);
    res.status(201);
});

// PUT


// DELETE
koalaRouter.delete('/', (req, res) => {
    koalas.length = 0;
    res.sendStatus(200);
})

module.exports = koalaRouter;
const express = require("express");
const koalaRouter = express.Router();
const pg = require("pg");

// DB CONNECTION
const pool = new pg.Pool({
  database: "koallaholla",
  host: "localhost",
  port: "5432",
});


// GET
koalaRouter.get("/", (req, res) => {
  let queryText = `
  SELECT * FROM "koalas"
  `;

  pool
    .query(queryText)
    .then((result) => {
      res.status(200).send(result.rows);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

// POST
koalaRouter.post("/", (req, res) => {
  let queryText = `
    INSERT INTO "koalas" ("name", "favoriteColor", "age", "readyToTransfer", "notes")
    VALUES ($1, $2, $3, $4, $5);
  `;

  // console.log("req.body", req.body);

  pool
    .query(queryText, [
      req.body.name,
      req.body.favoriteColor,
      req.body.age,
      req.body.readyToTransfer,
      req.body.notes
    ])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.error('Error in inserting koala:', error);
      res.sendStatus(500);
    });
});

// PUT
koalaRouter.put("/:id", (req, res) => {
  let queryText = `
    UPDATE "koalas"
    SET "readyToTransfer" = $1
    WHERE "id" = $2;
  `;

  pool
    .query(queryText, [req.body.ready, req.params.id])
    .then((result) => {
      if (result.rowCount === 0) {
        res.status(404).send('Koala not found.');
      } else {
        res.sendStatus(200);
      }
    })
    .catch((error) => {
      console.error('Error in updating koala readyToTransfer:', error);
      res.sendStatus(500);
    })
});

// DELETE
koalaRouter.delete("/:id", (req, res) => {
  let queryText = `
    DELETE FROM "koalas"
    WHERE "id" = $1;
  `;

  pool
    .query(queryText, [req.params.id])
    .then((result) => {
      if (result.rowCount === 0) {
        res.status(404).send('Koala not found.');
      } else {
        res.sendStatus(204);
      }
    })
    .catch((error) => {
      console.error('Error in deleting koala:', error);
      res.sendStatus(500);
    });
});

module.exports = koalaRouter;

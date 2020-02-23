'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.get("/groot", (req, res) => {
    if (!req.query.message) {
      res.json({
        error: `I am Groot!`
      });
    } else {
      res.json({
        received: req.query.message,
        translated: `I am Groot!`
      });
    }
  });

module.exports = app;
    
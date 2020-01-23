'use strict';

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
  });

app.listen(3000, function () {
console.log(`The application is running on port 3000.`);
});


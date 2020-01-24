'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'));

// home page
app.get('/',(req,res) => {
    res.send('welcome back, Guest!')
    //res.sendfile(__dirname + '/index.html');
});

// webshop page
app.get('/', (req, res) => { 
    // render `home.ejs`
    res.render('home', {title: 'Hello Bence' });
});

app.get('/hello',(req,res) => {
    res.send(`Hello back <br><strong>${req.query.name}!</strong>`);
});

// start expess app on port 3000
app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});
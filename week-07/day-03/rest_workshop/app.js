'use strict';


const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//DOUBLING
app.get('/doubling', (req, res) => {
    let input = req.query.input;
    let answer = {};
    if (input) {
        answer.received = input * 1;
        answer.result = input * 2;
    } else {
        answer.error = 'Please provide an input!';
    }
    res.send(answer);
});

//GREETER
app.get('/greeter', (req, res) => {
    let name = req.query.name;
    let title = req.query.title;
    let answer = {};
    if (name && title) {
        answer.welcome_message = `Oh, hi there ${name}, my dear ${title}!`;
        res.send(answer);
    } else if (!name && !title) {
        res.status(400);
        res.send({ error : 'Please provide a name and a title!' });
    } else if (!name) {
        res.status(400);
        res.send({ error : 'Please provide a name!' });
    } else if (!title) {
        res.status(400);
        res.send({ error :'Please provide a title!' });
    };

})

//appendA
app.get('/appenda/:appendable', (req, res) => {
        res.json({
            appended:`${req.params.appendable}a`
        });
});

app.listen(3000, () => {
    console.log('app is running');
});
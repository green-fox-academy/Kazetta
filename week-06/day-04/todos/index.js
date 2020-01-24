'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const todos = ['get up', 'survive', 'go back to bed'];

//set the engine to ejs
app.set('view enjine', 'ejs');
app.use(express.static('public'));

//home page
app.get('/', (req, res) => {
    res.sendfile(__dirname + '/index.html');
});

//todo page
app.get('/todo', (req, res) => {

});


//start express app on port 3000
app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});

//database
const database = {
    todos: [
        'Get up',
        'live',
        'love',
        'regret',
        'hate',
        'no regret',
        'Sleep'
    ]
};
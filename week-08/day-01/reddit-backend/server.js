'use strict';

let express = require('express');
let app = express();
require('dotenv').config()
const mysql = require('mysql');

// -- Connect to the database
const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'reddit'
});

app.use(express.static(__dirname + "/public"));

conn.connect((error) => {
    if (error) {
        console.error(`Connection is not working ${error.toString()}`);
      return null;
    }
    console.log('Server is running on port 3000')
});

app.get('/', (req,res) => {
    res.sendFile('index.html');
})

//routes
app.get('/posts', function (request, response) {
    console.log("GET request received at '/posts'");
    conn.query('SELECT * FROM posts ORDER BY id DESC;', function (err, rows){
        if(err){
            console.log("Error: " + err);
        }
        else {
            response.send(rows);
        }
    })
});

app.post('/addpost', function (request, response) {
    console.log("POST request received at /posts");
    conn.query('INSERT INTO posts (id,title,url,timestamp,score,owner,vote) VALUES (?,?,?,?,?,?,?)',
    [req.body.id, req.body.title, req.body.url, req.body.timestamp,req.body.score,req.body.owner,req.body.vote]);
    res.redirect('/');
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
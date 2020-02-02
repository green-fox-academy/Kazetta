'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rigo',
    database: 'bookstore',
});

conn.connect((err) => {
    if (err) {
        console.error('Cannot connect to the database', err);
        return;
    }
    console.log('Connection established');
});

app.get('/books', (req, res) => {
    conn.query('SELECT book_name FROM book_mast;', function (err, rows) {
        res.send(rows);
    });
})

//http://localhost:3000/monika?category=science
app.get('/monika', (req, res) => {
    let category = `${req.query.category}`;
    conn.query(
    `SELECT book_name, author.aut_name, category.cate_descrip, publisher.pub_name, book_price
    FROM book_mast
    INNER JOIN category
    ON category.cate_id = book_mast.cate_id
    INNER JOIN publisher
    ON publisher.pub_id = book_mast.pub_id
    INNER JOIN author
    ON author.aut_id = book_mast.aut_id
    WHERE category.cate_descrip = ${JSON.stringify(category)};`,
        (err, rows) => {
            res.json(rows);
        });
})



app.listen(PORT);
'use strict';

//express
let express = require('express');
let app = express();
require('dotenv').config();
const mysql = require('mysql');

//connect the database
const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'foxplayer'
});

//playlists
app.get('/', function (request, response) {
    response.send('Hello World');
});

app.get('/playlists', function (request, response) {
    console.log("get request received at /playlists");
});

app.post('/playlists', function (request, response) {
    console.log("POST request received at /playlists")
});

app.delete('/playlists/:id', function (request, response) {
    console.log("DElete request received at /playlists/:id");
});

//Playlist tracks
app.get('/playlist-tracks/', function (request, response) {
    console.log("get request received at /playlist-tracks/");
});

app.get('/playlist-tracks/:playlist_id', function (request, response) {
    console.log("get request received at /playlist-tracks/:playlist_id");
});

app.post('/playlist-tracks/:playlist_id', function (request, response) {
    console.log("post request received at /playlist-tracks/:playlist_id");
});

app.delete('/playlist-tracks/:playlist_id/:track_id', function (request, response) {
    console.log("Delete request received at /playlist-tracks/:playlist_id/:track_id");
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
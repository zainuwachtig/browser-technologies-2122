const express = require('express');
const fs = require('fs')

const app = express();

const hostname = '127.0.0.1';
const port = 5505;

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Template engine
app.set('view engine', 'ejs');
const ejs = require('ejs');
app.use(express.static('static'))

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/winkelmandje', (req, res) => {
    res.render('winkelmandje');
    console.log(req['body']['kleur-options'], req['body']['maat-options'], req['body']['text-options'])
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

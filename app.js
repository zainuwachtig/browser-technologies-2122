const express = require('express');
const fs = require('fs')

const app = express();

const hostname = '10.0.1.18';
const port = process.env.PORT || 5000;

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

app.get('/winkelmandje', (req, res) => {
    fs.readFile('voorhees.json', 'utf8', function (err, data) {
        if (err) throw err;
        let info = JSON.parse(data);
        console.log(info)
  
        res.render('winkelmandje', {
            info
        });
    });
});

app.post('/winkelmandje', (req, res) => {
    userInput = JSON.stringify({ kleur: req['body']['kleur-options'], maat: req['body']['maat-options'], tekst: req['body']['text-options'] })

    fs.writeFile('voorhees.json', userInput, 'utf8', cb => {
		console.log(userInput)
	});

    res.redirect('winkelmandje')
});

app.post('/winkelmandjeLegen', (req, res) => {
    userInput = JSON.parse(fs.readFileSync('voorhees.json'))
    res.redirect('winkelmandje')
})

app.get('/afrekenen', (req, res) => {
    res.render('afrekenen');
});

app.get('/bevestiging', (req, res) => {
    res.render('bevestiging');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

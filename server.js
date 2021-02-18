const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '/views')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug')

// Routes
app.get('/', (req, res) => { 
    res.render('home');
})

app.get('/home', (req, res) => {
    res.render('home');
})

app.get('/books', (req, res) => {
    res.render('books');
})

app.get('/houses', (req, res) => {
    res.render('houses');
})

app.get('/sorting-ceremony', (req, res) => {
    res.render('sorting');
})

app.get('/three-brothers', (req, res) => {
    res.render('story');
})

app.listen(PORT, () => {
    console.log('Running at Port 5000');
});
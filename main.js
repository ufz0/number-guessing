const express = require('express');
const path = require('path');
var favicon = require('serve-favicon')


const app = express();

app.use(express.static('public'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

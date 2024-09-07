const express = require('express');
const path = require('path');  // To help with the file path

const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

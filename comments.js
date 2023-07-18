// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Serve static files
app.use(express.static('public'));

// Route for comments
app.post('/comments', (req, res) => {
    console.log(req.body);
    res.send('Thank you for your comment!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
const express = require('Express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// How to read the data, you'll likely need this in your route file
const fs = require("fs");
var data;
fs.readFile("data.json", "utf8", function (err, datajson) {
    data = JSON.parse(datajson);
});

// Route to logic
// const movies = require('./routes/movies');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Route from url to movies above
// app.use('/movies', movies);


app.get('/', (req, res) => {
    res.send('Found the server');
});

app.listen(port, () => {
    console.log('Server started');
});
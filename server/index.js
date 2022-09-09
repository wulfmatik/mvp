const express = require('express');
const moma = require('../helpers/moma.js');
const db = require('../database/index.js');
let app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/images', (req, res) => {

});

app.get('/images', (req, res) => {

});

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
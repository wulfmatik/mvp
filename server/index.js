const express = require('express');
const unsplash = require('../helpers/unsplash.js');
const db = require('../database/index.js');
let app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/photos', (req, res) => {
  // console.log(req)
  // unsplash.getPhotosQuery(req.body)
  //   .then((response) => {
  //     db.save(response)
  //     .then(res.send('images saved'));
  //   })
});

app.get('/photos', (req, res) => {
  return db.Photo.find({}).exec((err, photos) => {
    if (err) {
      console.log(err);
    } else {
      res.send(photos);
    }
  })
});

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
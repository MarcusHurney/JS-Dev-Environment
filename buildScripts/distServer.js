import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

// enable g-zip compression in express
// this will compress the size of bundle.js
app.use(compression());

// serve static files from the dist folder
app.use(express.static('dist'));

// server html from dist instead of src
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
  res.json([
    {"id": 1, "firstName": "Bobby", "lastName": "Baskette", "email": "bobby@mccallie.org"}
  ]);
})

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});

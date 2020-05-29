const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.static(__dirname + '/../public'));

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', '/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
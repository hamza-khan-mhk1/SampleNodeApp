var express = require('express');
const path = require('path');
var app = express();

app.use(express.static(__dirname+'/assets'));
app.get('/', function (req, res) {
  res.sendFile(__dirname+'/index.html');
  //res.sendFile(path.join(__dirname+'/index.html'));
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
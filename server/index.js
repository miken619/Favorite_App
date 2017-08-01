const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
const router = require('./router');

app.use(parser.urlencoded({ extended: true }))
   .use(parser.json())
   .use(express.static(path.join(__dirname, '../static')));

app.use('/api', router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, err => {
  if (err) {
    console.log('Server failed to start');
  } else {
    console.log('Server successfully started');
  }

});
// module
const express = require('express');
const app = express();

// routing
const home = require('./routes/home');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', home);

module.exports = app;
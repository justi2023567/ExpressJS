const express = require("express");
const app = express();

app.use('/', require('./index.js'));
app.use('/about', require('./index.js'));
app.use('/ethan', require('./index.js'));
app.use('/', require('./index.js'));
app.use('/about', require('./index.js'));

app.listen('3000');

const express = require("express");
const indexRouter = require('./index.js');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use('/', require('./index.js'));
app.use('/about', require('./index.js'));
app.use('/ethan', require('./index.js'));
app.use('/tyler', require('./index.js'));
app.use('/justin', require('./index.js'));
app.use('/feedback', require('./index.js'));
app.use("/static", express.static('./static/'));

app.listen('3001');

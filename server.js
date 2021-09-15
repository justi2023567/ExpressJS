const express = require("express");
const app = express();

app.use('/', require('./index.js'));
app.use('/about', require('./index.js'));
app.use('/ethan', require('./index.js'));
app.use('/tyler', require('./index.js'));
app.use('/justin', require('./index.js'));
app.use("/static", express.static('./static/'));

app.listen('3000');

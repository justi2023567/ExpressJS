var app = require('express');
var router = app.Router();

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/HTML/index.html");
});

router.get('/about', function(req, res) {
    res.sendFile(__dirname + "/HTML/about.html");
});

router.get('/ethan', function(req, res) {
    res.sendFile(__dirname + "/HTML/ethan.html");
});

router.get('/tyler', function(req, res) {
    res.sendFile(__dirname + "/HTML/tyler.html");
});

router.get('/justin', function(req, res) {
    res.sendFile(__dirname + "/HTML/justin.html");
});

module.exports = router;

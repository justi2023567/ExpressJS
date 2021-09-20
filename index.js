var app = require('express');
var router = app.Router();
var ethan = {name:'Ethan Shimmel',

}
var tyler = {name:'Tyler Siegmund',

}

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/HTML/index.html");
});

router.get('/about', function(req, res) {
    res.sendFile(__dirname + "/HTML/about.html");
});

router.get('/ethan', function(req, res) {
    res.render("base", {ethan: ethan});
});

router.get('/tyler', function(req, res) {
    res.render("base", {tyler: tyler});
});

router.get('/justin', function(req, res) {
    res.sendFile(__dirname + "/HTML/justin.html");
});

module.exports = router;

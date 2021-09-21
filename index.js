var app = require('express');
var router = app.Router();
const uspara = require('./parvar.js');

var names = {ethan: "Ethan Shimmel", tyler: "Tyler Siegmund", justin: "Justin Anderson"}

router.get("/", (req, res) => {
  res.render("index");
});

router.get('/about', function(req, res) {
    res.render("about");
});

router.get('/ethan', function(req, res) {
    res.render("ethan", {
      name: names.ethan,
      paragraph: uspara.ethan
    });
});

router.get('/tyler', function(req, res) {
    res.render("ethan", {
      name: names.tyler,
      paragraph: uspara.tyler
    });
});

router.get('/justin', function(req, res) {
    res.render("justin", {
      name: name.justin,
      paragraph: uspara.justin
    });
});

module.exports = router;

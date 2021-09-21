var app = require('express');
var router = app.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get('/about', function(req, res) {
    res.render("about");
});

router.get('/ethan', function(req, res) {
    res.render("ethan");
});

router.get('/tyler', function(req, res) {
    res.render("tyler");
});

router.get('/justin', function(req, res) {
    res.render("justin");
});

module.exports = router;

var router = require('express').Router();

router.get("/", (req, res) => {
  res.sendFile("/index.html");
});

router.get('/about', function(req, res) {
    res.sendFle('login');
});

module.exports = router;

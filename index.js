var router = require('express').Router();

router.get("/", (req, res) => {
  res.sendFile("C:/Users/eshimmel/OneDrive - York County School of Technology/New/ExpressJS/index.html");
});

router.get('/about', function(req, res) {
    res.sendFile("C:/Users/eshimmel/OneDrive - York County School of Technology/New/ExpressJS/about.html");
});

router.get('/about', function(req, res) {
    res.sendFile("C:/Users/eshimmel/OneDrive - York County School of Technology/New/ExpressJS/ethan.html");
});

router.get('/about', function(req, res) {
    res.sendFile("C:/Users/eshimmel/OneDrive - York County School of Technology/New/ExpressJS/tyler.html");
});

router.get('/about', function(req, res) {
    res.sendFile("C:/Users/eshimmel/OneDrive - York County School of Technology/New/ExpressJS/justin.html");
});

module.exports = router;

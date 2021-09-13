var router = require('express').Router();

router.get("/", (req, res) => {
  res.sendFile("C:/Users/eshimmel/OneDrive - York County School of Technology/New/ExpressJS/HTML/index.html");
});

router.get('/about', function(req, res) {
    res.sendFile("C:/Users/eshimmel/OneDrive - York County School of Technology/New/ExpressJS/HTML/about.html");
});

router.get('/about', function(req, res) {
    res.sendFile("C:/Users/eshimmel/OneDrive - York County School of Technology/New/ExpressJS/HTML/ethan.html");
});

router.get('/about', function(req, res) {
    res.sendFile("C:/Users/eshimmel/OneDrive - York County School of Technology/New/ExpressJS/HTML/tyler.html");
});

router.get('/about', function(req, res) {
    res.sendFile("C:/Users/eshimmel/OneDrive - York County School of Technology/New/ExpressJS/HTML/justin.html");
});

module.exports = router;

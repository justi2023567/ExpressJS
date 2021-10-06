var app = require('express');
const fs = require('fs');
var router = app.Router()
const uspara = require('./parvar.js');

var names = {ethan: "Ethan Shimmel", tyler: "Tyler Siegmund", justin: "Justin Anderson"}

router.get("/", function(req, res) {
  res.render("home");
});

router.get('/about', function(req, res) {
    res.render("about");
});

router.get('/ethan', function(req, res) {
      res.render("mem", {
      name: names.ethan,
      paragraph: uspara.ethan,
    });
});

router.get('/tyler', function(req, res) {
      res.render("mem", {
      name: names.tyler,
      paragraph: uspara.tyler,
    });
});

router.get('/justin', function(req, res) {
    res.render("mem", {
      name: names.justin,
      paragraph: uspara.justin,
    });
});

router.get('/feedback', function(req, res) {
    var feedBack = {
      name: req.param("name"),
      adjective: req.param("adjective")
  }
    if (feedBack.name && feedBack.adjective) {
      var rawcomments = fs.readFileSync('./static/feedback.json');
      comments = JSON.parse(rawcomments);
      comments.push(feedBack);
      var comments = JSON.stringify(comments);
      fs.writeFile('./static/feedback.json', comments, 'utf8', function() {
        console.log('Wrote to file');
      });
      res.render("feedback", {
        paragraph: feedBack.name + ' ' + feedBack.adjective
    })
  } else if (feedBack.adjective) {
      res.render("feedback", {
        paragraph: "Fill out name"
      })
    } else if (feedBack.name) {
        res.render("feedback", {
          paragraph: "Fill out adjective"
      })
    } else {
      res.render("feedback", {
        paragraph: "Fill out both name and adjective"
    })
    }
})

module.exports = router;

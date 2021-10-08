var app = require('express');
const fs = require('fs');
var router = app.Router();

var rawdata = fs.readFileSync('./static/profiles.json');
readProfiles = JSON.parse(rawdata);
readEthan = readProfiles.ethan
readTyler = readProfiles.tyler
readJustin = readProfiles.justin

router.get("/", function(req, res) {
  res.render("home");
});

router.get('/about', function(req, res) {
    res.render("about");
});

router.get('/ethan', function(req, res) {
      res.render("mem", {
      name: readEthan.name,
      paragraph: readEthan.bio,
    });
});

router.get('/tyler', function(req, res) {
      res.render("mem", {
      name: readTyler.name,
      paragraph: readTyler.bio,
    });
});

router.get('/justin', function(req, res) {
    res.render("mem", {
      name: readJustin.name,
      paragraph: readJustin.bio,
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
        paragraph: `You submitted ${feedBack.name} and ${feedBack.adjective}`
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

const express = require('express');
const fs = require('fs');
var app = express()
var router = require('express').Router();

router.use(express.urlencoded({ extended: true}));

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
      name: readProfiles.ethan.name,
      paragraph: readProfiles.ethan.bio,
    });
});

router.get('/tyler', function(req, res) {
      res.render("mem", {
      name: readProfiles.tyler.name,
      paragraph: readProfiles.tyler.bio,
    });
});

router.get('/justin', function(req, res) {
    res.render("mem", {
      name: readJustin = readProfiles.justin.name,
      paragraph: readJustin = readProfiles.justin.bio,
    });
});

router.get('/feedback', function(req, res) {
  res.sendFile(__dirname + '/views/getfeedback.html')
})

router.post('/feedback', function(req, res) {
    const user = req.body.user
    const adjective = req.body.adjective
    var feedBack = {
      name: user,
      adjective: adjective
    }
    if (feedBack.name && feedBack.adjective) {
      var rawcomments = fs.readFileSync('./static/feedback.json');
      feed = JSON.parse(rawcomments);
      console.log(feed);
      comments = feed.comments
      comments.push(feedBack.name + ' ' + feedBack.adjective);
      var feed = {
        comments: comments
      }
      var feed = JSON.stringify(feed);

      fs.writeFile('./static/feedback.json', feed, 'utf8', function() {
        console.log('Wrote to file');
        console.log(feed)
      });
      res.render("feedback", {
        paragraph: `Thank you ${feedBack.name} for submitting ${feedBack.adjective}`
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

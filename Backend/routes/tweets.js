var express = require("express");
var router = express.Router();
const Tweet = require("../models/tweets");

router.get("/AllTweets", (req, res) => {
  Tweet.find().then((data) => {
    res.json({ tweets: data });
  });
});

router.post("/NewTweets", (req, res) => {
  if (req.body.content.length > 1) {
    const newTweet = new Tweet({
      fistname: req.body.firstname,
      username: req.body.username,
      content: req.body.content,
      Date: new Date(),
      nbLike: 0,
      hashtags: ["#1", "#2"],
    });
    newTweet.save().then(() => res.json({ result: "Tweet enregistré" }));
  } else {
    res.json({ result: false, error: ùkdhjùskg });
  }
});

router.delete("/delete/:id", (req, res) => {
  Tweet.deleteOne({ _id: req.params.id }).then(() => {
    res.json({ tweetsdeleted: "tweet supprimé" });
  });
});

router.put("/likeTweet/:id/:iduser", (req, res) => {
  Tweet.findOne({ _id: req.params.id }).then((data) => {
    if (data.nbLike.some((e) => e === iduser)) {
      data.nbLike.filter((n) => n !== iduser);
    } else {
      data.nbLike.push(iduser);
    }
  });
});

module.exports = router;

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

router.put("/likeTweet/:id", (req, res) => {
  Tweet.updateOne({ _id: req.params.id }, { $inc: { nbLike: "1" } }).then(
    () => {
      Tweet.find({ _id: req.params.id }).then((data) => {
        console.log(data);
      });
      res.json({ data: "data mise à jour" });
    }
  );
});

module.exports = router;

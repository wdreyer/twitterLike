const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  firstname: String,
  username: String,
  date: Date,
  content: String,
  nbLike: Array,
  hashtags: Array,
});

const Tweet = mongoose.model("tweets", tweetSchema);

module.exports = Tweet;

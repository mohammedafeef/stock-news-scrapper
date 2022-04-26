const mongoose = require("mongoose");

const NewsSchema = mongoose.Schema({
  title: String,
  content: String,
  time: String,
  imageUrl: String,
});

module.exports = mongoose.model("News", NewsSchema);

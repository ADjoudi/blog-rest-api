const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: { type: String, minLength: 3, required: true },
  content: { type: String, minLength: 3, required: true },
  author: { type: mongoose.Types.ObjectId, ref: "Author", required: true },
  comments: [{ type: mongoose.Types.ObjectId, ref: "Comment" }],
  published: { type: Boolean, default: false },
});

module.exports = mongoose.model("Post", schema);

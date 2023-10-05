const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  content: { type: String, required: true, maxLength: 300 },
  author: { type: mongoose.Types.ObjectId, required: true },
});

module.exports = mongoose.model("Comment", schema);

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  posts: { type: mongoose.Types.Array },
});

schema.virtual("full_name").get(function () {
  return `${this.first_name} ${this.last_name}`;
});

module.exports = mongoose.model("Author", schema);

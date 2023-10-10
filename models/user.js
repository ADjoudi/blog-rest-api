const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  posts: { type: mongoose.Types.Array },
});

const User = mongoose.model("User", schema);

schema.virtual("full_name").get(function () {
  return `${this.first_name} ${this.last_name}`;
});

module.exports = User;

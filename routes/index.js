const express = require("express");
const router = express.Router();
const Post = require("../models/post");

//get all posts (sorted by latest)
router.get("/posts", async function (req, res, next) {
  try {
    const posts = await Post.find().exec();
    res.json({ posts: posts });
  } catch (error) {
    res.sendStatus(500);
  }
});
//get a post and its comments (suggest sign up or login to make a comment)
router.get("/posts/:post", async function (req, res, next) {
  try {
    const post = await Post.findById(req.params.post)
      .populate("Author")
      .populate("Comment")
      .exec();
    res.json({ post: post });
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;

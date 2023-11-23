const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const Comment = require("../models/comment");

//get all posts (sorted by latest)
router.get("/posts", async function (req, res, next) {
  try {
    const posts = await Post.find().exec();
    res.json(posts);
  } catch (error) {
    res.sendStatus(500);
  }
});
//get a post and its comments (suggest sign up or login to make a comment)
router.get("/posts/:post", async function (req, res, next) {
  try {
    console.log("post id:  ", req.params.post);
    const post = await Post.findById(req.params.post)
      .populate("Comment")
      .exec();
    console.log(post);
    res.json({ post: post });
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;

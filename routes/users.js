const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Post = require("../models/post");

router.get("/user", function (req, res, next) {
  const user = {
    id: req.user._id,
    name: req.user.first_name + " " + req.user.last_name,
  };
  res.json(user);
});

//get all posts by user
router.get("/:user/posts", async function (req, res, next) {
  const posts = await Post.find({ author: req.params.user });
  res.json({ posts: posts });
});
//get all comments in user's posts
router.get("/:user/posts", function (req, res, next) {
  res.send("respond with a resource");
});
//get all bookmarks by user
router.get("/:user/posts", function (req, res, next) {
  res.send("respond with a resource");
});
//get all published posts by user
router.get("/:user/posts/published", function (req, res, next) {
  res.send("respond with a resource");
});
//get all unpublished posts by user
router.get("/:user/posts/unpublished", function (req, res, next) {
  res.send("respond with a resource");
});
//make a new post
router.post("/:user/posts", function (req, res, next) {
  res.send("respond with a resource");
});
//preview post
router.get("/:user/posts/:post", function (req, res, next) {
  res.send("respond with a resource");
});
//edit post
router.put("/:user/posts/:post", function (req, res, next) {
  res.send("respond with a resource");
});
//publish post
router.put("/:user/posts/:post/publish", function (req, res, next) {
  res.send("respond with a resource");
});
//delete post
router.delete("/:user/posts/:post", function (req, res, next) {
  res.send("respond with a resource");
});

//make a new comment
router.post("/:user/posts/:post/comments", function (req, res, next) {
  res.send("respond with a resource");
});
//edit a comment
router.put("/:user/posts/:post/comments/:comment", function (req, res, next) {
  res.send("respond with a resource");
});
//delete a comment
router.delete(
  "/:user/posts/:post/comments/:comment",
  function (req, res, next) {
    res.send("respond with a resource");
  }
);

module.exports = router;

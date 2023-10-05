var express = require("express");
var router = express.Router();

//get all posts by user
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

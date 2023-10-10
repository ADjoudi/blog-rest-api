const express = require("express");
const router = express.Router();

//get all posts (sorted by latest)
router.get("/posts", function (req, res, next) {});
//get a post and its comments (suggest sign up or login to make a comment)
router.get("/posts/:post", function (req, res, next) {});

module.exports = router;

const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { body, validationResult } = require("express-validator");
const local = require("../authentication/local");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/sign-up", [
  body("username").trim().escape(),
  body("password").trim().escape(),
  body("firstName").trim().escape(),
  body("lastName").trim().escape(),
  async function (req, res, next) {
    const errors = validationResult(req);
    const user = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      password: req.body.password,
    };

    if (!errors.isEmpty()) {
      user.errors = errors;
      res.json(user);
      return;
    }
    const users = await User.find({ username: req.body.username });
    if (users.length) {
      user.errors = { message: "Username Already exists" };
      res.json(user);
      return;
    }
    try {
      bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        if (err) {
          user.errors = err;
          res.json(user);
          return;
        }
        user.password = hashedPassword;
        const newUser = new User(user);
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, process.env.SECRET, {
          expiresIn: "1h",
        });
        res.json({ token });
      });
    } catch (err) {
      next(err);
    }
  },
]);

router.post(
  "/login",
  local.authenticate("local", { session: false }),
  function (req, res, next) {
    const token = jwt.sign({ id: req.user._id }, process.env.SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
    return;
  }
);

module.exports = router;

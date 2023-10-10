const express = require("express");
const router = express.Router();

router.post("/sign-up", [
  body("username").trim().escape(),
  body("password").trim().escape(),
  body("firstName").trim().escape(),
  body("lastName").trim().escape(),
  async function (req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.json({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        password: req.body.password,
        errors: errors,
      });
    }
    const users = await User.find({ username: req.body.username });
    if (users.length)
      return res.json({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        password: req.body.password,
        errors: { message: "Username Already exists" },
      });

    try {
      bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        if (err)
          return res.json({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            password: req.body.password,
            errors: errors,
          });
        const user = new User({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          username: req.body.username,
          password: hashedPassword,
        });
        await user.save();
        const token = jwt.sign({ id: user._id }, process.env.SECRET, {
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
    return res.json({ token });
  }
);

module.exports = router;

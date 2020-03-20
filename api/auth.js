const express = require("express");
const router = express.Router();
const config = require("config");
const bcrypt = require("bcrypt");

// Item model
const User = require("../modal/User");

//login a user

router.post("/", (req, res) => {
  const { email, password } = req.body;

  //validation for email & password
  if (!email || !password) {
    return res.status(400).json({ msg: "please enter all fields " });
  }

  //check existing user
  User.findOne({ email }).then(user => {
    console.log(email, password);
    if (!user) {
      console.log(user);
      return res.status(400).json({ msg: "User doesn't exist" });
    }

    // validate password
    bcrypt.compare(password, user.password, function(err, isMatch) {
      if (isMatch) {
        jwt.sign(
          { id: user.id },
          config.get("jwtSecret"),
          { expiresIn: 100000 },
          (err, token) => {
            if (err) throw err;

            res.json({
              token,
              user: {
                id: user.id,
                name: user.name,
                email: user.email
              }
            });
          }
        );
      } else {
        return res.status(400).json({ msg: "password is incorrect" });
      }
    });
  });
});

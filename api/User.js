const express = require("express");

const router = express.Router();
const config = require("config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middelware/auth");

// Item model
const User = require("../modal/User");

// register a user
router.post("/", (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  //validation for email & password
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "please enter all fields " });
  }

  //check existing user
  User.findOne({ email }).then(user => {
    if (user) return res.status(400).json({ msg: "User already exist" });

    const newUser = new User({
      name,
      email,
      password
    });

    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
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
        });
      });
    });
  });
});

router.get("/login", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user));
});

module.exports = router;

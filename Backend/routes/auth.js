const router = require("express").Router();
const User = require("../models/User");

const CryptoJs = require("crypto-js");

const Jwt = require("jsonwebtoken");

//register

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASS_KEY
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("user does not exist");
    const hashpass = CryptoJs.AES.decrypt(user.password, process.env.PASS_KEY);

    const oldpassword = hashpass.toString(CryptoJs.enc.Utf8);

    oldpassword !== req.body.password &&
      res.status(401).json("user does not exist");

    const accesToken = Jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWTKEY,
      { expiresIn: "5d" }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accesToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
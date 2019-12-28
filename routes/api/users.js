const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require("../../models/User");

router.post("/", async (req, res) => {
    const { name, email, password } = req.body;

    //validate
    if (!name || !email || !password) {
        return res.status(400).json({ msg: "Please enter all fields" });
    }

    //Check for existing user

    const user = await User.findOne({ email });

    if (user) {
        return res.status(400).json({ msg: "User already exists" });
    }

    const newUser = new User({
        name,
        email,
        password
    });

    //Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                res.json({
                    user: {
                        id: user._id,
                        name: user.name,
                        email: user.email
                    }
                });
            });
        });
    });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

const User = require("../../models/User");

//Create a new user
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
                //Create Token

                const secret = config.get("jwtSecret")
                    ? config.get("jwtSecret")
                    : process.env.jwtSecret;

                jwt.sign(
                    { id: user.id },
                    secret,
                    { expiresIn: 3600 },
                    (err, token) => {
                        if (err) throw err;
                        res.json({
                            token,
                            user: {
                                id: user._id,
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

module.exports = router;

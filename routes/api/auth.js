const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

const User = require("../../models/User");

router.post("/", async (req, res) => {
    const { email, password } = req.body;

    //validate
    if (!email || !password) {
        return res.status(400).json({ msg: "Please enter all fields" });
    }

    //Check for existing user
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).json({ msg: "User doesn't exists" });
    }

    //Validate password
    const { isMatch } = bcrypt
        .compare(password, user.password)
        .then(isMatch => {
            if (!isMatch) {
                return res.status(400).json({ msg: "Invalid Credentials" });
            }

            jwt.sign(
                { id: user.id },
                config.get("jwtSecret"),
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

router.get("/user", auth, async (req, res) => {
    const user = await User.findById(req.user.id).select("-password");

    res.json(user);
});

module.exports = router;
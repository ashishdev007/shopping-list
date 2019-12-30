const config = require("config");
const jwt = require("jsonwebtoken");

auth = (req, res, next) => {
    const token = req.header("x-auth-token");

    if (!token) {
        res.status(401).json({ msg: "No token, authorization denied" });
        res.end();
    } else {
        try {
            //Verify token
            const decoded = jwt.verify(token, config.get("jwtSecret"));

            //Add user from payload
            req.user = decoded;

            res.end();
        } catch (e) {
            console.log(e);
            res.status(400).json({ msg: "Token isn't valid" });
        }
    }
};

module.exports = auth;

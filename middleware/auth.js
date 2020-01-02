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
            const secret = process.env.jwtSecret || config.get("jwtSecret");
            // const secret = config.get("jwtSecret")
            //     ? config.get("jwtSecret")
            //     : process.env.jwtSecret;
            const decoded = jwt.verify(token, secret);

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

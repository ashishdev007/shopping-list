const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");

    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header(
            "Access-Control-Allow-Methods",
            "GET, PUT, POST, PATCH, DELETE"
        );
        return res.status(200).json({});
    }

    next();
});

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to Mongo
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to database!"))
    .catch(err => console.log(err));

//Routes
app.use("/api/items", require("./routes/api/items"));
app.use("/api/users", require("./routes/api/users"));

const port = process.env.PORT || 1500;

app.listen(port, () => console.log("Server started on port " + port));

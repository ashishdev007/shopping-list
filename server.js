const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log("Connected to database!"))
    .catch(err => console.log(err));

//Routes
app.use("/api/items", items);

const port = process.env.PORT || 3500;

app.listen(port, () => console.log("Server started on port " + port));

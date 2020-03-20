const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const path = require("path");

//body parser
app.use(bodyParser.json());

// Db config
const db = config.get("mongoURI");

//connect to mongo

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("mongo is connected"))
  .catch(err => console.log(err));

//deploy
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

//use routers
app.use("/api/user", require("./api/User"));
//app.use("/api/auth", require("./api/auth"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is is started on port ${port}`));

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const port = process.env.PORT || 5005;

const app = express();

// global middleware
app.use([
  cors(),
  morgan("dev"),
  express.json(),
  bodyParser.json(),
  express.urlencoded({ extended: true }),
]);

app.get("/", (req,res) => {
  res.send("Hello World");
});


app.listen(port, () => {
  console.log(`your app listening on port ${port}`);
});
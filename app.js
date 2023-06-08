///jshint  esversion:6
const express = require("express ");
const bodyParser = require("bodyParser");

const app = express();

app.get("/", function() {
  res.send("Hello");

});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});

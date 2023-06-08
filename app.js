///jshint  esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use("view engine", "ejs");
app.get("/", function(req, res) {
var today = new Date();
var day = "";
if (today.getDay() === 6 || today.getDay() === 0) {
  res.render("list", {kindOFDay: day})
  day = "weekday";
} else {
  res.sendFile(__dirname + "/index.html");
  day = "weekend"
}


});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});

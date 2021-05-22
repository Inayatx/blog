//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "lorem ipsum";
const aboutContent = "lorem";
const contactContent = "ipsum";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("home", {
  startingContent: homeStartingContent
  });
});







app.listen(3000, function(){
  console.log("Server started on port 3000.");
});

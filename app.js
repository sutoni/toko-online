var express = require("express");
var path = require("path");

//initial app
var app = express();

//view engine setup
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

//setup public folder
app.use(express.static(path.join(__dirname,"public")));


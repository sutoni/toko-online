var express = require("express");
var path = require("path");

//initial app
var app = express();
var mongoose = require("mongoose");
var config = require("./config/database");

//connect to database
mongoose.connect(config.database);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function(){
    console.log("Sudah Connect ke Mongodb");
})


//view engine setup
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

//setup public folder
app.use(express.static(path.join(__dirname,"public")));

//Set routes
var pages = require("./routes/pages.js");
var adminPages = require("./routes/admin_pages.js");

//Redirect
app.use("/", pages);
app.use("/dashboard", adminPages);

//Setup server
var port = 3000;
app.listen(port, function(){
    console.log("Server running on port" + port);
});
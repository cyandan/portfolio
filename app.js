// PACKAGE REQUIREMENTS
var express = require("express");
    
// APP CONFIG
var app = express();
app.use(express.static(__dirname + "/public"));

// ROUTE CONFIG
var routes  = require("./routes/routes.js");
app.use(routes);

// REQUEST LISTENER
app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("Server started.");
});
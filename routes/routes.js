// PACKAGE REQUIREMENTS
var express = require("express");
    
// ROUTER CONFIG
var router  = express.Router();
    
// ROUTES
router.get("/", function(req, res){
    res.render("index.ejs");
});

router.get("/company", function(req, res){
    res.render("company.ejs");
});

router.get("/survey", function(req, res){
    res.render("survey.ejs");
});

router.get("/technical", function(req, res){
    res.render("technical.ejs");
});

router.get("*", function(req, res){
    res.render("landing.ejs");
});
    
// EXPORT ROUTES
module.exports = router;
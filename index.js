/*Cookies are simple, 
small files/data that are sent to client with a
 server request and stored on the client side. Every 
 time the user loads the website back,
  this cookie is sent with the request. 
  This helps us keep track of the user’s actions.
  
  pm install --save cookie-parser
  
  */

var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");
var session = require("express-session");
app.use(session({ secret: "A101" }));
app.use(cookieParser());
app.get("/", function(req, res) {
  res.cookie("emailId", "chauhan@gmail.com").send("cookie set");
  //console.log(document.cookie);
});
/*
//This cookie also expires after 360000 ms from the time it is set.
res.cookie(name, 'value', {maxAge: 360000});*/

app.get("/clear", function(req, res) {
  res.clearCookie("email");
  res.send("cookie email cleared");
});

app.get("/pageView", function(req, res) {
  if (req.session.page_views) {
    req.session.page_views++;
    res.send("You visited this page " + req.session.page_views + " times");
  } else {
    req.session.page_views = 1;
    res.send("Welcome to this page for the first time!");
  }
});

app.listen(3000);

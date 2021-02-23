//jshint esversion:6

const express = require('express');

const app = express();

app.get("/", function(request, response){
    response.send("<p> Lorem Ipsum </p>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: angela@gmail.com");
});

app.get("/about", function(req, res){       res.send("Name: Hans");
});

app.get("/hobbies", function(req, res){
    res.send("hatdog hatdog");
})

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});
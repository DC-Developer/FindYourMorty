// basically their will only be one function that contains the app.get function that will route the user to the html files. it will contain one function that will
//have a parameter to pass in the url 

const express = require("express");
const path = require("path");


var url = "";

var person = [];

app = express();

function apiRoute(app, __dirname, theMorties){
    
    app.post("/api/friends", function(req, res){
       
        var newPerson = req.body; 
        
        console.log("new person: "+ JSON.stringify(newPerson));
        res.json(newPerson);

        person.push(JSON.stringify(newPerson));
        console.log(person);
    });

    app.get("/api/friends", function(req, res){

        return res.json(theMorties);

    });

}






module.exports = apiRoute; 
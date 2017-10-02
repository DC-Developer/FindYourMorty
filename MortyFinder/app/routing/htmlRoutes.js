// basically their will only be one function that contains the app.get function that will route the user to the html files. it will contain one function that will
//have a parameter to pass in the url 

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

var url = "";


app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function router(URL){
    
    app.get(URL, function(req, res){
        
            res.sendFile(path.join(__dirname,URL+".html"));
        });

}

module.exports = router; 
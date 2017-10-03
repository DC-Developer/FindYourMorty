// basically their will only be one function that contains the app.get function that will route the user to the html files. it will contain one function that will
//have a parameter to pass in the url 

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const router = express.Router();

var url = "";

var person = {};


app = express();

router.use(bodyParser.urlencoded({ extended: false }));//used only in apiRoutes because its handling the json objects
router.use(bodyParser.json());

router.post("/api/new", function(req, res){
    var newPerson = req.body; 
    console.log(newPerson);

    person.push(newPerson);
    res.json(newPerson);
    next();

});

router.get("/api/list", function(req,res){
    console.log(person);
    return res.json(person);

});



module.exports = router; 
const express = require('express')
const router = express.Router();
const bodyParser = require("body-parser");
const path = require("path");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    var url = req.url; 
    console.log("url: "+ url);
    console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function (req, res) {
    res.sendFile("home.html", {root: (__dirname, "MortyFinder/app/public")});
});//working route

router.get('/survey', function (req, res) {
    res.sendFile("survey.html", {root: (__dirname, "MortyFinder/app/public")});
});//working route

module.exports = router;
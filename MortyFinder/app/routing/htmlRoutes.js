const express = require('express')
const router = express.Router();
const path = require("path");



// define the home page route
router.get('/', function (req, res) {
    res.sendFile("home.html", {root: (__dirname, "MortyFinder/app/public")});//have to extend the link
});//working route

router.get('/survey', function (req, res) {
    res.sendFile("survey.html", {root: (__dirname, "MortyFinder/app/public")});
});//working route

module.exports = router;
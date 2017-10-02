// make sure to create functions for each routing file that will be exported and called in the main server.js file 
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const htmlRoute = require("./MortyFinder/app/routing/htmlRoutes");
const runServer = require("./MortyFinder/app/routing/runServer");
const apiRoutes = require("./MortyFinder/app/routing/apiRoutes");

const app = express();
var PORT = 3000;


runServer(app, PORT);
//app.use("/", apiRoutes);
app.use("/", apiRoutes);
app.use("/survey", apiRoutes);

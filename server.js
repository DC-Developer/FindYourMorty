// make sure to create functions for each routing file that will be exported and called in the main server.js file 
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const htmlRoutes = require("./MortyFinder/app/routing/htmlRoutes");
const runServer = require("./MortyFinder/app/routing/runServer");
const apiRoutes = require("./MortyFinder/app/routing/apiRoutes");

const app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));//used only in apiRoutes because its handling the json objects
app.use(bodyParser.json());

runServer(app, PORT);
//app.use("/", apiRoutes);
app.use("/", htmlRoutes);
app.use("/survey", htmlRoutes);
apiRoutes(app, __dirname);
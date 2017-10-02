const express = require("express");
const app = express();


function runServer(express, PORT){

    express.listen(PORT,function(){
        console.log("App listening on PORT " + PORT);
    });

}


module.exports = runServer;
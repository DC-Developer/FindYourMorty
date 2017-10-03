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
        
        console.log("new person: "+ newPerson.scores[0]);
        res.json(newPerson);

        //person.push(JSON.stringify(newPerson.scores[1]));
        //console.log(person);

        newPerson.scores.split("");
        console.log(newPerson.scores);

        //make a variable to hold in differenes between array indexes
        var differences = [];
        var diffTotal = [];
        var count = 0;
        var logDiff = [];

        //console.log("the morties scores: ",theMorties[0].scores);
        while(count < 3){
            for(i=0; i < 8 ; i++){
                
                    differences = Math.abs(newPerson.scores[i+1] - theMorties[count].scores[i]);
                    console.log("differences: ",differences);

                    diffTotal.push(differences); 

                    var diffOBJ = {
                        name: theMorties[count].name,
                        diff: diffTotal
                    }
                    logDiff.push(diffOBJ); 

                }
                count ++;

        }

        console.log(logDiff);
      
        





    });

    app.get("/api/friends", function(req, res){

        return res.json(theMorties);

    });

}






module.exports = apiRoute; 
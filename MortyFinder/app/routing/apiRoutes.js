// basically their will only be one function that contains the app.get function that will route the user to the html files. it will contain one function that will
//have a parameter to pass in the url 

const express = require("express");
const path = require("path");


var url = "";

var newPerson = [];

app = express();

function apiRoute(app, __dirname, theMorties){
    
    app.post("/api/friends", function(req, res){
        
        newPerson = req.body; 
        
        //console.log("new person: "+ newPerson.scores[0]);
        res.json(newPerson);

        //person.push(JSON.stringify(newPerson.scores[1]));
        //console.log(person);

        //newPerson.scores.split("','");
        console.log("New person scores: ", newPerson.scores);
        

  
        //make a variable to hold in differenes between array indexes
        var person = [];
        var differences = [];
        var diffTotal = [];
        var diffScore = [];
        var logDiff = [];

        //going to loop through newPerson and only store in the int values

        for(i=0; i < newPerson.length; i++){
            if(newPerson.score[i] != NaN){
                person.push(newPerson.score[i]);
            }
        }

        

        //console.log("the morties scores: ",theMorties[0].scores);
        for(count =0; count <=   3; count ++){
            for(i=0; i < 8 ; i++){
                    

                   
                   
                    //console.log("person score: ", newPerson.scores[i]);
                    //console.log("the morties: ", theMorties[count].scores[i]);
                    
                    //console.log("differences: ",differences);

                   

                    var diffOBJ = {
                        name: theMorties[count].name,
                        diff: diffTotal,
                        score: diffScore
                    }
                    logDiff.push(diffOBJ); 

                }
            }
        
            
        console.log(logDiff);
      
        





    });

    app.get("/api/friends", function(req, res){

        return res.json(theMorties);

    });

}






module.exports = apiRoute; 
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
        var holdDiff = 0;
        //going to loop through newPerson and only store in the int values. cant get the commas out of the array

        for(i=0; i < newPerson.scores.length; i++){
            if(i % 2 == 0){
                person.push(newPerson.scores[i]);
            }
        }
        
        console.log("new array: ", person);

      
        //console.log("the morties scores: ",theMorties[0].scores);
        for(count =0; count <=   3; count ++){
            for(i=0; i < 8 ; i++){
                    //get the difference for each question
                    differences = Math.abs(person[i] - theMorties[count].scores[i]);
                    //push the differences to diffTotal
                    diffTotal.push(differences); 
                }//end of nested for-loop
                console.log("diff total: ", diffTotal);
                //create a for loop that will loop through the diffTotal and add each value 
                for(i=0; i < diffTotal.length; i++){
                    
                    holdDiff += diffTotal[i];

                }
                console.log("diff added: ", holdDiff);
                //push holdDiff to diffScore and diffOBJ to logDiff
                diffScore.push(holdDiff);
                //declare a diff object that stores in the name, diffTotal and diffScore
                var diffOBJ = {
                    name: theMorties[count].name,
                    diff: diffTotal,
                    score: diffScore
                } 
                logDiff.push(diffOBJ);  

                diffScore = [];
                holdDiff = 0;
                diffTotal = [];

            }//end of first for-loop
            //find the score with the least difference
            var bestMatchScore = Math.min(logDiff[0].score, logDiff[1].score, logDiff[2].score, logDiff[3].score);
            var bestMatch = [];
            //loop through logDiff to find out the corresponding scores person
           for(i=0; i<logDiff.length; i++){
                if(bestMatchScore == logDiff[i].score){
                    bestMatch = logDiff[i];
                }
           }

            console.log("Best match: ", bestMatch.name);
            console.log("Best match score: ", bestMatch.score);
           //loop through theMorties till the name is found, then return the matching index
           for(i=0; i<theMorties.length; i++){
                if(bestMatch.name == theMorties[i].name){
                    return res.json(theMorties[i]);

                }

           }

    });

    app.get("/api/friends", function(req, res){

        return res.json(theMorties);

    });

}






module.exports = apiRoute; 
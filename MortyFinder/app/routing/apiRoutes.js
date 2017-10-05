//BEWARE the below code is inefficient and superfluous. my apologies, but I was extremely tired and this is what I thought of

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
        //going to loop through newPerson and only store in the int values. since theres an int stored in the first index, all
        //commas will be odd,so that's why I used mod by an even number.

        for(i=0; i < newPerson.scores.length; i++){
            if(i % 2 == 0){
                person.push(newPerson.scores[i]);
            }
        }

        for(count =0; count <=   3; count ++){
            for(i=0; i < 8 ; i++){
                    //get the difference for each question
                    differences = Math.abs(person[i] - theMorties[count].scores[i]);
                    //push the differences to diffTotal
                    diffTotal.push(differences); 
                }//end of nested for-loop
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
            //need to make this drier
            var bestMatchScore = Math.min(logDiff[0].score, logDiff[1].score, logDiff[2].score, logDiff[3].score);
            var bestMatch = [];
            //loop through logDiff to find out the corresponding scores person
           for(i=0; i<logDiff.length; i++){
                if(bestMatchScore == logDiff[i].score){
                    bestMatch = logDiff[i];
                }
           }

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
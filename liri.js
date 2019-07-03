//npm install inquirer
var inquirer = require("inquirer");
//read and set any environmental variables with dotenv package
require("dotenv").config();
//import js file and store in variable 
var keys = require("./keys.js")
//access spotify keys information
var spotify = new Spotify(keys.spotify)




inquirer
    .prompt([
        {
            type: "list",
            message: "Welcome to LIRI-Bot!" + "\n" + "Which command do you want to run?",
            name: "command",
            choices: ['concert-this', 'spotify-this-song', 'movie-this', 'do-what-it-says']
        },
        {
            type: "confirm",
            message: "Are you sure?",
            name: "confirm",
            default: true
        }
    ]).then(function(inquirerResponse) {
            //if inquirer response confirms, will display this
            if (inquirerResponse.confirm) {
                console.log("OK!")
     }
else{
    console.log("Ok, let's try that again")
}
});

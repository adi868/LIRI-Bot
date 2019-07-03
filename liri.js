//read and set any environmental variables with dotenv package
//requires .env file
require("dotenv").config();

//npm install inquirer
var inquirer = require("inquirer");
//install axios
var axios = require("axios");
//install moment
var moment = require("moment")
//install spotify API
var Spotify= require("node-spotify-api");
var fs = require("fs")
//install chalk
const chalk = require('chalk');

//import js file and store in variable. require keys file for API keys
var keys = require("./keys.js")

//access Spotify keys information
var spotify = new Spotify(keys.spotify)


inquirer
    .prompt([
        {
            type: "list",
            message: (chalk.blue("Welcome to LIRI-Bot!")) + "\n" + "Which command do you want to run?",
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

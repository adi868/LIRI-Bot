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
var Spotify = require("node-spotify-api");
var fs = require("fs")
//install chalk
const chalk = require('chalk');

//import js file and store in variable. require keys file for API keys
var keys = require("./keys.js")

//access Spotify keys information
var spotify = new Spotify(keys.spotify)


inquirer
    .prompt([{
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
    ]).then(function (inquirerResponse, err) {
        //if inquirer response confirms, will display this
        if (inquirerResponse.confirm && inquirerResponse.command == "concert-this") {
            console.log("OK!")
            inquirer
                .prompt([{
                    type: "input",
                    message: "Search for the artist you would like:",
                    name: "concert"
                }])
                .then(function (concertResponse, err) {
                    //makes string into array then replaces commas in between array with spaces. checks and cleans for extra spaces
                    var answerC = concertResponse.concert.split(" ").join(" ").toLowerCase();
                    //add function for searching API 
                    console.log(answerC)
                })
        } else if (inquirerResponse.confirm && inquirerResponse.command == "spotify-this-song") {
            inquirer
                .prompt([{
                    type: "input",
                    message: "Search for the song you would like:",
                    name: "song"
                }])
                .then(function (songResponse, err) {
                    //makes string into array then replaces commas in between array with spaces. checks and cleans for extra spaces
                    var answerS = songResponse.song.split(" ").join(" ").toLowerCase();
                    //add function for searching API 
                    console.log(answerS)
                })

        } else if (inquirerResponse.confirm && inquirerResponse.command == "movie-this") {
            inquirer
                .prompt([{
                    type: "input",
                    message: "Search for the movie you would like:",
                    name: "movie"
                }])
                .then(function (movieResponse, err) {
                    //makes string into array then replaces commas in between array with spaces. checks and cleans for extra spaces
                    var answerM = movieResponse.movie.split(" ").join(" ").toLowerCase();
                    //add function for searching API 
                    console.log(answerM)
                })
        } else if (inquirerResponse.confirm && inquirerResponse.command == "do-what-it-says") {
            doWhatItSays();
        } else {
            console.log("Ok, let's try that again")
        }
    });
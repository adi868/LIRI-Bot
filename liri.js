//read and set any environmental variables with dotenv package
//requires .env file
require("dotenv").config();

var inquirer = require("inquirer");
var axios = require("axios");
var moment = require("moment");
var spotifyAPI = require("node-spotify-api");
var fs = require("fs")
const chalk = require('chalk');
//import js file and store in variable. require keys file for API keys
var keys = require("./keys.js");
var spotify = new spotifyAPI(keys.spotify)


inquirer
    .prompt([{
            type: "list",
            message: (chalk.blue("Welcome to LIRI-Bot!")) + "\n" + "Which command do you want to run?",
            name: "command",
            choices: ['concert-this', 'spotify-this-song', 'movie-this', 'do-what-it-says']
        },
        {
            type: "confirm",
            message: (chalk.green("Are you sure?")),
            name: "confirm",
            default: true
        }
    ]).then(function (inquirerResponse) {
        //if inquirer response confirms, will display this
        if (inquirerResponse.confirm && inquirerResponse.command == "concert-this") {
            console.log("OK!")
            inquirer
                .prompt([{
                    type: "input",
                    message: "Search for the artist you would like:",
                    name: "artist"
                }])
                .then(function (concertResponse) {
                    //makes string into array then replaces commas in between array with spaces. checks and cleans for extra spaces
                    var answerC = concertResponse.artist.split(" ").join(" ").toLowerCase();
                    console.log(answerC)
                    //function for searching API 
                    goConcert(answerC);
                })
        } else if (inquirerResponse.confirm && inquirerResponse.command == "spotify-this-song") {
            inquirer
                .prompt([{
                    type: "input",
                    message: "Search for the song you would like:",
                    name: "song"
                }])
                .then(function (songResponse) {
                    //makes string into array then replaces commas in between array with spaces. checks and cleans for extra spaces
                    var answerS = songResponse.song.split(" ").join(" ").toLowerCase();
                    console.log(answerS)
                    //function for searching API 
                    goSong(answerS);
                })

        } else if (inquirerResponse.confirm && inquirerResponse.command == "movie-this") {
            inquirer
                .prompt([{
                    type: "input",
                    message: "Search for the movie you would like:",
                    name: "movie"
                }])
                .then(function (movieResponse) {
                    //makes string into array then replaces commas in between array with spaces. checks and cleans for extra spaces
                    var answerM = movieResponse.movie.split(" ").join(" ").toLowerCase();
                    console.log(answerM)
                    //function for searching API 
                    goMovie(answerM);
                })
        } else if (inquirerResponse.confirm && inquirerResponse.command == "do-what-it-says") {
            doWhatItSays();
        } else {
            console.log("Ok, let's try that again" + "\n")
        }
    });

//create the concert constructor. uses bands in town to find the concert details
function goConcert(answerC) {
    //creates space between text
    var divider = "\n------------------------------------------------------------\n\n";
    if (answerM === "") {
        console.log("No artist was provided!")
    };
    //takes the name of the artist and searches the bands in town API
    axios.get("https://rest.bandsintown.com/artists/" + answerC + "/events?app_id=codingbootcamp").then(function (response) {
            //puts the response data into a variable
            var jsonData = response.data;
            var formatMoment = moment(jsonData.datetime).format("MM/DD/YYYY");
            var concertData = [
                "Venue Name: " + jsonData.venue.name,
                "Venue Location: " + jsonData.venue.city,
                "Date of the Event: " + formatMoment
            ].join("\n\n");
            console.log(divider);
            console.log(concertData + "\n");
        })
        .catch(function (error) {
            return console.log(error);
        });
}

function goSong(answerS) {
    //creates space between text
    var divider = "\n------------------------------------------------------------\n\n";
    if (answerS === "") {
        answerS = "The Sign Ace of Base"
    };
    spotify.search({
            type: "track",
            query: answerS
        }, function (error, response) {
            if (error)
                return console.log(error);

            var songData = [
                "Artist: " + response.tracks.items[0].artists[0].name,
                "Song Name: " + response.tracks.items[0].name,
                "Preview of link: " + response.tracks.items[0].external_urls.spotify,
                "Album: " + response.tracks.items[0].album.name
            ].join("\n\n");
            console.log(divider);
            console.log(songData + "\n");
        })
}

function goMovie(answerM) {
    if (answerM === "") {
        console.log("If you haven't watched 'Mr. Nobody', then you should: http://www.imdb.com/title/tt0485947/" + "\n");
        console.log("Its on Netflix!" + "\n")
    };
    var divider = "\n------------------------------------------------------------\n\n";
    axios.get("http://www.omdbapi.com/?t=" + answerM + "&y=&plot=short&apikey=trilogy")
        .then(function (response) {
            var movieData = [
                "Title: " + response.data.Title,
                "Year: " + response.data.Year,
                "IMDB Rating: " + response.data.imdbRating,
                "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value,
                "Country Produced: " + response.data.Country,
                "Language: " + response.data.Language,
                "Plot Description: " + response.data.Plot,
                "Actors: " + response.data.Actors
            ].join("\n\n");
            console.log(divider);
            console.log(movieData + "\n");
        })
        .catch(function (error) {
            return console.log(error);
        });
}

//reads the command typed on random.txt
var doWhatItSays = function () {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        var dataArray = data.split(",");
        switch (dataArray[0]) {
            case "spotify-this-song":
                goSong(dataArray[1]);
                break;
            case "concert-this":
                goConcert(dataArray[1]);
                break;
            case "movie-this":
                goMovie(dataArray[1]);
                break;
            default:
                console.log("File not working");
        }
    });
};
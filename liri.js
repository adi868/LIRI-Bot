//read and set any environmental variables with dotenv package
require("dotenv").config();
//import js file and store in variable 
var keys = require("./keys.js");
//access spotify keys information
var spotify = new Spotify(keys.spotify);
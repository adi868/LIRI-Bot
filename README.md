# LIRI-Bot

This application is LIRI-Bot! LIRI is a Language Interpretation and Recognition Interface. It is a command line node app that takes in parameters and gives back data. Interact with LIRI for up-to-date information from Spotify, Bands in Town, and OMDB.

## How does it work?
Type in a search query and specification, and LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.
LIRI can search from one of the following commands:
concert-this
spotify-this-song
movie-this
do-what-it-says

node liri.js concert-this <artist/band name here>

This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

Name of the venue
Venue location
Date of the Event 

node liri.js spotify-this-song '<song name here>'

This will show the following information about the song in your terminal/bash window:

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from

node liri.js movie-this '<movie name here>'
  Title of the movie.
  Year the movie came out.
  IMDB Rating of the movie.
  Rotten Tomatoes Rating of the movie.
  Country where the movie was produced.
  Language of the movie.
  Plot of the movie.
  Actors in the movie.

node liri.js do-what-it-says
Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.


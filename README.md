# LIRI-Bot

## Overview 
Welcome to LIRI-Bot! LIRI-Bot is a Language Interpretation and Recognition Interface. It is a command line node app that takes in parameters and gives back data. Interact with LIRI for up-to-date information on songs, concerts, and movies.

### How Does It Work?
Type in a search query and command prompt, and LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies. Enter `node liri.js` in the terminal, then specify which command you would like. LIRI can search from one of the following commands:
* concert-this
* spotify-this-song
* movie-this
* do-what-it-says

**Choice Options:**
1. **If You Enter: `node liri.js concert-this <artist/band name here>`**

LIRI will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

* Name of the venue
* Venue location
* Date of the Event 

![Concert-This](https://media.giphy.com/media/fSej2InAF7975XmMD3/giphy.gif)

2. **If You Enter: `node liri.js spotify-this-song <song name here>`**

LIRI will show the following information about the song in your terminal/bash window:

* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from

If no song is entered, it will default to 'The Sign'.

![Spotify-This-Song](https://media.giphy.com/media/Yo25sJ6xFS9zk2olqR/giphy.gif)

3. **If You Enter: `node liri.js movie-this <movie name here>`**
  
LIRI will show the following information about the movie in your terminal/bash window:

  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.

If no movie title is entered, it will default to Mr. Nobody.

![Movie-This](https://media.giphy.com/media/VInAruJAibtkXWgfAL/giphy.gif)

4. **If You Enter: `node liri.js <do-what-it-says>`**

LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

![Do-What-It-Says](https://media.giphy.com/media/L3WJPNLRIoPHRZecoz/giphy.gif)

### Installation:
1. Clone the GitHub repository `LIRI-Bot` to your computer.
2. LIRI relies on Node.js. To retrieve the data that will power this app, it needs to send requests using the axios package to the Bands in Town, Spotify and OMDB APIs. These node packages are necessary for installation:
* Node-Spotify-API
* Axios
* Moment
* DotEnv
3. To install these packages, type in `npm` followed by the name of the requested package.
4. From there, you can follow the command prompts listed above.

#### Technologies Used:
* JavaScript
* Moment.js
* Node.js
* JSON
* Axios
* Spotify API
* OMDB API
* Bands In Town API

---
© 2019 Adina Cianciotto adi868

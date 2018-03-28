# liri-node-app
## Overview
In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.
## Dependencies
* dotenv
* twitter
* node-spotify-api
* request
* moment
## Installation
### Install Locally
```
git clone https://github.com/maddiedeming/liri-node-app.git
npm install
```
### .env File
1. Create a new file and save as ".env" in the root directory.
2. Copy and paste the following into the .env file:

    SPOTIFY_ID=[Your Spotify ID]

    SPOTIFY_SECRET=[Your Spotify Secret]

    TWITTER_CONSUMER_KEY=[Your Twitter Consumer Key]

    TWITTER_CONSUMER_SECRET=[Your Twitter Consumer Secret]

    TWITTER_ACCESS_TOKEN_KEY=[Your Twitter Access Token Key]

    TWITTER_ACCESS_TOKEN_SECRET=[Your Twitter Access Token Secret]

3. Edit all of the bracket values above to coordinate with your Spotify and Twitter Application API information.
## Commands
### my-tweets
```
node liri.js my-tweets
```
#### This will show your last 20 tweets and when they were created:
![demo](https://dr5mo5s7lqrtc.cloudfront.net/items/0e3F25333s3Q1a3m3c1r/Screen%20Recording%202018-02-17%20at%2009.41.00%20PM.gif?X-CloudApp-Visitor-Id=2969220)
### spotify-this-song
```
node liri.js spotify-this-song '<song name>'
```
#### This will show the information for the song provided:
![demo](https://dr5mo5s7lqrtc.cloudfront.net/items/0g0q103b3P3N100o0E0V/Screen%20Recording%202018-02-17%20at%2009.41.58%20PM.gif?X-CloudApp-Visitor-Id=2969220)
### movie-this
```
node liri.js movie-this '<movie name>'
```
#### This will show the information for the movie provided:
![demo](https://dr5mo5s7lqrtc.cloudfront.net/items/393t3C2107162o21211Y/Screen%20Recording%202018-02-17%20at%2009.43.02%20PM.gif?X-CloudApp-Visitor-Id=2969220)
### do-what-it-says
```
node liri.js do-what-it-says
```
#### This will show the information for the action and target provided in the `random.txt` file:
![demo](https://dr5mo5s7lqrtc.cloudfront.net/items/0f2U04382M3F3P32302r/Screen%20Recording%202018-02-17%20at%2009.44.00%20PM.gif?X-CloudApp-Visitor-Id=2969220)
## Requirements
### my-tweets
- [x] This will show the following information about your Twitter Feed in your terminal/bash window:
  - [x] Last 20 Tweets
  - [x] Creation Date
### spotify-this-song
- [x] This will show the following information about the Song in your terminal/bash window:
  - [x] Artist(s)
  - [x] Song Name
  - [x] Preview Link
  - [x] Album
- [x] If no Song is provided then your program will default to "The Sign" by Ace of Base.
### movie-this
- [x] This will show the following information about the Movie in your terminal/bash window:
  - [x] Movie Title
  - [x] Year
  - [x] IMDB Rating
  - [x] Rotten Tomatoes Rating
  - [x] Countr
  - [x] Language
  - [x] Plot
  - [x] Actors
- [x] If no Movie is provided then your program will default to "Mr. Nobody."
### do-what-it-says
- [x] This will run the following information (inside of `random.txt`) in your terminal/bash window:
  - spotify-this-song
  - "I Want it That Way"
### BONUS
- [x] Output all of the data to a text file called `log.txt`.
- [x] Do not overwrite your file each time you run a command.

# liri-node-app
## Install
```
git clone https://github.com/maddiedeming/liri-node-app.git
npm install 
```
### Dependencies
* dotenv
* twitter
* node-spotify-api
* request
* moment
## Commands
```
node liri.js [command]
```
### This will show your last 20 tweets and when they were created:
```
node liri.js my-tweets
```
![demo](https://dr5mo5s7lqrtc.cloudfront.net/items/0e3F25333s3Q1a3m3c1r/Screen%20Recording%202018-02-17%20at%2009.41.00%20PM.gif?X-CloudApp-Visitor-Id=2969220)
### This will show the following information about the song:
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from
##### If no song is provided then the program will default to "The Sign" by Ace of Base.
```
node liri.js spotify-this-song [song name]
```
![demo](https://dr5mo5s7lqrtc.cloudfront.net/items/0g0q103b3P3N100o0E0V/Screen%20Recording%202018-02-17%20at%2009.41.58%20PM.gif?X-CloudApp-Visitor-Id=2969220)
### This will show the following information about the movie:
   * Title of the movie
   * Year the movie came out
   * IMDB Rating of the movie
   * Rotten Tomatoes Rating of the movie
   * Country where the movie was produced
   * Language of the movie
   * Plot of the movie
   * Actors in the movie
##### If no movie is provided then the program will default to "Mr. Nobody."
```
node liri.js movie-this [movie name]
```
![demo](https://dr5mo5s7lqrtc.cloudfront.net/items/393t3C2107162o21211Y/Screen%20Recording%202018-02-17%20at%2009.43.02%20PM.gif?X-CloudApp-Visitor-Id=2969220)
### This will take the text inside of random.txt and then use it to call one of LIRI's commands:
```
node liri.js do-what-it-says
```
![demo](https://dr5mo5s7lqrtc.cloudfront.net/items/0f2U04382M3F3P32302r/Screen%20Recording%202018-02-17%20at%2009.44.00%20PM.gif?X-CloudApp-Visitor-Id=2969220)

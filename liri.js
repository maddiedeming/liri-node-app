// Global
require("dotenv").config();
var keys = require("./keys.js");
var moment = require("moment");
var fs = require("fs");
var action = process.argv[2];
var log = "";
determineAction(action);

function logData(log){
    fs.appendFile("log.txt","\r\n" + moment().format("YYYY-MM-DD HH:mm:ss.SSS") + "\r\n\t" + log,function(){});
};

// node liri.js "my-tweets"
function myTweets(){
    var Twitter = require("twitter");
    var client = new Twitter(keys.twitter);
    client.get('statuses/user_timeline',function(error,tweets){
        if(error){
            log = "Twitter Response: " + JSON.stringify(error)
            logData(log);
        }
        else{
            logData("Twitter Response: ");
            for(var i =0; i < tweets.length; i++){
                console.log(tweets[i].created_at);
                console.log(tweets[i].text);
                log = "Tweet " + i + ": " + JSON.stringify(tweets[i]);
                logData(log);
            }
        }
    });
};
// node liri.js "spotify-this-song" "song-name-here"
function spotifyThisSong(song){
    var Spotify = require('node-spotify-api');
    var spotify = new Spotify(keys.spotify);
    spotify.search({type:'track',query:song,limit:1},function(error,response){
        if(error){
            log = "Spotify Response: " + JSON.stringify(error)
            logData(log);
        }
        else{
            console.log(response.tracks.items[0].artists[0].name);
            console.log(response.tracks.items[0].name);
            console.log(response.tracks.items[0].preview_url);
            console.log(response.tracks.items[0].album.name);
            log = "Spotify Response: " + JSON.stringify(response);
            logData(log);
        }
    });
};
// node liri.js "movie-this"
function movieThis(movie){
    var request = require('request');
    var url = "http://www.omdbapi.com/?apikey=trilogy&type=movie&t=" + movie
    request(url,function(error,body){
        if(error){
            log = "OMDB Response: " + JSON.stringify(error);
            logData(log);
        }
        else{
            var result = JSON.parse(body);
            console.log(result.Title);
            console.log(result.Year);
            console.log(result.imdbRating);
            for(var i = 0; i < result.Ratings.length; i++){
                if(result.Ratings[i].Source === "Rotten Tomatoes"){
                    console.log(result.Ratings[i].Value);
                }
            }
            console.log(result.Country);
            console.log(result.Language);
            console.log(result.Plot);
            console.log(result.Actors);
            log = "OMDB Response: " + JSON.stringify(body);
            logData(log);
        }
    });
};
// Determines Which Function To Call
function determineAction(action){
    log = "Action: " + action;
    logData(log);
    if(action === "my-tweets"){
        myTweets();
    }
    else if(action === "spotify-this-song"){
        var song = process.argv[3];
        if(!song){
            song = "Ace of Base The Sign";
        }
        spotifyThisSong(song);
    }
    else if(action === "movie-this"){
        var movie = process.argv[3];
        if(!movie){
            movie = "Mr. Nobody";
        }
        movieThis(movie);
    }
    // node liri.js "do-what-it-says"
    else if(action === "do-what-it-says"){
        fs.readFile("random.txt","utf8",function(error,data){
            var randomText = data.split(",");
            for(var i = 0; i < randomText.length; i++){
                if(i === 0){
                    action = randomText[i];
                }
                else if(i === 1){
                    var parameter = randomText[i];
                }
            }
            if(action === "my-tweets"){
                myTweets();
            }
            else if(action === "spotify-this-song"){
                song = parameter
                spotifyThisSong(song);
            }
            else if(action === "movie-this"){
                movie = parameter
                movieThis(movie);
            }
        });
    }
    else{
        logData("Action does not exist.");
        console.log("error");
    }
};
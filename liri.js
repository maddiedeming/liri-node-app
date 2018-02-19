// Global
require("dotenv").config();
var keys = require("./keys.js");
var fs = require('fs');
var moment = require("moment");
var action = process.argv[2];
// Set Parameter Value as One String After Action is Selected
var parameter = "";
for(var i = 0; i < process.argv.length; i++){
    if(i > 2){
        parameter = parameter + process.argv[i] + " ";
    }
}
// Resets Log File
fs.stat("log.txt",function(err,stats){
    var createdLogFileTime = moment(stats.birthtime );
    var currentTime = moment();
    var difference = currentTime.diff(createdLogFileTime,"minutes");
    if(stats.size > 100000 || stats.size === 0){
        var insert = moment().format("YYYY-MM-DD HH:mm:ss.SSS")+"\t\t"+"Info"+"\t\t"+"Log File Created";
        fs.writeFile("log.txt",insert,function(err){});
    }
        // Determines Action Value
        init(action,parameter);
});
// Populates Log File
function logData(log,type){
    function replacer(key, value) {
        if (typeof value === 'number') {
            value = 2 * value;
        }
        else if (typeof value === 'string') {
            return undefined;
        }
        return value;
    }
    var header = "\r\n\t" + moment().format("YYYY-MM-DD HH:mm:ss.SSS") + "\t\t" + type;
    if(typeof log === "object"){
        log = "\r\n\t" + JSON.stringify(log,null,'\t');
    }
    else{
        header = header + "\t\t" + log;
        log = "";       
    }
    fs.appendFile("log.txt",header + log,function(){});
};
// node liri.js my-tweets
function myTweets(){
    var Twitter = require("twitter");
    var client = new Twitter(keys.twitter);
    var result = client.get('statuses/user_timeline',function(error,tweets){
        if(error){
            logData(error,"Error");
        }
        else{
            for(var i = 0; i < tweets.length; i++){
                var twitterResponse = "Tweet[" + parseInt(i+1) +"]: " + tweets[i].text + " (" + tweets[i].created_at + ")";
                logData(tweets[0],"Web Service Response");
                console.log(twitterResponse);
            }
        }
    });
};
// node liri.js spotify-this-song <song-name-here>
function spotifyThisSong(song){
    if(!song){
        song = "Ace of Base The Sign";
    }
    var Spotify = require('node-spotify-api');
    var client = new Spotify(keys.spotify);
    return client.search({type:'track',query:song,limit:1},function(error,response){
        if(error){
            logData(error,"Error");
        }
        else{
            var spotifyResponse = "Artist: " + response.tracks.items[0].artists[0].name + "\r\n" + "Song: " + response.tracks.items[0].name + "\r\n" + "Preview: " + response.tracks.items[0].preview_url + "\r\n" + "Album: " + response.tracks.items[0].album.name;
            logData(response,"Web Service Response");
            console.log(spotifyResponse);
        }
    });
};
// node liri.js movie-this <movie-name-here>
function movieThis(movie){
    if(!movie){
        movie = "Mr. Nobody";
    }
    var request = require('request');
    var url = "http://www.omdbapi.com/?apikey=trilogy&type=movie&t=" + movie;
    request(url,function(error,response,body){
        if(error){
            logData(error,"Error");
        }
        else{
            var result = JSON.parse(body);
            for(var i = 0; i < result.Ratings.length; i++){
                if(result.Ratings[i].Source === "Rotten Tomatoes"){
                    var rtRating = result.Ratings[i].Value;
                }
            }
            var omdbResponse = "Title: " + result.Title + "\r\n" + "Year: " + result.Year + "\r\n" + "imdb Rating: " + result.imdbRating + "\r\n" + "RottenTomatoes Rating: " + rtRating + "\r\n" + "Country: " + result.Country + "\r\n" + "Language: " + result.Language + "\r\n" + "Plot: " + result.Plot + "\r\n" + "Actors: " + result.Actors;
            logData(result,"Web Service Response");
            console.log(omdbResponse);
        }
    });
};
// Initializes
function init(action,parameter){
    logData("Action: " + action,"Info");
    switch(action){
        case "my-tweets":
            myTweets();
            break;
        case "spotify-this-song":
            spotifyThisSong(parameter);  
            break;
        case "movie-this":
            movieThis(parameter);
            break;
        case "do-what-it-says":
            fs.readFile("random.txt","utf8",function(error,data){
                data = data.split(",");
                action = data[0];
                parameter = data[1];
                init(action,parameter);
            });
            break;
        default:
            logData("The action '" + action + "' does not exist.","Error");
            console.log("I'm sorry, Liri does not understand what you're trying to say. Please try again.");   
    }
}
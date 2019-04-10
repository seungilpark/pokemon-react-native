var express = require("express"); // for setting up a server
var bodyParser = require("body-parser");
var Pusher = require("pusher"); // for connecting to Pusher

var app = express(); 
app.use(bodyParser.json()); // parse request body to JSON format
app.use(bodyParser.urlencoded({ extended: false })); // allow parsing of URL encoded request body

require("dotenv").config(); // load environment variables from .env file

var users = [];

var pusher = new Pusher({
    appId: "743416",
    key: "34e87c06e0771c12f0e4",
    secret: "a0199cdb184919e47c0c",
    cluster: "us3"
});

app.get("/", function(req, res) {
    // for testing if the server is running
    res.send("all green...");
});

app.post("/pusher/auth", function(req, res) {
    var username = req.body.username;
    var pokemon_ids = req.body.pokemon_ids;
    var team_member_ids = req.body.team_member_ids;

    let user_index = users.findIndex(item => {
        return item.username == username;
    });

    if (user_index === -1) {
        users.push({
        username: username,
        pokemon_ids: pokemon_ids,
        team_member_ids: team_member_ids
        });

        if (users.length == 2) {
        var player_one_index = 0;
        var player_one = users.splice(player_one_index, 1)[0];

        var player_two_index = 0; // because there will only be one item left in the users array after the splice
        var player_two = users.splice(player_two_index, 1)[0];

        // trigger a message to each players. the message contains the IDs of the Pokemon of their opponent
        pusher.trigger("private-user-" + player_one.username, "opponent-found", {
            player_one: player_one,
            player_two: player_two
        });

        setTimeout(() => {
            pusher.trigger(
            "private-user-" + player_two.username,
            "opponent-found",
            {
                player_one: player_one,
                player_two: player_two
            }
            );
        }, 3000);     
        }

        // authenticate the user
        var socketId = req.body.socket_id;
        var channel = req.body.channel_name;
        var auth = pusher.authenticate(socketId, channel);

        res.send(auth); // send a response back
    } else {
        res.status(400);
    }
});

var port = process.env.PORT || 3000;
// app.listen(port);

var server = app.listen(3000, function (){
    console.log("Calling app.listen's callback function.");
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
  });
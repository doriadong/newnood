/**
 * Created with JetBrains WebStorm.
 * User: mac
 * Date: 13-5-21
 * Time: PM1:36
 * To change this template use File | Settings | File Templates.
 */
var fs = require('fs');
var chatPage = fs.readFileSync('./views/chat.html');

var http = require('http'),
    io = require('socket.io');

var redis = require("redis"),
    client1 = redis.createClient(), msg_count = 0,
    client2 = redis.createClient();

redis.debug_mode = false;



var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(chatPage);
}).listen(8080);  

var socketio = io.listen(server);

socketio.sockets.on('connection', function(socket){
    socket.on('message', function(msg){
        console.log('socket-----------------------get: ' + msg);
        client2.publish('chat', msg);
    });
});


client1.on("subscribe", function (channel, count) {
    //console.log("client1 subscribed to " + channel + ", " + count + " total subscriptions");
});

client1.on("message", function (channel, message) {
    console.log("client1 channel get it ---------" + channel + ": " + message);
    socketio.sockets.emit('message', message);
});

client1.on("ready", function () {
    // if you need auth, do it here
    client1.subscribe('chat');
});

client2.on("ready", function () {
    // if you need auth, do it here
});



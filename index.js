

// var app = require('express')();
var server = require('http').Server();
var io = require('socket.io')(server);
var Redis = require('ioredis');
var redis = new Redis();


redis.subscribe('test-channel');

redis.on('message', function(channel, message){
    message = JSON.parse(message);
    console.log(channel);
    io.emit(channel + ':' + message.event, message.data); //test-channel:EventoTeste
});




server.listen(3000);
//
//
// app.get('/', function(request, response){
// 	response.sendFile(__dirname + '/index.html');
// });
//
io.on('connection', function(socket){
	console.log('connection made dickhead');

});

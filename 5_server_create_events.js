// All libraries are in the installation repository of NodeJS
// You can charge an other library by using NPM command


// Use libraries 'http' and 'events'
var http = require('http');
var events = require('events');

// Create the web server
var server = http.createServer();

// Create a Event Emitter 
var EventEmitter = events.EventEmitter;
var play = new EventEmitter();

// Assign an action on invoking the 'gameover' Event
play.on('gameover', function(message){
    console.log(message);
});

// Listenning the 'gameover' Event
play.emit('gameover', 'Game Over !');

server.listen(9000);



/* See results in the console

Documentation available at :
https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/les-evenements-18
*/
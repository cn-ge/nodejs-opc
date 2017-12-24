// All libraries are in the installation repository of NodeJS
// You can charge an other library by using NPM command


// Use library 'http'  
var http = require('http'); 

// Create a basic web server using an anonymous fonction 
// with parameter req (request)
// with paramater res (reponse) 
// building the response sent to the client
var server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write('<!DOCTYPE html>'+
	'<html>'+
	'    <head>'+
	'        <meta charset="utf-8" />'+
	'        <title>Ma page Node.js !</title>'+
	'    </head>'+ 
	'    <body>'+
	'     	<p>Voici un paragraphe <strong>HTML</strong> !</p>'+
	'    </body>'+
	'</html>');
  res.end();
});

/* Another simple method
var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello NodeJS World');
});
*/


// Indicate which port to listen
server.listen(9000);

/* See results 
result visible at 'http://localhost:9000' 
result visible at 'http://localhost:9000/test' 
result visible at 'http://localhost:9000/test?n=3' 
result visible at 'http://localhost:9000/autre/test' 

Documentation available at :
https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/une-premiere-application-avec-node-js
*/
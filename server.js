// All libraries are in the installation repository of NodeJS
// You can charge an other library by using NPM command


// Use the library 'http'  
var http = require('http'); 

// Create a web server using an anonymous fonction 
// with parameter req (request)
// with paramater res (reponse) 
// building the response sent to the client
var server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end('<h2>Hello World !</h2>');
});

// Indicate which port to listen
server.listen(9000);

/* Test 
result visible at 'localhost:9000' 
result visible at 'localhost:9000/test' 
result visible at 'localhost:9000/test?n=3' 
result visible at 'localhost:9000/autre/test' 

Documentation available at :
https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/une-premiere-application-avec-node-js
*/
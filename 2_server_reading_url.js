// All libraries are in the installation repository of NodeJS
// You can charge an other library by using NPM command


// Use libraries 'http'  and 'url'
var http = require('http'); 
var url = require('url');

// Create a web server using an anonymous fonction 
// watching at path url
// with parameter req (request)
// with paramater res (reponse) 
// building the response sent to the client
var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if (page == '/') {
        res.write('This is home page');
    }
    else if (page == '/information') {
        res.write('This is information page');
    }
    else if (page == '/about') {
        res.write('This is about page');
    }
	// else nothing to display
    res.end();
});


// Indicate which port to listen
server.listen(9000);

/* See results
result visible at 'http://localhost:9000' 
result visible at 'http://localhost:9000/information' 
result visible at 'http://localhost:9000/about' 
result visible at 'http://localhost:9000/else' 
result visible at 'http://localhost:9000/else?id=3' 

Documentation available at :
https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/une-premiere-application-avec-node-js
*/
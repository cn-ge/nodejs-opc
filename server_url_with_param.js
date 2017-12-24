// All libraries are in the installation repository of NodeJS
// You can charge an other library by using NPM command


// Use libraries 'http', 'url' and 'querystring'
var http = require('http'); 
var url = require('url');
var querystring = require('querystring');

// Create a web server using an anonymous fonction 
// watching at url parameters
// with parameter req (request)
// with paramater res (reponse) 
// building the response sent to the client
var server = http.createServer(function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if ('firstname' in params && 'lastname' in params) {
        res.write('Hello ' + params['firstname'] + ' ' + params['lastname']);
    }
    else {
        res.write('Hello NodeJS World');
    }
    res.end();
});


// Indicate which port to listen
server.listen(9000);

/* See results 
result visible at 'http://localhost:9000' 
result visible at 'http://localhost:9000/information' 
result visible at 'http://localhost:9000?firstname=John&lastname=Doe' 
result visible at 'http://localhost:9000/test?firstname=John&lastname=Doe' 

Documentation available at :
https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/une-premiere-application-avec-node-js
*/
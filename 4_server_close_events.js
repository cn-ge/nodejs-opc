// All libraries are in the installation repository of NodeJS
// You can charge an other library by using NPM command


// Use libraries 'http', 'url' and 'querystring'
var http = require('http');


var server = http.createServer();
server.on('request', function() { 
    console.log('Server is in use !');
});

server.on('close', function() { 
    console.log('Server is now stopped !');
});

server.listen(9000);

server.close();

/* See events list at https://nodejs.org/api/http.html */


/* See results in the console

Documentation available at :
https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/les-evenements-18
*/
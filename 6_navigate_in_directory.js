// Use library 'http'  
var http = require('http'); 

// Use 6b_require.js 
var otherFile = require('./6b_require'); 

// Create a basic web server using an anonymous fonction 
// with parameter req (request)
// with paramater res (reponse) 
// building the response sent to the client
var server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end('Hello NodeJS World');
});

// Indicate which port to listen
server.listen(9000);

/* for information 
require('./6b_require'); // never use .js extension
require('../6b_require');  // look for 6b_require.js in the parent folder
require('6b_require');  // look for 6b_require.js in the sub-folder, by default 'node-modules'
Be careful : If the folder doesn't exist Node will search the sub-folder 'node-modules' in the parent folder, etc...

documentation available at : https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/les-modules-node-js-et-npm
*/

console.log('hello');
otherFile.sayHello();
otherFile.sayBye();
console.log('hello');



/* See results in the console

Documentation available at :
https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/les-modules-node-js-et-npm
*/
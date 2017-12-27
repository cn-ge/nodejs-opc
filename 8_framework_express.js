// Express is a framework to code faster 
// => reading route
// =>
// npm install express
// You can import 'express' library into nodejs installation folder
// npm install express

var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Home');
});

app.get('/about', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('About');
});

app.get('/contact', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Contact');
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
	//res.send(404, 'No corresponding page !');   // deprecated
	res.status(404).send('No corresponding page !'); 
});


app.listen(9000);

/* The code below works as well
app.get('/about', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
	res.end('About')})
.get('/contact', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Contact')})
.get...
.use...
*/


/* See results in the console OR at 
http://localhost:9000/
http://localhost:9000/about
http://localhost:9000/contact
http://localhost:9000/truc
Documentation available at :
https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/le-framework-express-js
*/
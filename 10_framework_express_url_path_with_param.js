// Express is a framework to code faster 
// => reading url path
// => reading url paramater
// You can import 'express' library into nodejs installation folder
// npm install express

var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Home');
});
app.get('/contact/:name/page', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Here is the page for the contact :' + req.params.name);
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
	//res.send(404, 'No corresponding page !');   // deprecated
	res.status(404).send('No corresponding page !'); 
});


app.listen(9000);



/* See results in the console OR at 
http://localhost:9000/
http://localhost:9000/contact
http://localhost:9000/contact/paul/page
http://localhost:9000/contact/paul
Documentation available at :
https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/le-framework-express-js
*/
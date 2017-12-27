// Express is a framework to code faster 
// It uses middleware => small part of the app that allows specific services
/* examples :
morgan : allows logging
compression : allows gzip compression of the page for faster sending to the brower
cookie-parser : allows to manipulate cookies
cookie-session : allows you to manage session information (during a visitor's visit)
serve-static : to return static files contained in a folder (images, files to download ...)
serve-favicon : return the favicon of the site

all these middlewares communicate with each other by referring to up to 4 parameters:
err: errors
req: the visitor's request
res: the response to return (the HTML page and header information)
next: a callback to the next function to call

Be careful at the order when calling middleware (example : put first morgan logs, then favicon...)

You can import 'morgan' library into nodejs installation folder
npm install morgan
*/

var express = require('express');
var morgan = require('morgan');
var favicon = require('serve-favicon');
var path = require('path');

var app = express();

app.use(morgan('combined')) // Activate logging middleware : show some logs in console
.use(express.static(__dirname + '/public')) // Indicate  /public folder that contains static files
.use(favicon(path.join(__dirname,'public','images','favicon.ico')))// Activate favicon.ico in /public/images folder by using path middleware
.use(function(req, res){ // Send the response
    res.send('Hello');
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
	res.status(404).send('No corresponding page !'); 
});


app.listen(9000);



/* See results in the console OR at 
http://localhost:9000/
http://localhost:9000/count/8
Documentation available at :
http://expressjs.com/en/resources/middleware.html
https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/le-framework-express-js
*/
// Express is a framework to code faster 
// => reading url path
// => reading url paramater 
// => use template html
// => use loop

var express = require('express');

var app = express();

app.get('/count/:number', function(req, res) {
	var someNames = ['John', 'Paul', 'David'];
	// call the html template that contains this parameter 'names' and 'size'
	// create the template files in a new folder called 'views'
	// put paramaters 'number' and 'someNames' in the template parameter 'size' and 'names'
    res.render('12_framework_express_url_path_and_loop_page.ejs', {size: req.params.number, names: someNames});
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
	res.status(404).send('No corresponding page !'); 
});


app.listen(9000);



/* See results in the console OR at 
http://localhost:9000/
http://localhost:9000/count/8
http://localhost:9000/count/35
Documentation available at :
https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/le-framework-express-js
*/
// Express is a framework to code faster 
// => reading url path
// => reading url paramater 
// => use template html
// You can import 'ejs' library into nodejs installation folder
// npm install ejs
// No need to add dependencies with require()

var express = require('express');

var app = express();

app.get('/contact/:contactname/page', function(req, res) {
	// call the html template that contains this parameter 'name'
	// create the template files in a new folder called 'views'
	// put the paramater 'contactname' in the template parameter 'name'
    res.render('11_framework_express_with_template_ejs_page.ejs', {name: req.params.contactname});
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
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
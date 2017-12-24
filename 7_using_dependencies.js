// You can import 'markdown' library into nodejs installation folder
// And use it like this 
var markdown = require('markdown').markdown;
console.log(markdown.toHTML('Convert this text with **markdown** !'));

// OR Declare the dependencies in the package.json file
/* exemple : 
"dependencies": {
    "markdown": "0.3.5" // Version 0.3.5 uniquement
    "markdown": "~0.3.5" // OK pour les versions 0.3.5, 0.3.6, 0.3.7, etc. jusqu'à la version 0.4.0 non incluse
    "markdown": "~0.3" // OK pour les versions 0.3.X, 0.4.X, 0.5.X jusqu'à la version 1.0.0 non incluse
}
*/
 


/* See results in the console

Documentation available at :
https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/les-modules-node-js-et-npm
*/
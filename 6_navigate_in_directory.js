// Use 6b_require.js 
var otherFile = require('./6b_require'); 

/* for information 
require('./6b_require'); // never use .js extension
require('../6b_require');  // look for 6b_require.js in the parent folder
require('6b_require');  // look for 6b_require.js in the sub-folder, by default 'node-modules'
Be careful : If the folder doesn't exist Node will search the sub-folder 'node-modules' in the parent folder, etc...
*/

otherFile.sayHello;
otherFile.sayBye;



/* See results in the console

Documentation available at :
https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/les-modules-node-js-et-npm
*/
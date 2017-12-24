// Create some funcions
var sayHello = function() {
    console.log('Hello !');
}

var sayBye = function() {
    console.log('Bye bye !');
}

// Export these functions in order to use thes in other file
exports.sayHello = sayHello;
exports.sayBye = sayBye;

// Create some funcions

var sayHello = function() {
    console.log('Bonjour !');
}

var sayBye = function() {
    console.log('Bye bye !');
}

// Export these functions in order to use thes in other file
exports.sayHello = sayHello;
exports.sayBye = sayBye;

// Si besoin : npm install export
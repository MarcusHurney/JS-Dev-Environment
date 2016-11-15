// this file isn't transpiled, so must use ES5

// Register babel to transpile before our tests are run
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
// any file with a css extension will be treated as an empty function
require.extensions['.css'] = function() {};

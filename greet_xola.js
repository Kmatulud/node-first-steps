const greet = require('./greet');
const chalk = require('chalk');
const figlet = require('figlet');

const styledMessage = figlet.textSync(greet('Xola'));
console.log(styledMessage);

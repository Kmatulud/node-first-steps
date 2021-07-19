const greet = require('./greet');
const chalk = require('chalk');
const figlet = require('figlet');

const styledMessage1 = figlet.textSync(greet('Xola'));
console.log(styledMessage1);
const styledMessage2 = chalk.bgGreen(greet('Xola'));
console.log(styledMessage2);

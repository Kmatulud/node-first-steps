"use strict"
const greet = require('./greet');
const chalk = require('chalk');
const figlet = require('figlet');

const styledMessage = chalk.bgGreen.black(greet('Xola'));
figlet(greet("Xola"), (err, data)=>{
	console.log(data)
	return data
})


console.log(styledMessage)

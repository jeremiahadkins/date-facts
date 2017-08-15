const moment = require('moment');
const chalk = require('chalk');

let now = moment();

let hoursPassed = Number(now.format('k')) * 3600;
let minutesPassed = Number(now.format('m')) * 60;
let secondsPassed = Number(now.format('s'));

let secondsInDay = (hoursPassed + minutesPassed + secondsPassed);

console.log('It is', chalk.blue(now.format('MMMM Do YYYY, h:mm:ss a')));
console.log('It is the', chalk.magenta(now.format('DDDo')), 'day of the year.');
console.log('It is', chalk.cyan(secondsInDay), 'seconds into the day.');

if (now.isDST()) {
  console.log('It', chalk.green('is'), 'during Daylight Savings time.');
};

if (!now.isLeapYear()) {
  console.log('It', chalk.red('is not'), 'a Leap Year.');
};

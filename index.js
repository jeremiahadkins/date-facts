const moment = require('moment');
const chalk = require('chalk');

let now = moment();
let minuteNow = now.minutes();

console.log('It is', chalk.blue(now.format('MMMM Do YYYY, h:mm:ss a')));
console.log('It is the', chalk.magenta(now.format('DDDo')), 'day of the year.');
console.log('It is', chalk.cyan(minuteNow * 60), 'seconds into the day.');

if (now.isDST()) {
  console.log('It', chalk.green('is'), 'during Daylight Savings time.');
};

if (!now.isLeapYear()) {
  console.log('It', chalk.red('is not'), 'a Leap Year.');
};

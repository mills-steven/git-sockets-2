var moment = require('moment');
var now = moment();

//console.log(now.format());
//console.log(now.format('x'));
//console.log(now.format('X'));
console.log(now.valueOf());

var timestamp = 1488160481010;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mma'));

//console.log(now.format('h:mma'));

//console.log(now.format('h:mma'));
//console.log(now.format('MMM Do YYYY, h:mma'));

//now.subtract(1, 'hour');
//console.log('Here is the time an hour ago: ' + now.format('h:mma'));


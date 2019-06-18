const _ = require('lodash');

console.log('Vijay is String?: ', _.isString('Vijay'));

console.log('201 is String?" ', _.isString(201));

console.log('new date is Date object?: ', _.isDate(new Date));

console.log('Apr 23 Mon is Date object?: ', _.isDate('APR 23 Mon'));

console.log('Extract Unique values from an Array: ', _.uniq([2, 4, 'Vijay', 'Babu', 4, 2, 'Nisha', 'Vijay']));
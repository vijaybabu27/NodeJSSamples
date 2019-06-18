const process = require('process');
const user = require('./userModule');

const input = process.argv[2];

if(input == 'greatme') {
    console.log('Hello !', user.getUserName());
} else {
    console.log('Command Not Supported !');
}
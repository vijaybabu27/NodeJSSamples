const yargs = require('yargs');
const _ = require('lodash');

const argv = yargs.argv;

if(argv._[0] == 'add') {
    if(_.isNil(argv.a) || _.isNil(argv.b)) {
        console.log("Arguments --a and/or --b is missing");
    } else {
        console.log(argv.a + argv.b);
    }
} else {
    console.log('Command Not Support !');
}

const yargs = require('yargs');
const _ = require('lodash');

const notes = require('./note');

const argv = yargs.argv;

const cmd = argv._[0];

console.log('Command ', cmd);

if(cmd === 'add') {
    if(_.isNil(argv.title) || _.isNil(argv.body)) {
        console.log('Please enter both --title and --body !!');
    } else {
        var note = notes.createNote(argv.title, argv.body);

        if(note) {
            console.log('Note created !!');
        } else {
            console.log('Note not Created !');
        }
    }
    
} else if (cmd === 'update') {
    var result = notes.updateNote(argv.title, argv.body);
    if(result) {
        console.log('Note ' + argv.title + ' updated Succesfully');
    } else {
        console.log('Note ' + argv.title + ' not found !!');
    }
} else if (cmd === 'list') {
    var allNotes = notes.getAllNotes();
    if (allNotes.length !== 0) {
        console.log(allNotes);
    } else {
        console.log('No notes Present !!');
    }
} else if (cmd === 'read') {
    var note = notes.readNote(argv.title);

    if (note) {
        console.log(note);
    } else {
        console.log('Note not found !!');
    }
} else if (cmd === 'delete') {
    var note = notes.deleteNote(argv.title);

    if (note) {
        console.log('Note deleted successfully');
    } else {
        console.log('Note not found !!');
    }
}
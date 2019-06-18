const fs = require('fs');

createNote = function(title, body) {

    var note = {
        title,
        body
    }

    var tmpNotes = fetchAllNotes();
    //console.log(tmpNotes);
    var noteExist = tmpNotes.filter((note) => note.title === title);

    if(noteExist.length === 0) {
        tmpNotes.push(note);
        saveNote(tmpNotes);
        return tmpNotes;
    }
}

getAllNotes = () => {
    return fetchAllNotes();
}

readNote = (title) => {
    var notes = getAllNotes();
    var currNote = notes.filter((note) => note.title === title);
    return currNote[0];
}

updateNote = (title, body) => {
    var notes = getAllNotes();
    var notefound = false;
    for(i = 0; i < notes.length; i++) {
        if (notes[i].title === title) {
            notes[i].body = body;
            notefound = true;
            saveNote(notes);
            break;
        }
    }
    return notefound;
}

deleteNote = (title) => {
    var notes = getAllNotes();
    var otrNts = notes.filter((note) => note.title !== title);

    saveNote(otrNts);

    return notes.length !== otrNts.length
}

saveNote = (notes) => {
    fs.writeFileSync('notesdata.json', JSON.stringify(notes));
}

fetchAllNotes = () => {
    try {
        var notesStr = fs.readFileSync('notesdata.json');
        return JSON.parse(notesStr);
    } catch(err) {
        return [];
    }
}

module.exports = {
    createNote,
    getAllNotes,
    readNote,
    deleteNote,
    updateNote
}
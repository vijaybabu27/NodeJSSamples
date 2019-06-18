var express = require('express');
const _ = require('lodash');

var noteapi = require('../note');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET note list. */
router.get('/list', function(req, res, next) {
  var allNotes = noteapi.getAllNotes();
    if (allNotes.length !== 0) {
      res.status(200).send(allNotes);
    } else {
      res.status(500).send('No notes Present !!');
    }
  
  //res.end();
});

/* Post Note into app. */
router.post('/addNote', function(req, res, next) {
    var title = req.body.title;
    var txt = req.body.msg;
    var outTxt ='';

    if(_.isNil(title) || _.isNil(txt)) {
      res.status(500).send('Title : ' + title + 'Msg : ' + txt + '_.isNil(title) : ' + _.isNil(title) + '_.isNil(txt) : ' + _.isNil(txt) + 'Please enter both title and body !!');
    } else {
        var note = noteapi.createNote(title, txt);

        if(note) {
          res.status(200).send('Note created !!');
            //console.log('Note created !!');
        } else {
          res.status(500).send('Note not created !!');
            //console.log('Note not Created !');
        }
    }

    //res.send(outTxt);
    //res.end();
});

module.exports = router;

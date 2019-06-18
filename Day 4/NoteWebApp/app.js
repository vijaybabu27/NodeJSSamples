const http = require('http');
const urlObj = require('url');
const _ = require('lodash');

const notes = require('./note');

http.createServer( function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var cmd = urlObj.parse(req.url).pathname;
    var param = urlObj.parse(req.url, true);
    var jsonObj = param.query;
    var title = jsonObj['title'];
    var body = jsonObj['body']
    var outTxt ='';

    if(_.isNil(title) || _.isNil(body)) {
        console.log('Please enter both --title and --body !!');
    } else {
        var note = notes.createNote(title, body);

        if(note) {
            outTxt = 'Note created !!';
            //console.log('Note created !!');
        } else {
            outTxt = 'Note not created !!';
            //console.log('Note not Created !');
        }
    }

    res.write(outTxt);
    res.end();
}).listen(8080, () => {
    console.log('server started and running...');
});
const http = require('http');
const urlObj = require('url');

http.createServer((req, res) => {
    res.writeHead(200,'{Content-Type : text/html}');
    var pname = urlObj.parse(req.url).pathname;
    var param = urlObj.parse(req.url, true);
    var jsonObj = param.query;
    res.write(pname + JSON.stringify(jsonObj));
    res.end();
}).listen(8080);
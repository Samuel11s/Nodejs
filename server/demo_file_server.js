// Display data from HTML file
var http = require('http'); // Module for the server
var fs = require('fs'); // Module for making actions to a file, I'm gonna use his function "readFile" to read the content of my html file

http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);
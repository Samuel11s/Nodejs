// A server to display my module

var http = require('http');
var myfirstmodule = require('modules/first_module.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + myfirstmodule.myDateTime());
    res.end();
  }).listen(8080);
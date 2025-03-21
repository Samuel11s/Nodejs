// Display: All things I've learned

var http = require('http');
var myfirstmodule = require('./modules/myfirstmodule.js');
var fs = require('fs')

http.createServer(function (req, res) {
  fs.readFile("demo.html", function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.write('Check your time here : ' + myfirstmodule.myDateTime());
    res.end("Report errors while reading the demo file : " + err);
  })
}).listen(8080); 
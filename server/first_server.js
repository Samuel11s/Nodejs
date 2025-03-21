// My fisrt server 

var http = require('http'); 

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
  }).listen(8080); 

// Prompt: /PathToProject>cd server 
// Then: /PathToProject/server>node server.js
// Or: /PathToProject>node server/server.js
// Display: Hello World!
const http = require('http');
const fs = require('fs');
const myfirstmodule = require('./modules/first_module.js');

http.createServer(function (req, res) {
  if (req.url === '/') {
    fs.readFile('public/demo.html', function(err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      if (err) {
        res.end("Error reading HTML file: " + err.message);
      } else {
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === '/date') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Current date and time: ' + myfirstmodule.myDateTime());
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
}).listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});
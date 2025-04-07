const http = require('http');
const fs = require('fs');
const myfirstmodule = require('./modules/first_module.js');
const pathDemo = require('./modules/pathDemo.js');

http.createServer(function (req, res) {
  if (req.url === '/') {
    fs.readFile('public/demo.html', function(err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
      if (err) {
        res.end("Error reading HTML file: " + err.message);
      } else {
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === '/date') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
    res.end('Current date and time: ' + myfirstmodule.myDateTime());
  } else if (req.url === '/path') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write('<h1>Démo du module path</h1>');
    res.write('<ul>');
      for (const [key, value] of Object.entries(pathDemo)) {
        res.write(`<li><strong>${key}</strong> : ${value}</li>`);
      }
    res.write('</ul>');
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
}).listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});
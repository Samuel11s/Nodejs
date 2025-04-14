const http = require('http');
const fs = require('fs');
const myfirstmodule = require('./modules/first_module.js');
const pathDemo = require('./modules/pathDemo.js');
const osDemo = require('./modules/osDemo.js');

http.createServer(function (req, res) {
  switch (req.url) {
    case '/':
      fs.readFile('public/demo.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        if (err) {
          res.end("Error reading HTML file: " + err.message);
        } else {
          res.end(data);
        }
      });
      break;

    case '/date':
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
      res.end('Current date and time: ' + myfirstmodule.myDateTime());
      break;

    case '/path':
      res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.write('<h1>Path module demo</h1>');
      res.write('<ul>');
      for (const [key, value] of Object.entries(pathDemo)) {
        res.write(`<li><strong>${key}</strong> : ${value}</li>`);
      }
      res.write('</ul>');
      res.end();
      break;

    case '/os':
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify(osDemo, null, 2));
      break;

    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
  }
}).listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});

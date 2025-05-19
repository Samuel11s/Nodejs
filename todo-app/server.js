const express = require('express');
const app = express();
const PORT = 3000;

// Template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Static files
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

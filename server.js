const express = require('express');
const favicon = require('serve-favicon');
const app = express();
const path = require('path');

app.use(express.static('dist'));
app.use(favicon(path.resolve(__dirname, 'src/assets/images/', 'favicon.ico')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});

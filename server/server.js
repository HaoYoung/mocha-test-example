const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.status(200).send([{
    name: 'Mike',
    age: 22
  }, {
    name: 'Hao',
    age: 24
  }, {
    name: 'Josh',
    age: 21
  }]);
});

app.listen(3000);
module.exports.app = app;
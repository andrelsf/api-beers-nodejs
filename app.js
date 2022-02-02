const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser')

const router = require('./src/api/routes');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error advice handler
app.use(function (err, req, res, next) {
	console.error(err);
	res.status(err.statusCode || 500);
	res.send(err);
});

app.listen(3000);

module.exports = app;
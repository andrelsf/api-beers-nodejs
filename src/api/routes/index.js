const express = require('express');
const router = express.Router();

const ping = require('./ping');

router.use('/ping', ping);

router.use(function timeLog(req, res, next) {
  console.warn(`Time Stamp: ${Date()}`);
  next();
});

module.exports = router;
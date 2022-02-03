const express = require('express');
const router = express.Router();

const ping = require('./ping');
const beers = require('./beers');

router.use('/ping', ping);
router.use('/beers', beers);

router.use(function timeLog(req, res, next) {
  console.warn(`Time Stamp: ${Date()}`);
  next();
});

module.exports = router;
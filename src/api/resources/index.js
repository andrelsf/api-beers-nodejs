const ping = require('./pingResource');
const beers = require( './beersResource');

module.exports = {
  Ping: ping,
  Beers: beers
};
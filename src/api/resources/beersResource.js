let beerService = require('../../services/beerService');

exports.postBeer = async function (req, res, next) {
  const beer = await beerService.create(req.body);
  return beer;
}
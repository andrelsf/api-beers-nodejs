const {Router} = require('express');
const router = Router();
const {validateRequest, valid} = require('../validators');
const {UnprocessableEntity} = require('../errors');

const {Beers} = require('../resources');

router.post('', valid.postBeerRequest, validateRequest, function (req, res, next) {
  Beers.postBeer(req, res, next)
    .then((response) => {
      res.status(201);
      res.send(response);
    }).catch(e => {
      next(new UnprocessableEntity(422, e.stack));
    });
});

module.exports = router;
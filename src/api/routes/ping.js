const {Router} = require('express');
const router = Router();
const {UnprocessableEntity} = require('../errors');

const {Ping} = require('../resources');

router.get('', function (req, res, next) {
  Ping.getPing(req, res, next)
    .then((response) => {
      res.status(200);
      res.send(response);
    }).catch(e => {
      next(new UnprocessableEntity(422, e.stack));
    });
});

module.exports = router;
const {body} = require('express-validator');

exports.postBeerRequest = body(['name', 'alcoholContent', 'ingredients'])
  .exists()
  .bail()
  .notEmpty();
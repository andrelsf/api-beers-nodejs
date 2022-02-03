const {validationResult} = require('express-validator');
const {UnprocessableEntity} = require('../errors');
const valid = require('./requests');


function validateRequest(req, res, next) 
{
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    throw new UnprocessableEntity(422, errors.array());
  }

  return next();
}


module.exports = {
  valid: valid,
  validateRequest: validateRequest
}

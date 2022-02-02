class UnprocessableEntity extends Error {
  constructor(statusCode, errors) {
    super();
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

module.exports = {
  UnprocessableEntity: UnprocessableEntity
}
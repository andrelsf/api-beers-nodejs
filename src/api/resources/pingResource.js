let pingService = require('../../services/pingService');

exports.getPing = async function (req, res, next) {
  const pong = await pingService.ping();
  return {
    message: pong
  }
}
const jwt = require('jsonwebtoken');
const logger = require('./logger');
const { JWT_SECRET_KEY } = require('./secrets');

exports.generate = (id) => {
  return jwt.sign({ id }, JWT_SECRET_KEY, { expiresIn: '1d' });
};

exports.decode = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET_KEY);
  } catch (error) {
    logger.error(error.message);
  }
};

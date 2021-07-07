const router = require('express').Router();
const { NOT_FOUND, BAD_REQUEST } = require('../constants/statusCodes');

const authRouter = require('./auth');

router.use('/auth', authRouter);

// catch all
router.all('*', (req, res) => {
  return res.status(NOT_FOUND).json({
    status: 'error',
    message: `${req.originalUrl} can't be found.`,
  });
});

router.use((err, req, res, next) => {
  res.status(BAD_REQUEST).json({
    status: 'error',
    statusCode: err.statusCode,
    message: err.message,
  });
  next();
});

module.exports = router;

const router = require('express').Router();

const authRouter = require('./auth');

router.use('/auth', authRouter);

// catch all
router.get('*', (req, res) => {
  res.status(404).json({
    message: 'cannot get',
  });
});

module.exports = router;

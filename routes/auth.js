const {
  register,
  login,
  forgotpassword,
  resetpassword,
} = require('../controllers/auth');

const express = require('express');
const router = express.Router();

router.route('/register').post(register);

router.post('/login', login);

router.post('/forgotpassword', forgotpassword);

router.post('/resetpassword', resetpassword);

module.exports = router;

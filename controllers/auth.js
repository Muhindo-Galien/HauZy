const User = require('../models/User');
const tokenUtil = require('../util/token');
exports.register = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  try {
    const user = await User.create({
      first_name,
      last_name,
      email,
      password,
    });
    const token = tokenUtil.generate(user._id);
    res.status(201).json({ status: 'success', token, data: user });
  } catch (error) {
    res.status(201).json({ status: 'error', data: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      success: false,
      error: 'Please provide an email and a password',
    });
  }
  try {
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      res.status(404).json({
        success: false,
        error: 'Invalid crudentials',
      });
    }

    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
      res.status(404).json({
        success: false,
        error: 'Invalid crudentials',
      });
    }

    res.status(200).json({ success: true, token: 'huhuhue32+', data: user });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
exports.forgotpassword = (req, res) => {
  res.send('Forgot Password Route');
};

exports.resetpassword = (req, res) => {
  res.send('Reset Password Route');
};

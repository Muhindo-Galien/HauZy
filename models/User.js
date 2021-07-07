const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, 'Please your first name'],
  },
  last_name: {
    type: String,
    required: [true, 'Please your last name name'],
  },
  phoneNumber: {
    type: String,
  },
  address: {
    type: String,
  },
  is_admin: Boolean,
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valide email',
    ],
  },

  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 6,
    select: false,
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
});
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hashSync(this.password, salt);
});

UserSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};
module.exports = mongoose.model('User', UserSchema);

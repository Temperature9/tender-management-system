// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  type: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true }, // Add this line
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  aadharNumber: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

const User = mongoose.model('User', userSchema);

module.exports = User;

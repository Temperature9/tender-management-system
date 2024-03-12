// models/FactoryOwner.js
const mongoose = require('mongoose');

const factoryOwnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add other fields as needed
});

const FactoryOwner = mongoose.model('FactoryOwner', factoryOwnerSchema);

module.exports = FactoryOwner;

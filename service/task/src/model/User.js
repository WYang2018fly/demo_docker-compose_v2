const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true }
});

module.exports = model('User', UserSchema, 'users');
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { ObjectId } = Schema.Types;

const TaskSchema = new Schema({
  user: { type: ObjectId, required: true, ref: 'User' },
  content: { type: String, required: true },
  isFinish: { type: Boolean, default: false }
});

module.exports = model('Task', TaskSchema, 'tasks');
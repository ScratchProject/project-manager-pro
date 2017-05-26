const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const featureSchema = new Schema({
  title: { type: String, required: true },
  elapsed: { type: Number, default: 0 },
  duration: { type: Number, required: true },
  items: { type: Array, default: [] }
});

module.exports = mongoose.model('Feature', featureSchema);

const {Schema, model} = require('mongoose');

const foodlogSchema = new Schema({
  meal: {type: String, required: true},
  entry: {type: String, required: true},
  createdAt:{type: Date, required: true, default: Date.now}
  },
  {
  timestamps: true,
});


const FoodLog = model('FoodLog', foodlogSchema);

module.exports = FoodLog;

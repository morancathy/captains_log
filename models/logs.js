const {Schema, model} = require('mongoose');

const logSchema = new Schema({
  title: {type: String, required: true, unquie: true},
  entry: {type: String, required: true},
  shipIsBroken: {type: Boolean, default: true},  //set this default to true
  // date: {type: Date, default: Date.now}
  createdAt:{type: Date, required: true, default: Date.now}
  },
  {
  timestamps: true,
});


const Log = model('Log', logSchema);

module.exports = Log;

const {Schema, model} = require('mongoose');

const logSchema = new Schema({
  title: {type: String, required: true, unquie: true},
  entry: {type: String, required: true},
  shipIsBroken: {type: Boolean, required: true}   //set this default to true
});

const Log = model('Log', logSchema);

module.exports = Log;

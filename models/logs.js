const {Schema, model} = require('mongoose');

const logSchema = new Schema({
  title: {type: String, required: true, unquie: true},
  entry: {type: String, required: true},
  shipIsBroken: {type: Boolean, default: true},
  // date: {type: Date, default: Date.now}
  createdAt:{type: Date, required: true, default: Date.now},
  peoplesComments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
    }]
  },
  {
  timestamps: true,
});


const Log = model('Log', logSchema);

module.exports = Log;

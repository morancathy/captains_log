const {Schema, model} = require('mongoose');

const commentsSchema = new Schema({
  name: {type: String, required: true},
  entry: {type: String, required: true},
  createdAt:{type: Date, required: true, default: Date.now},
  logCommentedOn:{
    type: Schema.Types.ObjectId,
    ref: 'Log'
    }
  },
  {
  timestamps: true,
});


const Comment = model('Comment', commentsSchema);

module.exports = Comment;

const FoodLog = require('../models/foodlog.js');

const dataController = {
  index(req, res, next) {
    FoodLog.find({}, (err, foodlogs) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.foodlogs = foodlogs;
        next();
      }
    })
  },

  show(req, res, next){
    FoodLog.findById(req.params.id, (err, foundLog)=>{
      if(err){
        res.status(404).send({
        msg: err.message
        })
      } else {
        res.locals.data.foodlogs = foundLog;
        next();
      }
    })
  },

  create(req, res, next){
    FoodLog.create(req.body, (err, createdFoodLog) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.foodlogs = createdFoodLog;
        next();
      }
    })
  },

  destroy(req, res, next){
    FoodLog.findByIdAndDelete(req.params.id, (err, deletedLog)=>{
      if(err){
        res.status(404).send({
            msg: err.message
        })
      } else {
        res.locals.data.foodlogs = deletedLog;
        next();
      }
    })
  },

  update(req, res, next){
    FoodLog.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedLog)=>{
      if(err){
        res.status(404).send({
            msg: err.message
        })
      } else {
        res.locals.data.foodlogs = updatedLog;
        next();
      }
    })
  }
};

module.exports = dataController;

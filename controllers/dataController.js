const Log = require('../models/logs.js');

const dataController = {
  index(req, res, next) {
    Log.find({}, (err, foundLogs) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.logs = foundLogs;
        next();
      }
    })
  },

  show(req, res, next){
      Log.findById(req.params.id, (err, foundLog)=>{
        if(err){
          res.status(404).send({
              msg: err.message
          })
        } else {
          res.locals.data.logs = foundLog;
          next();
        }
    })
  },

  create(req, res, next){
    if(req.body.shipIsBroken === 'on'){
      req.body.shipIsBroken = true;
    } else {
      req.body.shipIsBroken = false;
    }

    Log.create(req.body, (err, createdLog) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.logs = createdLog;
        next();
      }
    })
  },

  destroy(req, res, next){
    Log.findByIdAndDelete(req.params.id, (err, deletedLog)=>{
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.logs = deletedLog;
        next();
      }
    })
  },

  update(req, res, next){
    if(req.body.shipIsBroken === 'on'){
      req.body.shipIsBroken = true;
    } else{
      req.body.shipIsBroken = false;
    }

    Log.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedLog)=>{
      if(err){
        res.status(404).send({
            msg: err.message
        })
      } else {
        res.locals.data.logs = updatedLog;
        next();
      }
    })
  }
};

module.exports = dataController;

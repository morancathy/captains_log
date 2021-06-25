const router = require('express').Router();
const FoodLog = require('./models/foodlog.js');

const methodOverride = require('method-override');
router.use(methodOverride('_method'));

// Seed Route
router.get('/foodlog/seed', (req, res) => {
  FoodLog.create([
    {
      meal: 'breakfast',
      entry: 'eggs',
      createdAt: 'May 4, 2021'
    },
    {
      meal: 'lunch',
      entry: 'ham and cheese sammich',
      createdAt: 'June 4, 2021'

    }
  ], (err, data) => {
      res.redirect('/logs');
  });
});

/****************************************
INDUCES Routes
****************************************/
/*
Index
*/

router.get('/foodlog', (req, res) => {
  FoodLog.find({}, (err, foundFoodLogs) => {
    if(err){
      res.status(404).send({
        msg: err.message
      })
    } else {
      // res.send('This is foodlog page')
      res.render('FoodIndex', {
        foodlogs: foundFoodLogs
      })
    }
  })
})

/*
New
*/
router.get('/foodlog/new', (req, res) => {
  res.render('FoodNew')
})

/*
Delete
*/
router.delete('/foodlog/:id', (req, res) => {
  FoodLog.findByIdAndDelete(req.params.id, (err, foundLog)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.redirect('/foodlog')
    }
  })
});
/*
Update
*/
router.put('/foodlog/:id', (req, res) => {
  FoodLog.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedLog)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('FoodShow', {
        foodlogs: updatedLog,
      })
    }
  })
});

/*
Create
*/
router.post('/foodlog/', (req, res) => {
  FoodLog.create(req.body, (err, createdLog) => {
    if(err){
      res.status(404).send({
        msg: err.message
      })
    } else {
      console.log("req.body: ", req.body)
      res.redirect('/foodlog');
    }
  })
});

/*
Edit
*/
router.get('/foodlog/:id/edit', (req, res) => {
  FoodLog.findById(req.params.id, (err, foundLog)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('FoodEdit', {
        foodlogs: foundLog,
      })
    }
  })
});

/*
Show
*/
router.get('/foodlog/:id', (req, res) => {
  FoodLog.findById(req.params.id, (err, foundLog)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('FoodShow', {
        foodlogs: foundLog,
      })
    }
  })
});

module.exports = router;

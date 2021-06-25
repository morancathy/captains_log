require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const Log = require('./models/logs.js');
const Comment = require('./models/comments.js');

/****************************************
 Database set up
****************************************/
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});

// Configure the app (app.set)
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Mount middleware (app.use)
app.use(express.urlencoded({extended: true}));
app.use('/', require('./food.js'))   //for food

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.static('public'));

// Seed Route
app.get('/logs/seed', (req, res) => {
  Log.create([
    {
      title: 'this is a title',
      entry: 'this is entry',
      shipIsBroken: false
    },
    {
      title: 'this is another title',
      entry: 'this is anoter entry',
      shipIsBroken: false
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
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Captains Log App!</h1><a href="/logs/">Visit Captain Logs</a>')
})

app.get('/logs', (req, res) => {
  Log.find({}, (err, foundLogs) => {
    if(err){
      res.status(404).send({
        msg: err.message
      })
    } else {
      res.render('Index', {
        logs: foundLogs
      })
    }
  })
})

/*
New
*/
app.get('/logs/new', (req, res) => {
  res.render('New')
})

app.get('/logs/:id/comment', (req, res) => {
  Log.findById(req.params.id, (err, foundLogs)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('CommentNew', {
        logs: foundLogs
      })
    }
  })
});




/*
Delete
*/
app.delete('/logs/:id', (req, res) => {
  Log.findByIdAndDelete(req.params.id, (err, foundLog)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.redirect('/logs')
    }
  })
});
/*
Update
*/
app.put('/logs/:id', (req, res) => {
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
      res.render('Show', {
        logs: updatedLog,
      })
    }
  })
});

/*
Create
*/
app.post('/logs/', (req, res) => {
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
      console.log("req.body: ", req.body)
      res.redirect('/logs');
    }
  })
});

app.post('logs/:id/comment', (req, res) => {
  Comment.create(req.body, (err, createdComment) => {
    if(err){
      res.status(404).send({
        msg: err.message
      })
    } else {
      console.log("req.body: ", req.body)
      res.redirect('/logs');
    }
  })
});

/*
Edit
*/
app.get('/logs/:id/edit', (req, res) => {
  Log.findById(req.params.id, (err, foundLog)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Edit', {
        logs: foundLog,
      })
    }
  })
});

/*
Show
*/
app.get('/logs/:id', (req, res) => {
  Log.findById(req.params.id, (err, foundLog)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Show', {
        logs: foundLog,
      })
    }
  })
});

// app.get('/logs/:id/comment', (req, res) => {
//   Log.findById(req.params.id, (err, foundLogs)=>{
//     if(err){
//       res.status(404).send({
//           msg: err.message
//       })
//     } else {
//       res.render('CommentNew', {
//         logs: foundLogs
//       })
//     }
//   })
// });

//tell app to listen on port 3000 for HTTP requests from clients
app.listen(PORT, () => {
  console.log(`Listening in on port: ${PORT}`)
})

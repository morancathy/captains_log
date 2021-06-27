require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 3000;

// Set Up data
const Log = require('./models/logs.js');
const Comment = require('./models/comments.js');

const db = require('./models/db')
db.once('connected', () => {
  console.log('Connected to Mongo')
})

// Configure the app (app.set)
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Mount middleware (app.use)
app.use((req, res, next) => {
  res.locals.data = {}
  next()
});

app.use(express.urlencoded({extended: true}));

app.use(methodOverride('_method'));

app.use(express.static('public'));

app.use('/logs', require('./controllers/routeController.js')); //logs routes
app.use('/', require('./controllers/foodRouteController.js'))   //food routes

/****************************************
INDUCES Routes
****************************************/
/*
Index
*/
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Captains Log App!</h1><a href="/logs/">Visit Captain Logs</a>')
})

/*
New
*/

//#################################################################
//    Below is my attempt at the super bonus. I created new model using the 'one to many' method.
//    Was able to get new form to appear, but once user hits 'submit,' an error happens. I am unable to post
//    Or connect the data to log. Any feedback would be great. I'd really like to get this to work.
//################################################################

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
//
//
// /*
// Delete
// */
//
// /*
// Update
// */
//
//
// /*
// Create
// */
//
// app.post('/logs/:id/comment', (req, res) => {
//   res.send("Does me work")
//   Comment.create(req.body, (err, createdComment) => {
//     if(err){
//       res.status(404).send({
//         msg: err.message
//       })
//     } else {
//       console.log("req.body: ", req.body)
//       res.redirect('/logs');
//     }
//   })
// });
//
// /*
// Edit
// */
//
// /*
// Show
// */
//
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

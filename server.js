const express = require('express');
const app = express();
const PORT = 3000;

/****************************************
 Database set up
****************************************/


// Configure the app (app.set)
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Mount middleware (app.use)
app.use(express.urlencoded({extended: true}));


// Dummy Code For now...#################

//END DUMMY CODE #######################

// Seed Route

/****************************************
INDUCES Routes
****************************************/
/*
Index
*/
app.get('/', (req, res) => {
  res.send("Welcome to the Captains Log")
})
/*
New
*/
app.get('/logs/new', (req, res) => {
  res.render('New')
})

/*
Delete
*/

/*
Update
*/


/*
Create
*/
app.post('/logs', (req, res) => {
  if(req.body.shipIsBroken === 'on'){
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  console.log("req.body: ", req.body);
res.send(req.body);

})



/*
Edit
*/



/*
Show
*/

//tell app to listen on port 3000 for HTTP requests from clients
app.listen(PORT, () => {
  console.log(`Listening in on port: ${PORT}`)
})

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



// Dummy Code For now...#################

//END DUMMY CODE #######################

// Seed Route

/****************************************
INDUCES Routes
****************************************/
/*
Index
*/

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

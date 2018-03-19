const express = require(‘express’);
const app = express();
const mongodb = require(‘mongodb’).MongoClient;
const bodyParser = require('body-parser');

const dbName = 'employees';
// sets ejs views folder
app.set(‘views’, path.join(__dirname, ‘views’);

// sets view engine
app.set(‘view engine’, ‘ejs’);  
app.use(bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());

//homepage
app.listen(3000, () => console.log(‘listening to port 3000’);{
app.get(‘/’, function(req, res) => {
  // opens connection to mongodb
  MongoClient.connect(url).then(client => {

    // creates const for our database
    const db = client.db(dbName);

    // creates const for 'employees' collection in database
    const col = db.collection('employees');

    // finds ALL employees in 'employees' collection/converts to array
    col.find({}).toArray().then(docs => {

      // logs message upon finding collection
      console.log('found employees for index');

      // renders index ejs template and passes employees array as data
      res.render('index', {
        employees: docs
      });

      // closes connection to mongodb and logs message
      client.close(() => console.log('connection closed'));

    // checks for error in finding 'employees' collection
    }).catch(err => {

      // logs message upon error in finding 'employees' collection
      console.log('error finding employees', err);

    });

  // checks for error in connecting to mongodb
  }).catch(err => {

    // logs message upon error connecting to mongodb
    console.log('error connecting to mongodb', err);

  });

});
});

app.get(‘/employees/add’, function(req, res) => {
  // do something
  //add endpoint
};
app.post(‘employees/add’, function (req,res) {
  // logs message with POST request data
  console.log(req.body);
  /* creates empty employee object/stores POST request data in
employee object */
  let employee = {};
  employee,name = req.body.name;
  employee.age = req.body.age;
  // do database stuff
  // opens connection to mongodb
  MongoClient.connect(url).then(client => {
    //creates const for our database
    const db = client.db(dbName);
    // creates const for 'employees' collection in database
    const col = db.collection('employees');
    // inserts ONE employee into 'employees' collection
    col.insertOne(employee).then(doc => {

      /* logs message upon inserting employee to 'employees'
      collection */
      console.log('employee inserted', doc);
      // redirects user back to index page after POST req submit
      res.redirect('/');

      // closes connection to mongodb and logs message
      client.close(() => console.log('connection closed'));

      /* checks for error in inserting employee to 'employees'
      collection */
    }).catch(err => {

      /* logs message upon error in inserting employee to 'employees'
      collection */
      console.log('error inserting employee', err);

    });
    // closes connection to mongodb
    client.close();
    // checks for error in connecting to mongodb
  }).catch(err => {

    // logs message upon error connecting to mongodb
    console.log('error connecting to mongodb', err);

  });
};


app.get(‘/api/data’, function(req, res) => {
  // do something
  //API endpoint
};

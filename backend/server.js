/*
//for use mongo Db Atles- online database
// import the necessary libraries
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8000;

// use cors
app.use(cors());

// use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// define routes Cusotomer
const customerdata = require('../backend/routes/custroute');
app.use('/cust', customerdata);

// define routes Order
const orderdata = require('../backend/routes/orderroute');
app.use('/order', orderdata);

// define routes Supplier
const supplierdata = require('../backend/routes/supplierroute');
app.use('/supplier', supplierdata);

// connect to MongoDB Atlas
mongoose.connect(
  'mongodb+srv://it21231896:mohamedkijan321@cluster0.rln7ptv.mongodb.net/',
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((error) => {
  console.error('Error connecting to MongoDB Atlas', error);
});

// start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});*/

//for mongo db Local connection(PC installed database)
//Express js imported
const express = require('express') //express library import

//import mongoose ODM to connect mongo db
const mongoose = require('mongoose'); //for connect to mongo db

const bodyParser = require('body-parser') //bodyParser is an middleware that inbetween front-end and Backend(database) data handling
const app = express()
const port = 8000

//CORS package
const cors = require('cors');

//Express data for customer
const customerdata = require('../backend/routes/custroute')

//for order
const orderdata = require('../backend/routes/orderroute')

//for suplier
const supplierdata = require('../backend/routes/supplierroute')

//for Employee
const employeeData = require('../backend/routes/employeeroute')

//for Bill details
const billData = require('../backend/routes/Billroute')


//db connection
//mongoose through database connectivity code here,-
//we can use any db name - here i used "mymerncustomerdb"
mongoose.connect('mongodb://127.0.0.1:27017/mymerncustomerdb')
  .then((x) => {    //.then -disply the message when db connecting Succesfully.
    console.log('Succesfully Connected to Mongo Database Called :', x.connections[0].name)
  })
  .catch((err) => { //.catch - comment is used to find the error that when database not connected .
    console.log("Error Connectiong to Mongo!!!!", err)
  })

//end of db connection code

//middleware - bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

//use cors
app.use(cors())

//customer
//the url we need - 'localhost:8000/cust/create-customer'    so,
app.use('/cust',customerdata)

//order
app.use('/order',orderdata )

//supplier
app.use('/supplier',supplierdata)

//employee
app.use('/employee',employeeData)

//Bill
app.use('/bill',billData)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// serve files in static' folder at root URL '/'
var express = require('express');
var app = express();  
app.use('/', express.static('static'));
var mongoose = require('mongoose');
var db = mongoose.connection;
var Instruments = require('./instrument');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
mongoose.connect('mongodb://localhost:27017/mydb')



//Get Data from MongoDB
app.get('/instruments', function (req, res) {
  var itemDetails = Instruments.find(function (err, itemDetails) {
      if (err) {
          res.send(err);
      }
      res.send(itemDetails);
      console.log(itemDetails);
  });
})




// serve files in static' folder at root URL '/'


app.get('/',function(req, res) {
 res.sendFile(__dirname + '/static/index.html');
   //res.send('Got a GET request for /api');
 })


 app.post('/new', function (req, res) {
    var ins = new Instruments();
    ins.name = req.body.name;
    ins.price = req.body.price;
    ins.tax = req.body.tax;
    ins.qty = req.body.qty;
	ins.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send({ message: 'New item inserted !' })
    })
    

});

app.listen(8080); // start server

console.log('Listening on port 8080');






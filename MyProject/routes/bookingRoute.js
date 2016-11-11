
var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'), //parses information from POST

//Any requests to this controller must pass through this 'use' function
//Copy and pasted from method-override
router.use(bodyParser.urlencoded({ extended: true }))

var mongoose = require('mongoose');
// var dbHost = 'mongodb://localhost:27017/MeraFilmDatabase';
// mongoose.connect(dbHost);
var bookingSchema = mongoose.Schema({

  MovieName:String,
  CityData:String,
  Datedata:String,
  TheatreData:String,
  TimeslotData:String,
  SeatNo: Array,
  NoOfSeats: String,
  SubTotal:String,
  CustomerName11:String,
  CustomerEmail11:String

 });
var Booking = mongoose.model('Booking', bookingSchema, 'booking');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//
// });
router.post('/addbooking/:a1/:a2/:a3/:a4/:a5/:a6/:a7/:a8/:a9/:a10', function(req, res){
  var booking = new Booking({

      MovieName:req.params.a1,
      CityData:req.params.a2,
      Datedata:req.params.a3,
      TheatreData:req.params.a4,
      TimeslotData:req.params.a5,
      SeatNo: JSON.parse(req.params.a6),
      NoOfSeats:req.params.a7,
      SubTotal:req.params.a8,
      CustomerName11:req.params.a9,
      CustomerEmail11:req.params.a10,
  });

  booking.save(function(err, docs){
    if ( err ) throw err;
  //console.log('Booking Saved'+docs);
  });

});

router.get('/blocking/:ti/:ci/:th/:ts', function (req, res) {

    Booking.find({
      MovieName:req.params.ti,
      CityData:req.params.ci,
      TheatreData:req.params.th,
      TimeslotData:req.params.ts
      }, function (err, docs) {
         res.json(docs);

    });
});

module.exports = router;

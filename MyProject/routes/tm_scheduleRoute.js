
var express = require('express');
var mongoose = require('mongoose');
bodyParser = require('body-parser');
var router = express.Router();
var moment= require('moment');
 //parses information from POST


//Any requests to this controller must pass through this 'use' function
//Copy and pasted from method-override
router.use(bodyParser.urlencoded({ extended: true }));



var dbHost = 'mongodb://localhost:27017/MeraFilmDatabase';
mongoose.connect(dbHost);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){

});

var tm_scheduleSchema = mongoose.Schema({
  Title: String,
  City: String,
  Theatre:String,
  Date: String,
  Timeslot: String
 });

var Tm_schedule = mongoose.model('Tm_schedule', tm_scheduleSchema, 'tm_schedule');

router.post('/addtm_schedule', function(req, res){
  var tm_schedule = new Tm_schedule({
                       Title: req.body.Title,
                       City:req.body.City,
                       Theatre:req.body.Theatre,
                       Date: req.body.Date,
                       Timeslot:req.body.Timeslot
  });
  tm_schedule.save(function(err, docs){
    console.log('Mapping Saved Sucessfully!'+docs);
  });
});

router.get('/tm_schedule', function (req, res) {
    Tm_schedule.find({}, function (err, docs) {
         res.json(docs);
    });
});

router.get('/tm_scheduleDetails/:m', function (req, res) {
    Tm_schedule.find({Title: req.params.m}, function (err, docs) {
      //  console.log(req.params.m);
      //  console.log(docs);
         res.json(docs);
    });
//console.log('API Called');

});




router.delete('/tm_schedule/:id', function(req, res){

      Tm_schedule.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);

    });
});

router.put('/tm_schedule/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Tm_schedule.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
});

module.exports = router;

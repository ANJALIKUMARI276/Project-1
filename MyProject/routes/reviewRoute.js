
var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'), //parses information from POST


//Any requests to this controller must pass through this 'use' function
//Copy and pasted from method-override
router.use(bodyParser.urlencoded({ extended: true }))

var mongoose = require('mongoose');
// var dbHost = 'mongodb://localhost:27017/MeraFilmDatabase';
// mongoose.connect(dbHost);

var reviewSchema = mongoose.Schema({
  ReviewMovie:String,
  CustomerName: String,
  Feedback: String
 });
var Review = mongoose.model('Review', reviewSchema, 'review');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//
// });


router.get('/review', function (req, res) {

    Review.find({}, function (err, docs) {
         res.json(docs);

    });
});



router.post('/addreview/:a1', function(req, res){

  var review = new Review({

      ReviewMovie:req.params.a1,
      CustomerName:req.body.CustomerName,
      Feedback:req.body.Feedback

  });

  review.save(function(err, docs){
    if ( err ) throw err;

    res.json(docs);
  });

});




module.exports = router;

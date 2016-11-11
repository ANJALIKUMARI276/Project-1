
var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'), //parses information from POST


//Any requests to this controller must pass through this 'use' function
//Copy and pasted from method-override
router.use(bodyParser.urlencoded({ extended: true }))

var mongoose = require('mongoose');
// var dbHost = 'mongodb://localhost:27017/MeraFilmDatabase';
// mongoose.connect(dbHost);

var theatreSchema = mongoose.Schema({

  theatreName: String,
  theatreCity: String
 });
var Theatre = mongoose.model('Theatre', theatreSchema, 'theatre');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//
// });


router.get('/theatre', function (req, res) {

    Theatre.find({}, function (err, docs) {
         res.json(docs);

    });
});



router.post('/addtheatre', function(req, res){


  var name = req.body.theatreName;
  var city= req.body.theatreCity;
  var theatre = new Theatre({

    theatreName:name,
    theatreCity: city
  });

  theatre.save(function(err, docs){
    if ( err ) throw err;

    res.json(docs);
  });

});

router.delete('/theatre/:id', function(req, res){

      Theatre.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);

    });
})

router.put('/theatre/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Movie.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})

module.exports = router;

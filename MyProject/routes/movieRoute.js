
var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'), //parses information from POST


//Any requests to this controller must pass through this 'use' function
//Copy and pasted from method-override
router.use(bodyParser.urlencoded({ extended: true }))


var mongoose = require('mongoose');
// var dbHost = 'mongodb://localhost:27017/MeraFilmDatabase';
// mongoose.connect(dbHost);

var movieSchema = mongoose.Schema({

                            Title:String,
                            Year:String,
                            Runtime:String,
                            Genre:String,
                            Director:String,
                            Actors:String,
                            Language:String,
                            Poster:String,
                            status:String
 });
var Movie = mongoose.model('Movie', movieSchema, 'movie');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//
// });


router.get('/movie', function (req, res) {

    Movie.find({}, function (err, docs) {
         res.json(docs);

    });
});



router.post('/addmovie', function(req, res){

var movie = new Movie({
                     Title : req.body.Title,
                     Year: req.body.Year,
                     Runtime:req.body.Runtime,
                     Genre:req.body.Genre,
                     Director:req.body.Director,
                     Actors: req.body.Actors,
                     Language:req.body.Language,
                     Poster: req.body.Poster,
                     status:"false"
});



  movie.save(function(err, docs){
    if ( err ) throw err;

    res.json(docs);
  });

});



router.delete('/movie/:id', function(req, res){

      Movie.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);

    });
});

router.put('/updatemovie/:Title/:val',function(req,res)
{
  Movie.findOneAndUpdate({Title:req.params.Title},
  {
    $set:{status:req.params.val}
  },function(err,data){
    res.json(data);
  //console.log(data);
  });
});

module.exports = router;

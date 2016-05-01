var mongoose = require('mongoose');
var Movie = require('./database/Movie_model');
var express = require('express');
var router = express.Router();



router.get('/', function(req, res) {
   Movie.find(function(err, results) {
        if (err) { console.log(err); }

        res.send(results);
    });

});

router.get('/:id', function(req, res) {
   Movie.findOne({ _id: req.params.id}, function(err, movie) {
    if (err) {
      return res.send(err);
    }

    res.json(movie);
  });
});



router.post('/', function(req, res) {
    var movie = new Movie(req.body);
    movie.save(function(err) {
        if (err) { console.log(err); }
        res.send('Movie saved');
    });
});


router.route('/:id')
    .get(function(req, res){
        res.json(req.movie);
    })
    .put(function(req, res){


        req.movie.Title = req.movie.Title;


        req.movie.save(function(err){
          if(err)
            res.status(500).send(err);
          else{
              res.json(req.movie);
            }
        });
    });


/* a voir
router.put('/:id', function(req, res) {
    var id = req.params.id;
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    Movie.update({ _id: mongoose.Types.ObjectId(id) }, {
        $set: { Title: req.body.Title }
    }, function(err) {
        if (err) { console.log(err); }

        res.send('Movie updated');
    });
});*/




router.delete('/:_id', function(req, res) {
    var id = req.params._id;
    Movie.remove({ _id: mongoose.Types.ObjectId(id) }, function(err) {
        if (err) { console.log(err); }

        res.send('Movie deleted');
    });
});

module.exports = router;
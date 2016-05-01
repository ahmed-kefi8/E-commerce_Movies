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


router.put('/:id', function(req, res) {
  return Movie.findById(req.params.id, function (err, movie) {
    movie.Title = req.body.Title;

    return movie.save(function (err) {
      if (!err) {
        console.log("updated");
      } else {
        console.log(err);
      }
      return res.send(movie);
    });
  });
});




router.delete('/:_id', function(req, res) {
    var id = req.params._id;
    Movie.remove({ _id: mongoose.Types.ObjectId(id) }, function(err) {
        if (err) { console.log(err); }

        res.send('Movie deleted');
    });
});

module.exports = router;
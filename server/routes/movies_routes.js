var mongoose = require('mongoose');
var models = require('../database/models');
var express = require('express');
var router = express.Router();

router.get('/movies', function(req, res) {
 models.Movie.find(function(err, results) {
  if (err) { console.log(err); }

  res.send(results);
});
});

router.get('/movies/:id', function(req, res) {
 models.Movie.findOne({ _id: req.params.id}, function(err, movie) {
  if (err) {
    return res.send(err);
  }
  res.json(movie);
});
});

router.post('/movies', function(req, res) {
  var movie = new models.Movie(req.body);
  movie.save(function(err) {
    if (err) { console.log(err); }
    res.send('Movie saved');
  });
});

router.put('/movies/:id', function(req, res) {
  models.Movie.findById(req.params.id, function (err, movie) {
   for (prop in req.body) {
    movie[prop] = req.body[prop];
  }
  movie.save(function (err) {
    if (!err) {
      console.log("updated");
    } else {
      console.log(err);
    }
    res.send(movie);
  });
});
});

router.delete('/movies/:_id', function(req, res) {
  var id = req.params._id;
  models.Movie.remove({ _id: mongoose.Types.ObjectId(id) }, function(err) {
    if (err) { console.log(err); }

    res.send('Movie deleted');
  });
});

module.exports = router;
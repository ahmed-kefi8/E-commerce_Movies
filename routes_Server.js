var mongoose = require('mongoose');
var models = require('./database/models');
var express = require('express');
var router = express.Router();


///////////  THE MOVIES CRUD METHODS  ///////////  
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




///////////  THE USERS CRUD METHODS  ///////////  

router.get('/users', function(req, res) {
   models.User.find(function(err, results) {
        if (err) { console.log(err); }

        res.send(results);
    });

});

router.get('/users/:id', function(req, res) {
   models.User.findOne({ _id: req.params.id}, function(err, user) {
    if (err) {
      return res.send(err);
    }

    res.json(user);
  });
});

router.get('/users/email/:email', function(req, res) {
  console.log("user by email fired from server");
   models.User.findOne({ email: req.params.email}, function(err, user) {
    if (err) {
      return res.send(err);
    }

    res.json(user);
  });
});


router.post('/users', function(req, res) {
    var user = new models.User(req.body);
    user.save(function(err) {
        if (err) { console.log(err); }
        res.send('User saved');
    });
});


router.put('/users/:id', function(req, res) {
  models.User.findById(req.params.id, function (err, user) {


   for (prop in req.body) {
      user[prop] = req.body[prop];
    }

    user.save(function (err) {
      if (!err) {
        console.log("user updated");
      } else {
        console.log(err);
      }
      res.send(user);
    });
  });
});


router.delete('/users/:_id', function(req, res) {
    var id = req.params._id;
    models.User.remove({ _id: mongoose.Types.ObjectId(id) }, function(err) {
        if (err) { console.log(err); }

        res.send('User deleted');
    });
});



module.exports = router;
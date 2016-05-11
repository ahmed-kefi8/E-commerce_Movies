var mongoose = require('mongoose');
var models = require('../database/models');
var express = require('express');
var router = express.Router();


 
router.get('/events', function(req, res) {
   models.Event.find(function(err, results) {
        if (err) { console.log(err); }

        res.send(results);
    });

});

router.get('/events/:id', function(req, res) {
   models.Event.findOne({ _id: req.params.id}, function(err, event) {
    if (err) {
      return res.send(err);
    }

    res.json(event);
  });
});


router.post('/events', function(req, res) {
    var event = new models.Event(req.body);
    event.save(function(err) {
        if (err) { console.log(err); }
        res.send('Event saved');
    });
});


router.put('/events/:id', function(req, res) {
  models.Event.findById(req.params.id, function (err, event) {


   for (prop in req.body) {
      event[prop] = req.body[prop];
    }

    event.save(function (err) {
      if (!err) {
        console.log("updated");
      } else {
        console.log(err);
      }
      res.send(event);
    });
  });
});


router.delete('/events/:_id', function(req, res) {
    var id = req.params._id;
    models.Event.remove({ _id: mongoose.Types.ObjectId(id) }, function(err) {
        if (err) { console.log(err); }

        res.send('Event deleted');
    });
});

module.exports = router;
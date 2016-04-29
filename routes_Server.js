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

router.post('/', function(req, res) {
    var movie = new Movie(req.body);
    movie.save(function(err) {
        if (err) { console.log(err); }

        res.send('Movie saved');
    });
});

/*router.put('/:id', function(req, res) {
    var id = req.params.id;
    Movie_model.update({ _id: mongoose.Types.ObjectId(id) }, {
        $set: { task: req.body.task }
    }, function(err) {
        if (err) { console.log(err); }

        res.send('Movie updated');
    });
});

router.delete('/:id', function(req, res) {
    var id = req.params.id;
    Movie_model.remove({ _id: mongoose.Types.ObjectId(id) }, function(err) {
        if (err) { console.log(err); }

        res.send('ToDo deleted');
    });
});*/

module.exports = router;
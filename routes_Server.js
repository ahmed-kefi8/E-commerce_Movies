var mongoose = require('mongoose');
var Movie_model = require('./database/Movie_model').Movie;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.send('Hello from /Movie_Store');
	/*
    Movie_model.find(function(err, results) {
        if (err) { console.log(err); }

        res.send({ movies: results });
    });*/
});


module.exports = router;
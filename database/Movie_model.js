var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Movie_Store');

var MovieSchema = mongoose.Schema(
	{
		Price : String,
Title : String,
Year : String,
Rated : String,
Released : String,
Runtime : String,
Genre : String,
Director : String,
Writer : String,
Actors : String,
Plot : String,
Language : String,
Country : String,
Awards : String,
Poster : String,
Metascore : String,
imdbRating : String,
imdbVotes : String,
imdbID : String,
Type : String,
Response : String
	});

module.exports = mongoose.model('Movie', MovieSchema);
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


var UserSchema = mongoose.Schema(
	{
FirstName : String,
LastName : String,
email : String,
Password : String
	});

var Movie = mongoose.model('Movie', MovieSchema);
var User = mongoose.model('User', UserSchema);


module.exports = {
  Movie: Movie,
  User: User
};
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
Imdbrating : String,
Imdbvotes : String,
Imdbid : String,
Type : String,
Response : String,
InStock : String
	});


var UserSchema = mongoose.Schema(
	{
email : String,
username : String,
firstName : String,
lastName : String,
password : String,
cart : []
	});


UserSchema.set('versionKey', false);




var Movie = mongoose.model('Movie', MovieSchema);
var User = mongoose.model('User', UserSchema);


module.exports = {
  Movie: Movie,
  User: User
};
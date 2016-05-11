var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/Movie_Store');
mongoose.connect('mongodb://ahmed:12345@ds011462.mlab.com:11462/movie_store');

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
cart : [],
reserved_Events: []
	});

UserSchema.set('versionKey', false);


var EventSchema = mongoose.Schema(
	{
title : String,
start : String,
end : String,
movie_title : String,
state : String
	});




var Movie = mongoose.model('Movie', MovieSchema);
var User = mongoose.model('User', UserSchema);
var Event = mongoose.model('Event', EventSchema);

module.exports = {
  Movie: Movie,
  User: User,
  Event: Event
};
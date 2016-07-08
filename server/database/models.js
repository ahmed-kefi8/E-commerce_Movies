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
	InStock : String,
	Preview_link : String
});


var UserSchema = mongoose.Schema(
{
	username : String,
	firstName : String,
	lastName : String,
	password : String,
	photo	: String,
	email : String,
	gender : String,
	birth_date : Date,
	address : String,
	phone_number : String,
	cart : [],
	wishlist : [],
	reserved_Events: [],
	fb_id: String,
	fb_token: String,
	role: String    
});

UserSchema.set('versionKey', false);


var EventSchema = mongoose.Schema(
{
	title : String,
	start : Date,
	end : Date,
	movie_title : String,
	movie_id : String,
	state : String,
	duration : String,
	url : String,
	userId : String
});

var Movie = mongoose.model('Movie', MovieSchema);
var User = mongoose.model('User', UserSchema);
var Event = mongoose.model('Event', EventSchema);

module.exports = {
	Movie: Movie,
	User: User,
	Event: Event
};
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var httpServer     = require("http").createServer(app);
var cors           = require('cors');


// set our port
var PORT = process.env.PORT || 3000;


app.use(cors());

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

//set the public folder of the app
app.use(express.static(__dirname + "/public"));

//load basic route for server
require('./server/routes/auth_routes')(app);
//require('./server/routes/movies_routes')(app);
require('./server/routes/basic')(app);




var Movie_Store_Routes = require('./server/routes/movies_routes');

app.use('/Movie_Store' , Movie_Store_Routes);




// startup our app at http://localhost:PORT
app.listen(PORT, function(){
console.log("Server running on port " + PORT);
});




// expose app           
exports = module.exports = app;
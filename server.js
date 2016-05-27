var express          = require('express');
var app              = express();
var bodyParser       = require('body-parser');
var methodOverride   = require('method-override');
var httpServer       = require("http").createServer(app);
var cors             = require('cors');
var http             = require('http').Server(app);
var io               = require('socket.io')(http);
var expressValidator = require('express-validator');


// set our port
var PORT = process.env.PORT || 3000;


app.use(cors());

// parse application/json
//app.use(bodyParser.json());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request.
app.use(methodOverride('X-HTTP-Method-Override')); 

//set the public folder of the app
app.use(express.static(__dirname + "/public"));

var users = [];
io.on('connection', function(socket) {
  var username = '';


  
  socket.on('request-users', function(){
    socket.emit('users', {users: users});
  });
  
  socket.on('message', function(data){
    io.emit('message', {username: data.username, message: data.message, photo: data.photo, date: data.date});
  })
  
  socket.on('add-user', function(data){

      io.emit('add-user', {
        username: data.username,
        photo : data.photo
      });
      username = data.username;
      console.log(username+" has Connected!");
      users.push({username : data.username, photo : data.photo});
    
  })



  socket.on('disconnect', function(){
    
    console.log("disconnect username: "+ username);
    console.log("inside disconnect : users.length before splice :  " + users.length);
var indice = -1;
    for(var i = 0; i <users.length; i++) {
      console.log("users[i].username: "+ users[i].username);
        if (users[i].username == username)
          {indice = i;}
    }

    users.splice(indice, 1);
        console.log("inside disconnect : users.length after splice :  " + users.length);
        console.log("disconnected: "+username);
    console.log("remove-user emitted  "+ username);
    io.emit('remove-user', {username: username});
  })
});


// Express Validator
app.use(expressValidator());


//load basic route for server
require('./server/routes/auth_routes')(app);
require('./server/routes/basic')(app);




var movies_routes = require('./server/routes/movies_routes');
var users_routes = require('./server/routes/users_routes');
var events_routes = require('./server/routes/events_routes');

app.use('/Movie_Store' , movies_routes);
app.use('/Movie_Store' , users_routes);
app.use('/Movie_Store' , events_routes);



// startup our app at http://localhost:PORT
http.listen(PORT, function(){
console.log("Server running on port " + PORT);
});




// expose app           
exports = module.exports = app;
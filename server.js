var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Movie_Store_Routes = require('./routes_Server');



var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));


app.use('/Movie_Store' , Movie_Store_Routes);


app.listen(PORT, function(){
console.log("Server running on port " + PORT);
});

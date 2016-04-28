var express = require('express');
var app = express();


var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

var Movie_Store_Routes = require('./routes_Server');
app.use('/Movie_Store' , Movie_Store_Routes);




app.listen(PORT, function(){
console.log("Server running on port " + PORT);
});

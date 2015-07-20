var express = require('express');
var ejs = require('ejs');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
//routes:

app.get('/', function(req,res){
   res.render('index', {
       title: 'Home'
   });
});

app.listen((3000), function(){
    console.log('listening on localhost:3000');
});
module.exports = app;
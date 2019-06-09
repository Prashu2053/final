//express server
var express= require('express');
var app= express();

//mongoose connection
var mongoose= require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });

//body parser 
var bodyparser= require('body-parser');
app.use(bodyparser.urlencoded({ extended:true }));

//path 
var path= require('path');

//middleware
app.use(express.static(path.join(__dirname,"public")));

//var router= require('./route1');
//app.use(router);

//router yo home page
var home_routes= require('./home_route');
app.use(home_routes);
//router to donor registration
var reg_routes= require('./registration_route');
app.use(reg_routes);

app.listen(3000);


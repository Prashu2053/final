//express server
var express= require('express');
var app= express();
//schema required
var register = require('./schemas/registration_schema');

//mongoose connection
var mongoose= require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect("mongodb://prashu:prashu123@ds259787.mlab.com:59787/finalproject", { useNewUrlParser: true });

//View Engine
app.set("view engine", "hbs");

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

app.get('/registredUsers', (req, res) => {
    register.find({}, (err, data) => {
        //find{ name: req.name}
        data = data[5];
        console.log(data);
        res.render("1", { name: data.name, fileName: data.imageLocation });
    });
    
})

app.listen(3000);

